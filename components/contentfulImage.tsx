import { useEffect, useMemo, useState } from 'react'
import { default as NextImage } from 'next/image'
import { ImageProps } from 'next/image'

import { contentfulImageLoader } from '../utils/contentfulImageLoader'

const supportsAvif = () => {
  return new Promise<boolean>((resolve) => {
    const avifImage = new Image()
    avifImage.onload = avifImage.onerror = () => {
      resolve(avifImage.height === 2)
    }
    avifImage.src =
      'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A='
  })
}

const supportsWebp = () => {
  return new Promise<boolean>((resolve) => {
    const webpImage = new Image()
    webpImage.onload = webpImage.onerror = () => {
      resolve(webpImage.height === 2)
    }
    webpImage.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  })
}

export const ContentfulImage: React.FC<ImageProps> = ({
  alt,
  priority,
  ...props
}) => {
  const [supportAvif, setSupportAvif] = useState<boolean | undefined>(undefined)
  const [supportWebp, setSupportWebp] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const checkAvif = async () => {
      setSupportAvif(await supportsAvif())
    }

    const checkWebp = async () => {
      setSupportWebp(await supportsWebp())
    }

    checkAvif()
    checkWebp()
  }, [])

  const imageLoader = useMemo(() => {
    if (
      typeof supportAvif === 'undefined' ||
      typeof supportWebp === 'undefined'
    ) {
      return undefined
    }

    if (supportAvif) {
      return contentfulImageLoader('avif')
    } else if (supportWebp) {
      return contentfulImageLoader('webp')
    } else {
      return contentfulImageLoader('jpg')
    }
  }, [supportAvif, supportWebp])

  return priority || imageLoader ? (
    <NextImage
      loader={!priority ? imageLoader : contentfulImageLoader('jpg')}
      alt={alt}
      priority={priority}
      {...props}
    />
  ) : null
}
