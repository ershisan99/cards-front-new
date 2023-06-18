import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './h2.module.scss'

export const H2 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<'h1'>>(
  ({ className, ...restProps }, ref) => {
    const classNames = clsx(s.h2, className)

    return <h1 ref={ref} className={classNames} {...restProps}></h1>
  }
)
