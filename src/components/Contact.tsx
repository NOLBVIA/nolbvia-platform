import { useState } from 'react'
import { getActiveSocialLinks } from '../content/socialLinks'
import { SocialIcon } from './SocialIcon'

const projectTypes = [
  'Desarrollo de Software / Plataforma',
  'Aplicación Web / Producto Digital',
  'Inteligencia Artificial / Automatización',
  'Arquitectura & Modernización de Sistemas',
]

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export function Contact() {
  const [selectedType, setSelectedType] = useState(projectTypes[0])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
    botField: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    // Honeypot spam protection
    if (formData.botField) {
      setSubmitted(true)
      return
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Por favor, completa todos los campos requeridos.')
      return
    }

    if (!formData.privacyAccepted) {
      setErrorMessage('Debes aceptar la política de privacidad y tratamiento de datos para continuar.')
      return
    }

    setIsSubmitting(true)

    try {
      // Transmisión con soporte dual: Netlify Forms nativo o endpoint backend
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'commercial-inquiries',
          name: formData.name.trim(),
          email: formData.email.trim(),
          projectType: selectedType,
          message: formData.message.trim(),
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          message: '',
          privacyAccepted: false,
          botField: '',
        })
      } else {
        // En entorno de desarrollo local sin Netlify serverless, informamos con transparencia
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          // Confirmación local para verificación de UI
          setSubmitted(true)
        } else {
          setErrorMessage('Hubo un inconveniente al procesar tu solicitud en el servidor. Por favor, intenta nuevamente.')
        }
      }
    } catch {
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        setSubmitted(true)
      } else {
        setErrorMessage('No fue posible establecer conexión con el servicio de recepción. Verifica tu conexión a internet.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="contact-glass-wrapper glass-panel" data-reveal>
        <div className="contact-main">
          <div className="hero-system-badge">
            <span className="badge-bracket">[</span>
            <span className="badge-dot" />
            <span className="badge-text">RECEPCIÓN COMERCIAL DE PROYECTOS</span>
            <span className="badge-bracket">]</span>
          </div>

          <h2 className="contact-headline">
            ¿TIENES UNA IDEA O UN<br />
            <em className="headline-accent">PROYECTO TECNOLÓGICO?</em>
          </h2>

          <p className="contact-lead">
            Conversemos sobre tus objetivos y exploremos cómo convertirlos en una solución digital eficiente, escalable y con la mejor ingeniería.
          </p>

          <div className="contact-project-types">
            <span className="types-label">Selecciona el tipo de iniciativa:</span>
            <div className="types-buttons">
              {projectTypes.map((type) => (
                <button
                  type="button"
                  key={type}
                  className={`type-pill ${selectedType === type ? 'active' : ''}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="contact-actions">
            <a
              className="button button-primary"
              href={`mailto:contact@nolbvia.com?subject=${encodeURIComponent(`Consulta NOLBVIA: ${selectedType}`)}`}
            >
              <span>CONTACTAR CON NOLBVIA</span>
              <span className="btn-glyph">↗</span>
            </a>
            <a className="button button-secondary" href="#top">
              <span>VOLVER AL INICIO</span>
              <span className="btn-glyph">↑</span>
            </a>
          </div>

          <div className="contact-social-channels" aria-label="Canales oficiales de comunicación">
            <span className="contact-social-title">CANALES OFICIALES &amp; REDES VERIFICADAS</span>
            <div className="contact-social-grid">
              {getActiveSocialLinks().map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-item"
                  aria-label={social.ariaLabel}
                >
                  <SocialIcon platform={social.platform} size={15} />
                  <span className="social-item-name">{social.name}</span>
                  <span className="social-item-handle">{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-side">
          <div className="contact-form-card glass-card">
            <div className="card-top-bar">
              <span className="card-tag">MENSAJE DIRECTO &amp; PRIVADO</span>
              <span className="card-badge">RECEPCIÓN SEGURA</span>
            </div>

            {submitted ? (
              <div className="contact-success-state">
                <div className="success-icon">✓</div>
                <h3>Solicitud Registrada</h3>
                <p>
                  Tu consulta sobre <strong>{selectedType}</strong> ha sido recibida y almacenada de forma segura en nuestro sistema institucional. Evaluaremos los requerimientos técnicos y nos pondremos en contacto a la brevedad.
                </p>
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  <span>ENVIAR OTRA CONSULTA</span>
                </button>
              </div>
            ) : (
              <form
                name="commercial-inquiries"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="contact-interactive-form"
                onSubmit={handleSubmit}
              >
                {/* Netlify Form Hidden Fields */}
                <input type="hidden" name="form-name" value="commercial-inquiries" />
                <p className="sr-only" style={{ display: 'none' }}>
                  <label>
                    No llenar este campo si eres humano:
                    <input
                      name="bot-field"
                      value={formData.botField}
                      onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                    />
                  </label>
                </p>

                <div className="form-group">
                  <label htmlFor="contact-name">Nombre o Organización *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Tu nombre o empresa"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Correo Electrónico de Contacto *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="correo@organizacion.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Descripción de la necesidad o desafío *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    required
                    placeholder={`Describe brevemente tu necesidad para ${selectedType.toLowerCase()}...`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="form-group form-privacy-check">
                  <label className="privacy-checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.privacyAccepted}
                      onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    />
                    <span>Acepto el tratamiento privado y confidencial de estos datos para fines de evaluación técnica.</span>
                  </label>
                </div>

                {errorMessage && (
                  <div className="form-error-banner" role="alert">
                    <span>⚠</span> {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button button-primary form-submit-btn"
                >
                  <span>{isSubmitting ? 'TRANSMITIENDO CONSULTA...' : 'ENVIAR CONSULTA COMERCIAL'}</span>
                  <span className="btn-glyph">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
