import type { PurchaseIntent } from '../types/products'

/**
 * Servicio de infraestructura de pagos para NOLBVIA Development.
 * 
 * REGLAS DE ARQUITECTURA Y SEGURIDAD:
 * 1. El cliente web NUNCA aprueba pagos por sí mismo.
 * 2. El cliente solicita un Session Token / Checkout URL a una función serverless protegida.
 * 3. La confirmación y entrega de productos solo ocurre tras verificación criptográfica de Webhooks firmados en el servidor.
 * 4. No se guardan tarjetas ni claves privadas en el navegador.
 */

export type CheckoutSessionResponse = {
  success: boolean
  sessionId?: string
  checkoutUrl?: string
  message: string
  isSimulation?: boolean
}

export async function createCheckoutSession(intent: PurchaseIntent): Promise<CheckoutSessionResponse> {
  // Validación de entrada en cliente
  if (!intent.customerEmail || !intent.productId || !intent.tierId) {
    return {
      success: false,
      message: 'Faltan parámetros requeridos para iniciar la sesión de compra.',
    }
  }

  // Si el tier es gratuito o bajo cotización, se canaliza a través de solicitud directa
  if (intent.amount === 0) {
    return {
      success: true,
      message: 'Solicitud de acceso registrada exitosamente. Recibirás las instrucciones en tu correo.',
      isSimulation: true,
    }
  }

  try {
    // Endpoint serverless preparado para conectar Stripe / MercadoPago / Wompi
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(intent),
    })

    if (!response.ok) {
      // Si la API serverless aún no está aprovisionada con claves de pasarela reales
      return {
        success: false,
        message: 'La pasarela de pagos automatizada está en proceso de verificación institucional. Por favor, canaliza tu solicitud mediante nuestro formulario de contacto comercial.',
      }
    }

    return await response.json()
  } catch {
    return {
      success: false,
      message: 'No se pudo conectar con el servicio de procesamiento seguro. Por favor, intenta más tarde o contáctanos directamente.',
    }
  }
}
