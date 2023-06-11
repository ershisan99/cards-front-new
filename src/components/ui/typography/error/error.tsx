import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './error.module.scss'
export const Error = forwardRef<HTMLParagraphElement, ComponentPropsWithoutRef<'p'>>(
  ({ className, ...props }, ref) => {
    return <p ref={ref} className={clsx(s.error, className)} {...props} />
  }
)
