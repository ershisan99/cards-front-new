import { PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import s from './page.module.scss'

type Props = PropsWithChildren<{
  mt?: string | number
  flex?: boolean
}>
export const Page = ({ children, mt = '36px', flex = false }: Props) => {
  return (
    <div className={clsx(s.content, flex && s.flex)} style={{ marginTop: mt }}>
      {children}
    </div>
  )
}
