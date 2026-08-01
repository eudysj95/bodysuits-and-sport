import { useState } from 'react'

const PLACEHOLDER = '/images/products/placeholder.svg'

function ProductImage({ src, alt, className, loading }) {
  const [failed, setFailed] = useState(false)
  const [lastSrc, setLastSrc] = useState(src)

  if (lastSrc !== src) {
    setLastSrc(src)
    setFailed(false)
  }

  const currentSrc = failed ? PLACEHOLDER : src

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => {
        if (!failed) setFailed(true)
      }}
    />
  )
}

export default ProductImage
