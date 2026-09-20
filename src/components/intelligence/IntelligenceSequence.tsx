import { useEffect, useRef } from 'react'
import { intelligenceSequence as config } from '../../config/intelligenceSequence'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function IntelligenceSequence() {
  const rootRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    const canvas = canvasRef.current
    if (!root || !canvas) return

    const context = canvas.getContext('2d', { alpha: false })
    if (!context) return

    const sequenceRoot = root
    const sequenceCanvas = canvas
    const sequenceContext = context

    const abort = new AbortController()
    const cache = new Map<number, HTMLImageElement>()
    const loading = new Map<number, HTMLImageElement>()
    const failed = new Set<number>()
    const mobile = window.matchMedia('(max-width: 767px)').matches
    const cacheLimit = mobile ? 12 : 24
    const concurrency = mobile ? 2 : 3
    let queue: number[] = []
    let count = 0
    let target = 1
    let previousTarget = 1
    let drawn = 0
    let raf = 0
    let disposed = false

    const schedule = () => {
      if (!disposed && !raf) raf = requestAnimationFrame(update)
    }

    const trimCache = () => {
      while (cache.size > cacheLimit) {
        const oldest = [...cache.keys()].find(frame => frame !== drawn && frame !== target)
        if (oldest === undefined) return
        const image = cache.get(oldest)
        if (image) image.src = ''
        cache.delete(oldest)
      }
    }

    const pump = () => {
      while (!disposed && loading.size < concurrency && queue.length) {
        const frame = queue.shift()!
        if (cache.has(frame) || loading.has(frame) || failed.has(frame)) continue

        const image = new Image()
        image.decoding = 'async'
        loading.set(frame, image)

        const finish = (success: boolean) => {
          if (disposed) return
          loading.delete(frame)
          image.onload = null
          image.onerror = null
          if (success) {
            cache.set(frame, image)
            trimCache()
            schedule()
          } else {
            failed.add(frame)
          }
          pump()
        }

        image.onload = () => {
          void image.decode().then(() => finish(true), () => finish(false))
        }
        image.onerror = () => finish(false)
        image.src = config.srcForFrame(frame)
      }
    }

    const resize = () => {
      const bounds = sequenceCanvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2)
      const width = Math.max(1, Math.round(bounds.width * dpr))
      const height = Math.max(1, Math.round(bounds.height * dpr))
      if (sequenceCanvas.width !== width || sequenceCanvas.height !== height) {
        sequenceCanvas.width = width
        sequenceCanvas.height = height
        drawn = 0
      }
      schedule()
    }

    function update() {
      raf = 0
      if (disposed || !count) return

      const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const progress = reducedMotion ? 0 : Math.min(1, Math.max(0, window.scrollY / scrollRange))
      target = reducedMotion ? 1 : Math.round(progress * (count - 1)) + 1

      const direction = target >= previousTarget ? 1 : -1
      previousTarget = target
      const nearby = [target]
      if (!reducedMotion) {
        for (let offset = 1; offset <= (mobile ? 4 : 8); offset += 1) nearby.push(target + offset * direction)
        for (let offset = 1; offset <= 2; offset += 1) nearby.push(target - offset * direction)
      }

      queue = nearby.filter(frame => (
        frame >= 1
        && frame <= count
        && !cache.has(frame)
        && !loading.has(frame)
        && !failed.has(frame)
      ))
      pump()

      const available = cache.has(target)
        ? target
        : [...cache.keys()].sort((a, b) => Math.abs(a - target) - Math.abs(b - target))[0]
      const image = available === undefined ? undefined : cache.get(available)

      if (image && available !== drawn) {
        const scale = Math.max(sequenceCanvas.width / image.naturalWidth, sequenceCanvas.height / image.naturalHeight)
        const width = image.naturalWidth * scale
        const height = image.naturalHeight * scale
        sequenceContext.fillStyle = '#030811'
        sequenceContext.fillRect(0, 0, sequenceCanvas.width, sequenceCanvas.height)
        sequenceContext.drawImage(image, (sequenceCanvas.width - width) / 2, (sequenceCanvas.height - height) / 2, width, height)
        cache.delete(available)
        cache.set(available, image)
        drawn = available
        sequenceRoot.dataset.ready = 'true'
        sequenceRoot.dataset.frame = String(available)
      }
    }

    const observer = new ResizeObserver(resize)
    observer.observe(sequenceCanvas)
    observer.observe(document.documentElement)
    window.addEventListener('resize', resize, { passive: true })
    if (!reducedMotion) window.addEventListener('scroll', schedule, { passive: true })
    void fetch(config.manifest, { signal: abort.signal }).then(response => {
      if (!response.ok) throw new Error('Intelligence sequence manifest unavailable')
      return response.json() as Promise<{ frameCount: number; width: number; height: number; prefix: string; extension: string }>
    }).then(manifest => {
      if (disposed) return
      if (
        manifest.frameCount !== config.frameCount
        || manifest.width !== config.width
        || manifest.height !== config.height
        || manifest.prefix !== 'ezgif-frame-'
        || manifest.extension !== '.webp'
      ) throw new Error('Invalid Intelligence sequence manifest')
      count = manifest.frameCount
      resize()
    }).catch(() => {
      // The styled fallback remains visible and all page content stays usable.
    })

    return () => {
      disposed = true
      abort.abort()
      observer.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', schedule)
      cancelAnimationFrame(raf)
      loading.forEach(image => {
        image.onload = null
        image.onerror = null
        image.src = ''
      })
      cache.forEach(image => { image.src = '' })
      loading.clear()
      cache.clear()
      queue = []
    }
  }, [reducedMotion])

  return (
    <div ref={rootRef} className="intelligence-sequence" aria-hidden="true">
      <div className="intelligence-sequence__fallback" />
      <canvas ref={canvasRef} width={config.width} height={config.height} />
    </div>
  )
}
