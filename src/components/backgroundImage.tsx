import { motion } from 'framer-motion'
import { ImageProps } from 'next/image'

import { styled } from '../../stitches.config'
import { ContentfulImage } from './contentfulImage'

const ImageContainer = styled('div', {
  width: '100%',
  height: '100%',
  position: 'relative',
  overflowY: 'hidden',

  variants: {
    gradient: {
      on: {
        '&:after': {
          content: '',
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          display: 'inline-block',
          backgroundImage:
            'radial-gradient(farthest-side at 73% 21%, transparent, $color2)',
          inset: '0px',

          '@bp1': {
            backgroundImage:
              'linear-gradient(to bottom, transparent 0%, $color2 100%)',
          },
        },
      },
      off: {},
    },
  },
})

const AnimationWrapper = styled(motion.div, {
  width: '100%',
  height: '100%',
  position: 'relative',
})

const Image = styled(ContentfulImage, {
  backgroundRepeat: 'no-repeat',
  objectFit: 'cover',
  height: '100%',
  width: '100%',

  // IE specific CSS since IE does not support object-fit
  // Inspired by: https://coderwall.com/p/7vatvw/css-hack-for-ie10-ie11-and-webkit-browsers
  ['@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)']:
    {
      height: 'auto',
    },
})

const ContentContainer = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
})

interface Props extends ImageProps {
  gradient?: boolean
  motionProps?: any
  className?: string
  contentStyles?: string
}

export const BackgroundImage: React.FC<Props> = ({
  gradient,
  children,
  motionProps,
  className,
  contentStyles,
  ...rest
}) => {
  return (
    <>
      <ImageContainer className={className} gradient={gradient ? 'on' : 'off'}>
        <AnimationWrapper {...motionProps}>
          <Image {...rest} alt="" />
        </AnimationWrapper>
      </ImageContainer>
      <ContentContainer className={contentStyles}>{children}</ContentContainer>
    </>
  )
}
