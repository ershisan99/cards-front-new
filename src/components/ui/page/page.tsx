import { PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import { Header } from '../../layout/header'

import s from './page.module.scss'
export const Page = ({
  children,
  mt = '36px',
  flex = false,
}: PropsWithChildren<{ mt?: string | number; flex?: boolean }>) => {
  return (
    <div className={s.page}>
      <Header isAuth={false} />
      <div className={clsx(s.content, flex && s.flex)} style={{ marginTop: mt }}>
        {children}
      </div>
    </div>
  )
}
