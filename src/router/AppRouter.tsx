import { lazy, Suspense, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

const CorporatePage = lazy(() => import('../App'))
const DevelopmentPage = lazy(() => import('../pages/DevelopmentPage'))
const ExplorationPage = lazy(() => import('../pages/ExplorationPage'))
const IntelligencePage = lazy(() => import('../pages/IntelligencePage'))
const AdminInquiriesPage = lazy(() => import('../pages/AdminInquiriesPage'))

function RouteFallback({ label }: { label: string }) {
  return <div className="sr-only" role="status">{label}</div>
}

function ScrollToLocation() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    let frame = 0
    let cancelled = false

    const scrollToLocation = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        if (cancelled) return

        if (hash) {
          const id = decodeURIComponent(hash.slice(1))
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ block: 'start' })
            return
          }
        }

        window.scrollTo({ top: 0, behavior: 'instant' })
      })
    }

    scrollToLocation()
    void document.fonts.ready.then(scrollToLocation)

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
    }
  }, [pathname, hash])

  return null
}

export function AppRouter() {
  return (
    <>
      <ScrollToLocation />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<RouteFallback label="Loading NOLBVIA" />}>
              <CorporatePage />
            </Suspense>
          }
        />
        <Route
          path="/development"
          element={
            <Suspense fallback={<RouteFallback label="Loading NOLBVIA Development" />}>
              <DevelopmentPage />
            </Suspense>
          }
        />
        <Route
          path="/exploration"
          element={
            <Suspense fallback={<RouteFallback label="Loading NOLBVIA Exploration" />}>
              <ExplorationPage />
            </Suspense>
          }
        />
        <Route
          path="/intelligence"
          element={
            <Suspense fallback={<RouteFallback label="Loading NOLBVIA Intelligence" />}>
              <IntelligencePage />
            </Suspense>
          }
        />
        <Route
          path="/admin/inquiries"
          element={
            <Suspense fallback={<RouteFallback label="Loading NOLBVIA Admin Console" />}>
              <AdminInquiriesPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
