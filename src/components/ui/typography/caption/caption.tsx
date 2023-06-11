import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './caption.module.scss'

export const Caption = forwardRef<HTMLParagraphElement, ComponentPropsWithoutRef<'p'>>(
  ({ className, ...restProps }, ref) => {
    const classNames = clsx(s.caption, className)

    return <p ref={ref} className={classNames} {...restProps}></p>
  }
)
