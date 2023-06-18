import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './text.module.scss'

type Props = {
  weight?: 'regular' | 'bold'
  size?: 12 | 14 | 16
} & ComponentPropsWithoutRef<'p'>

export const Text = forwardRef<HTMLHeadingElement, Props>(
  ({ className, weight = 'regular', size = 16, ...restProps }, ref) => {
    const classNames = clsx(
      s.text,
      weight === 'regular' && s.regular,
      weight === 'bold' && s.bold,
      size === 12 && s.xs,
      size === 14 && s.sm,
      size === 16 && s.md,
      className
    )

    return <p ref={ref} className={classNames} {...restProps} />
  }
)
