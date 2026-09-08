import { useEffect, useRef } from 'react'
import { developmentSequence as config } from '../../config/developmentSequence'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function DevelopmentSequence() {
  const rootRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stageRef = useRef<HTMLSpanElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    const canvas = canvasRef.current
    if (!root || !canvas) return
    const context = canvas.getContext('2d', { alpha: false })
    if (!context) return
    const abort = new AbortController()
    const cache = new Map<number, HTMLImageElement>()
    const loading = new Map<number, HTMLImageElement>()
    const failed = new Set<number>()
    const mobile = window.matchMedia('(max-width: 767px)').matches
    const limit = mobile ? 12 : 24
    const concurrency = mobile ? 2 : 3
    let queue: number[] = []
    let count = 0
    let target = 1
    let drawn = 0
    let raf = 0
    let disposed = false
    let previousTarget = 1

    const schedule = () => {
      if (!disposed && !raf) raf = requestAnimationFrame(update)
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
            while (cache.size > limit) {
              const oldest = [...cache.keys()].find(key => key !== drawn && key !== target)
              if (oldest === undefined) break
              cache.delete(oldest)
            }
            schedule()
          } else failed.add(frame)
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
      const bounds = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2)
      const width = Math.max(1, Math.round(bounds.width * dpr))
      const height = Math.max(1, Math.round(bounds.height * dpr))
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        drawn = 0
      }
      schedule()
    }
    function update() {
      raf = 0
      if (disposed || !count || !root || !canvas || !context) return
      const maximumScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const progress = reducedMotion ? 0 : Math.min(1, Math.max(0, window.scrollY / maximumScroll))
      target = Math.round(progress * (count - 1)) + 1
      const direction = target >= previousTarget ? 1 : -1
      previousTarget = target
      const nearby = [target]
      if (!reducedMotion) {
        for (let i = 1; i <= (mobile ? 4 : 8); i++) nearby.push(target + i * direction)
        for (let i = 1; i <= 2; i++) nearby.push(target - i * direction)
      }
      // Replace stale queued work when scrolling rapidly or following an anchor.
      queue = nearby.filter(frame => frame >= 1 && frame <= count && !cache.has(frame) && !loading.has(frame) && !failed.has(frame))
      pump()
      const available = cache.has(target) ? target : [...cache.keys()].sort((a, b) => Math.abs(a - target) - Math.abs(b - target))[0]
      const image = cache.get(available)
      if (image && available !== drawn) {
        const scale = Math.max(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight)
        const width = image.naturalWidth * scale
        const height = image.naturalHeight * scale
        context.fillStyle = '#030811'
        context.fillRect(0, 0, canvas.width, canvas.height)
        context.drawImage(image, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height)
        cache.delete(available)
        cache.set(available, image)
        drawn = available
        root.dataset.ready = 'true'
        root.dataset.frame = String(available)
      }
      if (stageRef.current) stageRef.current.textContent = `${String(drawn || 1).padStart(3, '0')} / ${count}`
      root.style.setProperty('--development-sequence-progress', String(progress))
    }
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    observer.observe(document.documentElement)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', resize, { passive: true })
    void fetch(config.manifest, { signal: abort.signal }).then(response => {
      if (!response.ok) throw new Error('Sequence manifest unavailable')
      return response.json() as Promise<{ frameCount: number; width: number; height: number }>
    }).then(manifest => {
      if (disposed) return
      if (!Number.isInteger(manifest.frameCount) || manifest.frameCount < 1 || manifest.width <= 0 || manifest.height <= 0) throw new Error('Invalid sequence manifest')
      count = manifest.frameCount
      resize()
    }).catch(() => {
      // The static fallback remains visible; content and navigation stay usable.
    })
    return () => {
      disposed = true
      abort.abort()
      observer.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
      loading.forEach(image => { image.onload = null; image.onerror = null; image.src = '' })
      loading.clear()
      cache.clear()
      queue = []
    }
  }, [reducedMotion])

  return (
    <div ref={rootRef} className="development-sequence" aria-hidden="true">
      <div className="development-sequence__sticky">
        <div className="development-sequence__heading"><span>DEVELOPMENT / ENGINEERING IN MOTION</span><span ref={stageRef} aria-hidden="true">RESEARCH → FUTURE</span></div>
        <div className="development-sequence__visual" aria-hidden="true">
          <div className="development-sequence__fallback">NOLBVIA <span>DEVELOPMENT</span></div>
          <canvas ref={canvasRef} width="1280" height="720" />
        </div>
        <div className="development-sequence__progress" aria-hidden="true"><i /></div>
        <p className="sr-only">Research, architecture, engineering, intelligence, computing, digital systems, products and future. This decorative sequence follows scrolling. All division information remains available below.</p>
      </div>
    </div>
  )
}
