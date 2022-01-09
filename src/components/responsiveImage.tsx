import React, { useEffect, useRef, useState } from 'react'

type ResponsiveImageVariants =
  | [string]
  | [string, string]
  | [string, string, string]

// If only one src set is passed in it is used for all breakpoints
export type ResponsiveImageSrcSet =
  | [ResponsiveImageVariants]
  | [
      ResponsiveImageVariants,
      ResponsiveImageVariants,
      ResponsiveImageVariants,
      ResponsiveImageVariants,
      ResponsiveImageVariants
    ]

export type ImageType = 'jpg' | 'png' | 'webp' | 'avif'

type BreakPoint = '768' | '1024' | '1280' | '1536'

type ResolutionFactor = 0.5 | 1

interface ResponsiveImageProps {
  srcSet: ResponsiveImageSrcSet
  imageTypes?: Array<ImageType>
  resolutionFactor?: ResolutionFactor
  defaultImageType?: ImageType
  preferHighRes?: boolean
  fadeIn?: boolean
  alt: string
  width?: string | number
  height?: string | number
  className?: string
}

const breakPoints = ['768', '1024', '1280', '1536', '']

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  srcSet,
  imageTypes = ['avif', 'webp', 'jpg', 'png'],
  defaultImageType = 'png',
  resolutionFactor = 1,
  preferHighRes,
  fadeIn,
  alt,
  width,
  height,
  className,
}) => {
  const [imageLoaded, setImageLoaded] = useState(!fadeIn || false)
  const ref = useRef<HTMLImageElement>(null)

  const onImageLoaded = () => setImageLoaded(true)

  useEffect(() => {
    if (ref.current?.complete) {
      onImageLoaded()
    }
  }, [])

  const generateSources = (
    variants: ResponsiveImageVariants,
    breakPoint?: BreakPoint,
    media?: string
  ) => {
    const sourceSetForType = (imageType: ImageType) =>
      variants.reduce((memo, variant, i) => {
        if (i === 0) {
          return `${variant}&fm=${imageType}`
        }

        return `${memo}, ${variant}&fm=${imageType} ${
          1 + i * resolutionFactor
        }x`
      }, '')

    const isLastBreakPoint = breakPoint === breakPoints[breakPoints.length - 1]
    const mediaForImage =
      media || (!isLastBreakPoint ? `(max-width: ${breakPoint}px)` : undefined)

    return (
      <React.Fragment key={`#-${breakPoint}`}>
        {imageTypes.includes('avif') && (
          <source
            srcSet={sourceSetForType('avif')}
            media={mediaForImage}
            type="image/avif"
          />
        )}
        {imageTypes.includes('webp') && (
          <source
            srcSet={sourceSetForType('webp')}
            media={mediaForImage}
            type="image/webp"
          />
        )}
        {imageTypes.includes('png') && (
          <source
            srcSet={sourceSetForType('png')}
            media={mediaForImage}
            type="image/png"
          />
        )}
        {imageTypes.includes('jpg') && (
          <source
            srcSet={sourceSetForType('jpg')}
            media={mediaForImage}
            type="image/jpg"
          />
        )}
      </React.Fragment>
    )
  }

  const srcSetForBreakpoints =
    srcSet.length === 1 ? [...srcSet, ...srcSet, ...srcSet, ...srcSet] : srcSet
  const regularLaptopVariant = srcSetForBreakpoints[3][0]
  // Gets the last element of the last array in srcSetForBreakpoints = the image with highest resulotion
  const [highResImage] = srcSetForBreakpoints.slice(-1)[0].slice(-1)

  return (
    <picture>
      {preferHighRes &&
        generateSources(
          [highResImage],
          undefined,
          '(min-width: 481px) and (-webkit-min-device-pixel-ratio: 2), (min-width: 768px) and (min-resolution: 192dpi)'
        )}
      {srcSetForBreakpoints.map((s, i) =>
        generateSources(s, breakPoints[i] as BreakPoint)
      )}
      <img
        onLoad={onImageLoaded}
        src={`${regularLaptopVariant}.${defaultImageType}`}
        width={width}
        height={height}
        alt={alt}
        className={className}
        style={{
          opacity: !fadeIn || imageLoaded ? '1' : '0',
          transition: fadeIn ? 'opacity 0.5s' : undefined,
        }}
        ref={ref}
      />
    </picture>
  )
}
