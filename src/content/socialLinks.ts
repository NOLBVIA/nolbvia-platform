export type SocialPlatform = 'instagram' | 'youtube' | 'linkedin' | 'tiktok' | 'facebook'

export type SocialLink = {
  platform: SocialPlatform
  name: string
  url: string
  handle: string
  ariaLabel: string
  enabled: boolean
}

/**
 * Configuración centralizada de presencia social oficial de NOLBVIA.
 * 
 * Regla de negocio y seguridad:
 * - Solo las plataformas con URL oficial verificada tienen `enabled: true`.
 * - Plataformas en proceso de verificación o sin enlace público confirmado permanecen en `enabled: false`.
 * - Los componentes visuales (Footer, Contact) consumen automáticamente esta configuración sin requerir cambios en código.
 */
export const officialSocialLinks: readonly SocialLink[] = [
  {
    platform: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/nolbvia_corporate/',
    handle: '@nolbvia_corporate',
    ariaLabel: 'Visitar perfil oficial de NOLBVIA en Instagram (abre en pestaña nueva)',
    enabled: true,
  },
  {
    platform: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/@NOLBVIA',
    handle: '@NOLBVIA',
    ariaLabel: 'Visitar canal oficial de NOLBVIA en YouTube (abre en pestaña nueva)',
    enabled: true,
  },
  {
    platform: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/nolbvia',
    handle: 'NOLBVIA',
    ariaLabel: 'Visitar página oficial de NOLBVIA en LinkedIn (abre en pestaña nueva)',
    enabled: true,
  },
  {
    platform: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/NOLBVIA',
    handle: 'NOLBVIA',
    ariaLabel: 'Visitar página oficial de NOLBVIA en Facebook (abre en pestaña nueva)',
    enabled: true,
  },
  {
    platform: 'tiktok',
    name: 'TikTok',
    url: 'https://www.tiktok.com/@nolbvia_corporate',
    handle: '@nolbvia_corporate',
    ariaLabel: 'Visitar perfil oficial de NOLBVIA en TikTok (abre en pestaña nueva)',
    enabled: true,
  },
] as const

/**
 * Devuelve únicamente los enlaces sociales oficialmente verificados y habilitados.
 */
export function getActiveSocialLinks(): readonly SocialLink[] {
  return officialSocialLinks.filter((link) => link.enabled && Boolean(link.url))
}

