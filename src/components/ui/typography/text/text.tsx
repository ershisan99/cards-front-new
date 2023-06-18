import * as React from 'react'

import { clsx } from 'clsx'

import { ButtonProps } from '../../button'

import s from './text.module.scss'

export interface TextProps<T extends React.ElementType> {
  as?: T
  children?: React.ReactNode
  weight?: 'regular' | 'bold'
  size?: 12 | 14 | 16
  className?: string
}

export function Text<T extends React.ElementType = 'p'>({
  as,
  className,
  weight = 'regular',
  size = 16,
  ...restProps
}: TextProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const classNames = clsx(
    s.text,
    weight === 'regular' && s.regular,
    weight === 'bold' && s.bold,
    size === 12 && s.xs,
    size === 14 && s.sm,
    size === 16 && s.md,
    className
  )
  const Component = as || 'p'

  return <Component className={classNames} {...restProps} />
}
