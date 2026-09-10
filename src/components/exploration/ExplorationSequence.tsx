import { useEffect, useRef } from 'react'
import { explorationSequence as config } from '../../config/explorationSequence'
import { explorationContent as content } from '../../content/exploration'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function ExplorationSequence() {
  const rootRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { alpha: false })
    if (!root || !canvas || !context) return
    const abort = new AbortController()
    const cache = new Map<number, HTMLImageElement>()
    const loading = new Map<number, HTMLImageElement>()
    const failed = new Set<number>()
    const compact = window.matchMedia('(max-width: 767px)')
    let queue: number[] = []
    let ready = false
    let near = false
    let disposed = false
    let raf = 0
    let target: number = reducedMotion ? config.staticFrame : 1
    let previous = target
    let drawn = 0
    root.dataset.ready = 'false'

    const schedule = () => {
      if (!disposed && !raf) raf = requestAnimationFrame(update)
    }
    const pump = () => {
      while (!disposed && near && loading.size < (compact.matches ? 2 : 3) && queue.length) {
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
            while (cache.size > (compact.matches ? 12 : 24)) {
              const oldest = [...cache.keys()].find(key => key !== target && key !== drawn)
              if (oldest === undefined) break
              cache.delete(oldest)
            }
            schedule()
          } else failed.add(frame)
          pump()
        }
        image.onload = () => { void image.decode().then(() => finish(true), () => finish(false)) }
        image.onerror = () => finish(false)
        image.src = config.srcForFrame(frame)
      }
    }
    function update() {
      raf = 0
      if (disposed || !ready || !near || !root || !canvas || !context) return
      const travel = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const progress = Math.min(1, Math.max(0, window.scrollY / travel))
      target = reducedMotion ? config.staticFrame : 1 + Math.round(progress * (config.frameCount - 1))
      const direction = target >= previous ? 1 : -1
      previous = target
      const nearby = [target]
      if (!reducedMotion) {
        for (let i = 1; i <= (compact.matches ? 4 : 8); i++) nearby.push(target + direction * i)
        for (let i = 1; i <= 2; i++) nearby.push(target - direction * i)
      }
      queue = nearby.filter(frame => frame >= 1 && frame <= config.frameCount && !failed.has(frame))
      pump()
      const available = cache.has(target) ? target : [...cache.keys()].sort((a, b) => Math.abs(a - target) - Math.abs(b - target))[0]
      const image = cache.get(available)
      if (image && available !== drawn) {
        // Proportional cover fills the background without stretching the source.
        const scale = Math.max(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight)
        const width = image.naturalWidth * scale
        const height = image.naturalHeight * scale
        context.imageSmoothingEnabled = true
        context.imageSmoothingQuality = 'high'
        context.drawImage(image, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height)
        cache.delete(available)
        cache.set(available, image)
        drawn = available
        root.dataset.ready = 'true'
        root.dataset.frame = String(drawn)
        if (labelRef.current) labelRef.current.textContent = `${content.stages[Math.floor((drawn - 1) / 60)]} / ${String(drawn).padStart(3, '0')}`
      }
      root.style.setProperty('--exploration-progress', String(reducedMotion ? 0 : progress))
    }
    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, compact.matches ? 1.5 : 2)
      const width = Math.max(1, Math.round(bounds.width * dpr))
      const height = Math.max(1, Math.round(bounds.height * dpr))
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        drawn = 0
      }
      schedule()
    }
    const visibility = new IntersectionObserver(entries => {
      near = entries[0].isIntersecting
      if (near) schedule()
      else queue = []
    }, { rootMargin: '300px' })
    visibility.observe(root)
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    observer.observe(root)
    observer.observe(document.documentElement)
    if (!reducedMotion) window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', resize, { passive: true })
    void fetch(config.manifest, { signal: abort.signal }).then(response => {
      if (!response.ok) throw new Error('Exploration manifest unavailable')
      return response.json()
    }).then(manifest => {
      if (disposed) return
      if (manifest.frameCount !== config.frameCount || manifest.width !== config.width || manifest.height !== config.height || manifest.prefix !== 'frame-' || manifest.extension !== '.webp') throw new Error('Invalid Exploration manifest')
      ready = true
      resize()
    }).catch(() => {
      // The styled fallback remains; navigation and the hero never depend on assets.
    })
    return () => {
      disposed = true
      abort.abort()
      cancelAnimationFrame(raf)
      visibility.disconnect()
      observer.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', resize)
      loading.forEach(image => { image.onload = null; image.onerror = null; image.src = '' })
      loading.clear()
      cache.clear()
      queue = []
    }
  }, [reducedMotion])

  return (
    <section ref={rootRef} className="exploration-sequence" aria-hidden="true">
      <div className="exploration-sequence__sticky" aria-hidden="true">
        <div className="exploration-sequence__visual">
          <div className="exploration-sequence__fallback">{content.brand}<span>{content.stages[4]}</span></div>
          <canvas ref={canvasRef} width={1280} height={720} />
        </div>
        <div className="exploration-sequence__caption"><span>{content.eyebrow}</span><span ref={labelRef}>{content.stages[0]} / 001</span></div>
        <div className="exploration-sequence__progress"><i /></div>
      </div>
    </section>
  )
}
