import { ImageLoaderProps } from 'next/image'

export const contentfulImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps) => `${src}?w=${width}&q=${quality || 75}&fit=fill&f=face`
