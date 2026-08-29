import { brandAssets } from '../config/brand'

type BrandLogoProps = {
  className?: string
  showDescriptor?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function BrandLogo({
  className = '',
  showDescriptor = true,
  size = 'md',
}: BrandLogoProps) {
  return (
    <div className={`brand-logo-container brand-logo-${size} ${className}`}>
      <div className="brand-emblem-wrapper">
        <img
          src={brandAssets.current.isotype}
          alt=""
          className="brand-emblem-image"
          loading="eager"
          decoding="async"
          aria-hidden="true"
        />
      </div>

      <div className="brand-typography">
        <span className="brand-wordmark">NOLBVIA</span>
        {showDescriptor && (
          <span className="brand-descriptor">SYSTEMS & AEROSPACE ENGINEERING</span>
        )}
      </div>
    </div>
  )
}
