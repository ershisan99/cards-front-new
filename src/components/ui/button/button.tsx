import * as React from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'
export interface ButtonProps<T extends React.ElementType> {
  as?: T
  children?: React.ReactNode
  variant?: 'primary' | 'danger' | 'secondary'
  fullWidth?: boolean
  className?: string
}

export function Button<T extends React.ElementType = 'button'>({
  as,
  variant = 'primary',
  fullWidth,
  className,
  ...props
}: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const classNames = {
    root: clsx(
      variant === 'primary' && s.primary,
      variant === 'secondary' && s.secondary,
      variant === 'danger' && s.danger,
      fullWidth && s.fullWidth,
      className
    ),
  }

  const Component = as || 'button'

  return <Component className={classNames.root} {...props} />
}
