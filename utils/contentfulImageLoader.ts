import { ImageLoaderProps } from 'next/image'

export const contentfulImageLoader =
  (format = '') =>
  ({ src, width, quality }: ImageLoaderProps) =>
    `${src}?w=${width}&q=${quality || 75}&fm=${format}&fit=fill&f=face`
