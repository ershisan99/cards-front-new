import * as React from 'react'

import { clsx } from 'clsx'

import s from './link.module.scss'
export interface LinkProps<T extends React.ElementType> {
  as?: T
  children?: React.ReactNode
  className?: string
}

export function Link<T extends React.ElementType = 'button'>({
  as,
  className,
  ...props
}: LinkProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof LinkProps<T>>) {
  const classNames = {
    root: clsx(s.link, className),
  }

  const Component = as || 'a'

  return <Component className={classNames.root} {...props} />
}
