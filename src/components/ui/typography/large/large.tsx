import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './large.module.scss'

export const Large = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<'h1'>>(
  ({ className, ...restProps }, ref) => {
    const classNames = clsx(s.large, className)

    return <h1 ref={ref} className={classNames} {...restProps}></h1>
  }
)
