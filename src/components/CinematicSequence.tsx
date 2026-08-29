import { useCallback, useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export type CinematicScene = {
  id: string
  label: string
  selector: string
  startFrame: number
  endFrame: number
}

type CinematicSequenceProps = {
  className?: string
  enabled: boolean
  frameCount: number
  fullPage?: boolean
  scenes?: CinematicScene[]
  srcForFrame: (frame: number) => string
}

type CachedFrame = { image: HTMLImageElement; lastUsed: number }
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export function CinematicSequence({ className = '', enabled, frameCount, fullPage = true, scenes = [], srcForFrame }: CinematicSequenceProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameLabelRef = useRef<HTMLSpanElement>(null)
  const sceneLabelRef = useRef<HTMLSpanElement>(null)
  const cacheRef = useRef<Map<number, CachedFrame>>(new Map())
  const loadingRef = useRef<Set<number>>(new Set())
  const queueRef = useRef<number[]>([])
  const enqueueRef = useRef<(frames: number[]) => void>(() => undefined)
  const scheduleRenderRef = useRef<() => void>(() => undefined)
  const activeLoadsRef = useRef(0)
  const loadGenerationRef = useRef(0)
  const currentFrameRef = useRef(1)
  const targetFrameRef = useRef(1)
  const animationRef = useRef<number | null>(null)
  const scrollRef = useRef<number | null>(null)
  const reducedMotion = usePrefersReducedMotion()
  const [ready, setReady] = useState(false)
  const [initializing, setInitializing] = useState(true)
  const [startupProgress, setStartupProgress] = useState(0)

  const drawFrame = useCallback((image: HTMLImageElement) => {
    const canvas = canvasRef.current
    if (!canvas || !image.naturalWidth || !image.naturalHeight) return
    const context = canvas.getContext('2d', { alpha: false })
    if (!context) return
    const scale = Math.max(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight)
    const renderedWidth = image.naturalWidth * scale
    const renderedHeight = image.naturalHeight * scale
    const focalX = window.innerWidth < 700 ? 0.62 : 0.54
    context.imageSmoothingEnabled = true
    context.imageSmoothingQuality = 'high'
    context.drawImage(image, (canvas.width - renderedWidth) * focalX, (canvas.height - renderedHeight) * 0.5, renderedWidth, renderedHeight)
  }, [])

  const getRenderableFrame = useCallback((requestedFrame: number) => {
    const exact = cacheRef.current.get(requestedFrame)
    if (exact) { exact.lastUsed = performance.now(); return exact.image }
    let closest: CachedFrame | undefined
    let closestDistance = Number.POSITIVE_INFINITY
    for (const [frame, cached] of cacheRef.current) {
      const distance = Math.abs(frame - requestedFrame)
      if (distance < closestDistance) { closest = cached; closestDistance = distance }
    }
    if (closest) closest.lastUsed = performance.now()
    return closest?.image
  }, [])

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75)
    canvas.width = Math.round(window.innerWidth * pixelRatio)
    canvas.height = Math.round(window.innerHeight * pixelRatio)
    const image = getRenderableFrame(Math.round(currentFrameRef.current))
    if (image) drawFrame(image)
  }, [drawFrame, getRenderableFrame])

  useEffect(() => {
    if (!enabled) return
    const generation = loadGenerationRef.current + 1
    loadGenerationRef.current = generation
    let mounted = true
    const loadingFrames = loadingRef.current
    const startupFrames = new Set([1, 2, 3, 4, 5, 6])
    const completedStartupFrames = new Set<number>()
    const cacheLimit = window.innerWidth < 700 ? 22 : 44
    const concurrency = window.innerWidth < 700 ? 3 : 5

    const trimCache = () => {
      if (cacheRef.current.size <= cacheLimit) return
      const protectedFrames = new Set([1, Math.round(currentFrameRef.current), targetFrameRef.current])
      const removable = [...cacheRef.current.entries()].filter(([frame]) => !protectedFrames.has(frame)).sort((a, b) => a[1].lastUsed - b[1].lastUsed)
      while (cacheRef.current.size > cacheLimit && removable.length) {
        const candidate = removable.shift()
        if (candidate) cacheRef.current.delete(candidate[0])
      }
    }

    const completeStartupFrame = (frame: number) => {
      if (!startupFrames.has(frame) || completedStartupFrames.has(frame)) return
      completedStartupFrames.add(frame)
      const progress = Math.round((completedStartupFrames.size / startupFrames.size) * 100)
      setStartupProgress(progress)
      if (progress === 100) setInitializing(false)
    }

    const pumpQueue = () => {
      while (mounted && activeLoadsRef.current < concurrency && queueRef.current.length) {
        const frame = queueRef.current.shift()
        if (!frame || cacheRef.current.has(frame) || loadingFrames.has(frame)) continue
        activeLoadsRef.current += 1
        loadingFrames.add(frame)
        const image = new Image()
        image.decoding = 'async'
        image.src = srcForFrame(frame)
        image.onload = () => {
          if (generation !== loadGenerationRef.current) return
          if (mounted) {
            cacheRef.current.set(frame, { image, lastUsed: performance.now() })
            completeStartupFrame(frame)
            trimCache()
            if (frame === 1) { setReady(true); resizeCanvas(); drawFrame(image) }
            if (Math.abs(frame - targetFrameRef.current) <= 2) scheduleRenderRef.current()
          }
          loadingFrames.delete(frame)
          activeLoadsRef.current -= 1
          pumpQueue()
        }
        image.onerror = () => {
          if (generation !== loadGenerationRef.current) return
          if (mounted) completeStartupFrame(frame)
          loadingFrames.delete(frame)
          activeLoadsRef.current -= 1
          pumpQueue()
        }
      }
    }

    enqueueRef.current = (frames) => {
      const nextFrames = frames.map((frame) => clamp(Math.round(frame), 1, frameCount)).filter((frame, index, list) => list.indexOf(frame) === index).filter((frame) => !cacheRef.current.has(frame) && !loadingFrames.has(frame))
      queueRef.current = [...nextFrames, ...queueRef.current.filter((frame) => !nextFrames.includes(frame))].slice(0, 42)
      pumpQueue()
    }

    enqueueRef.current([...startupFrames, ...scenes.flatMap((scene) => [scene.startFrame, scene.endFrame]), frameCount])
    return () => {
      mounted = false
      if (loadGenerationRef.current === generation) loadGenerationRef.current += 1
      queueRef.current = []
      loadingFrames.clear()
      activeLoadsRef.current = 0
      enqueueRef.current = () => undefined
    }
  }, [drawFrame, enabled, frameCount, resizeCanvas, scenes, srcForFrame])

  useEffect(() => {
    if (!ready) return
    const renderStep = () => {
      animationRef.current = null
      const difference = targetFrameRef.current - currentFrameRef.current
      currentFrameRef.current = Math.abs(difference) < 0.35 ? targetFrameRef.current : currentFrameRef.current + difference * 0.24
      const image = getRenderableFrame(Math.round(currentFrameRef.current))
      if (image) drawFrame(image)
      if (Math.abs(targetFrameRef.current - currentFrameRef.current) >= 0.35) animationRef.current = requestAnimationFrame(renderStep)
    }
    scheduleRenderRef.current = () => { if (animationRef.current === null) animationRef.current = requestAnimationFrame(renderStep) }

    const resolveScene = () => {
      const maximumScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      const rawScrollPosition = window.scrollY
      const scrollPosition = rawScrollPosition + Math.min(window.innerHeight * 0.52, rawScrollPosition * 0.25)
      const resolvedScenes = scenes.map((scene) => ({ ...scene, element: document.querySelector<HTMLElement>(scene.selector) })).filter((scene): scene is typeof scene & { element: HTMLElement } => Boolean(scene.element)).map((scene) => ({ ...scene, top: scene.element.getBoundingClientRect().top + window.scrollY }))
      if (!fullPage || !resolvedScenes.length) {
        const progress = clamp(rawScrollPosition / maximumScroll, 0, 1)
        return { frame: Math.round(1 + progress * (frameCount - 1)), progress, scene: scenes[0] }
      }
      let activeIndex = 0
      resolvedScenes.forEach((scene, index) => { if (scrollPosition >= scene.top) activeIndex = index })
      const activeScene = resolvedScenes[activeIndex]
      const nextTop = resolvedScenes[activeIndex + 1]?.top ?? maximumScroll
      const localProgress = clamp((scrollPosition - activeScene.top) / Math.max(nextTop - activeScene.top, 1), 0, 1)
      return { frame: Math.round(activeScene.startFrame + localProgress * (activeScene.endFrame - activeScene.startFrame)), progress: clamp(rawScrollPosition / maximumScroll, 0, 1), scene: activeScene }
    }

    const updateFromScroll = () => {
      scrollRef.current = null
      const { frame, progress, scene } = resolveScene()
      targetFrameRef.current = reducedMotion ? 1 : frame
      const direction = targetFrameRef.current >= currentFrameRef.current ? 1 : -1
      const ahead = window.innerWidth < 700 ? 5 : 10
      const behind = window.innerWidth < 700 ? 2 : 5
      const nearbyFrames = [targetFrameRef.current]
      for (let offset = 1; offset <= ahead; offset += 1) nearbyFrames.push(targetFrameRef.current + offset * direction)
      for (let offset = 1; offset <= behind; offset += 1) nearbyFrames.push(targetFrameRef.current - offset * direction)
      enqueueRef.current(nearbyFrames)
      scheduleRenderRef.current()
      if (rootRef.current) { rootRef.current.dataset.scene = scene?.id ?? 'global'; rootRef.current.style.setProperty('--sequence-progress', String(progress)) }
      if (frameLabelRef.current) frameLabelRef.current.textContent = `${String(frame).padStart(3, '0')} / ${frameCount}`
      if (sceneLabelRef.current) sceneLabelRef.current.textContent = scene?.label ?? 'NOLBVIA CORE'
    }

    const onScroll = () => { if (scrollRef.current === null) scrollRef.current = requestAnimationFrame(updateFromScroll) }
    const onResize = () => { resizeCanvas(); onScroll() }
    resizeCanvas(); updateFromScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize)
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current)
      if (scrollRef.current !== null) cancelAnimationFrame(scrollRef.current)
      scheduleRenderRef.current = () => undefined
    }
  }, [drawFrame, frameCount, fullPage, getRenderableFrame, ready, reducedMotion, resizeCanvas, scenes])

  return <div ref={rootRef} className={`cinematic-sequence ${className} ${ready ? 'has-sequence' : 'has-fallback'} ${initializing ? 'is-initializing' : 'is-initialized'}`} aria-hidden="true" data-scene="hero">
    <canvas ref={canvasRef} className="sequence-canvas" />
    <div className="cinematic-vignette" /><div className="cinematic-hud-scanlines" />
    <div className="sequence-loader"><span>[ NOLBVIA_CORE ]</span><strong>INITIALIZING VISUAL SYSTEM</strong><div className="sequence-loader-track"><i style={{ width: `${startupProgress}%` }} /></div><span>{String(startupProgress).padStart(3, '0')}%</span></div>
    <div className="sequence-status"><span ref={sceneLabelRef}>SYSTEM ACTIVATION</span><strong ref={frameLabelRef}>001 / {frameCount}</strong></div>
    <div className="sequence-progress-rail"><i /></div>
    {!ready && <div className="core-fallback"><div className="core-halo halo-a" /><div className="core-halo halo-b" /><div className="core-orbit orbit-a"><i /></div><div className="core-orbit orbit-b"><i /></div><div className="core-object"><span>N</span></div></div>}
  </div>
}
