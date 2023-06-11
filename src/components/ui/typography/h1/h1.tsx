import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './h1.module.scss'

export const H1 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<'h1'>>(
  ({ className, ...restProps }, ref) => {
    const classNames = clsx(s.h1, className)

    return <h1 ref={ref} className={classNames} {...restProps}></h1>
  }
)
