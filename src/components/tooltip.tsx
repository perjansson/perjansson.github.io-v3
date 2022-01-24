import React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { keyframes, styled } from '../../stitches.config'

const slideUp = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(1px) scale(0.8)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
})

const slideRight = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-1px) scale(0.8)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0) scale(1)',
  },
})

const slideDown = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-1px) scale(0.8)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
})

const slideLeft = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(1px) scale(0.8)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0) scale(1)',
  },
})

const TooltipContent = styled(TooltipPrimitive.Content, {
  minHeight: '32px',
  backgroundColor: '$colorful4',
  color: '$color12',
  borderRadius: '$radii2',
  padding: '$space2 $space4',
  fontWeight: 700,
  fontSize: '$fontSize3',
  lineHeight: '21px',
  display: 'flex',
  alignItems: 'center',
  animationDuration: '200ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',

  "&[data-side='top']": {
    animationName: slideUp,
    transformOrigin: 'bottom',
  },

  "&[data-side='right']": {
    animationName: slideRight,
    transformOrigin: 'left',
  },

  "&[data-side='bottom']": {
    animationName: slideDown,
    transformOrigin: 'top',
  },

  "&[data-side='left']": {
    animationName: slideLeft,
    transformOrigin: 'right',
  },
})

const Arrow = styled(TooltipPrimitive.Arrow, {
  fill: '$colorful4',
})

interface TooltipProps {
  text: string
}

export const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      {text && (
        <TooltipContent side="top" sideOffset={6} avoidCollisions>
          {text}
          <Arrow />
        </TooltipContent>
      )}
    </TooltipPrimitive.Root>
  )
}
