import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const CorporatePage = lazy(() => import('../App'))
const DevelopmentPage = lazy(() => import('../pages/DevelopmentPage'))

function RouteFallback({ label }: { label: string }) {
  return <div className="sr-only" role="status">{label}</div>
}

export function AppRouter() {
  return (
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
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
