import { forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

export interface ButtonProps<T extends React.ElementType = 'button'> {
  as?: T
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  className?: string
}

const Button = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
  ref: React.ForwardedRef<any>
) => {
  const {
    as: Component = 'button',
    variant = 'primary',
    fullWidth,
    className,
    ...otherProps
  } = props

  const classNames = {
    root: clsx(s[variant], fullWidth && s.fullWidth, className),
  }

  return <Component ref={ref} className={classNames.root} {...otherProps} />
}

export default forwardRef(Button)
