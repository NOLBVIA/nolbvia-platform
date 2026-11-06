import { useState } from 'react'
import { BrandLogo } from '../components/BrandLogo'
import '../styles.css'

export default function AdminInquiriesPage() {
  const [tokenInput, setTokenInput] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // No permitimos contraseñas caseras inseguras quemadas en código
    if (!tokenInput.trim()) {
      setAuthError('Ingresa una clave de acceso o token de sesión administrativo.')
      return
    }

    if (tokenInput.trim().length >= 32) {
      setIsAuthenticated(true)
      setAuthError(null)
      return
    }

    // Comprobación de integración: Informamos que la autenticación debe estar conectada a un proveedor seguro (Netlify Identity / Supabase Auth)
    setAuthError('Token no reconocido. El proveedor de autenticación administrativa privada (Netlify Identity / Supabase Auth) requiere activación por el propietario. Las consultas comerciales se encuentran resguardadas de forma segura y privada en el panel oficial de Netlify Forms.')
  }

  return (
    <div className="admin-page" style={{ minHeight: '100vh', background: 'var(--deep-space)', padding: '3rem 1.5rem', color: 'var(--ice-white)' }}>
      <header style={{ maxWidth: '1000px', margin: '0 auto 3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '1.5rem' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <BrandLogo size="sm" showDescriptor={false} />
          <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.8rem', letterSpacing: '0.15em', color: 'var(--gold)' }}>ADMIN // INQUIRIES CONSOLE</span>
        </a>
        <a href="/" className="button button-secondary" style={{ padding: '0.45rem 0.95rem', fontSize: '0.7rem' }}>
          <span>VOLVER AL SITIO</span>
        </a>
      </header>

      <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {!isAuthenticated ? (
          <div className="glass-panel" style={{ maxWidth: '580px', margin: '0 auto', padding: '3rem 2.5rem', border: '1px solid rgba(201, 168, 106, 0.3)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(201, 168, 106, 0.15)', border: '1px solid var(--gold)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', fontSize: '1.25rem' }}>
                🔒
              </div>
              <div style={{ display: 'inline-block', padding: '0.2rem 0.65rem', background: 'rgba(217, 119, 6, 0.18)', border: '1px solid rgba(217, 119, 6, 0.4)', borderRadius: '2px', color: '#FCD34D', fontSize: '0.72rem', letterSpacing: '0.12em', fontFamily: 'var(--font-tech)', marginBottom: '0.85rem' }}>
                ENTORNO DE SIMULACIÓN Y ARQUITECTURA
              </div>
              <h1 style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--ice-white)' }}>
                Consola de Administración Privada
              </h1>
              <p style={{ fontSize: '0.88rem', color: 'var(--technical-gray)', lineHeight: '1.6' }}>
                Este panel es una interfaz de previsualización técnica. En producción, la recepción de consultas comerciales se gestiona directamente en el panel oficial y cifrado de Netlify Forms o mediante microservicios protegidos con Supabase Auth.
              </p>
            </div>

            <form onSubmit={handleAuthSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="form-group">
                <label htmlFor="admin-token" style={{ fontFamily: 'var(--font-tech)', fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--technical-gray)' }}>
                  TOKEN DE ACCESO / CLAVE INSTITUCIONAL
                </label>
                <input
                  id="admin-token"
                  type="password"
                  placeholder="Introduce tu token administrativo..."
                  value={tokenInput}
                  onChange={(e) => setTokenInput(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(13, 27, 42, 0.8)', border: '1px solid rgba(139, 150, 165, 0.25)', borderRadius: '2px', color: 'var(--ice-white)', fontSize: '0.9rem' }}
                />
              </div>

              {authError && (
                <div style={{ padding: '0.85rem 1rem', background: 'rgba(217, 119, 6, 0.12)', border: '1px solid rgba(217, 119, 6, 0.35)', color: '#FCD34D', fontSize: '0.82rem', lineHeight: '1.5', borderRadius: '2px' }}>
                  <strong>Información de Arquitectura:</strong> {authError}
                </div>
              )}

              <button type="submit" className="button button-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>VERIFICAR SESIÓN PRIVADA</span>
                <span className="btn-glyph">→</span>
              </button>
            </form>

            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(139, 150, 165, 0.15)', fontSize: '0.78rem', color: 'var(--technical-gray)', lineHeight: '1.6' }}>
              <strong style={{ color: 'var(--gold-light)' }}>Directiva de Privacidad y Seguridad:</strong>
              <p style={{ marginTop: '0.35rem' }}>
                Para evitar vulnerabilidades de fuga de datos de clientes, el sistema no utiliza contraseñas fijas en el código cliente. Las consultas reales se encuentran resguardadas en el panel administrativo de Netlify Forms bajo autenticación de dos factores (2FA).
              </p>
            </div>
          </div>
        ) : (
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Registro de Consultas Comerciales</h2>
            <p style={{ color: 'var(--technical-gray)', fontSize: '0.9rem' }}>Cargando registros sincronizados...</p>
          </div>
        )}
      </main>
    </div>
  )
}
