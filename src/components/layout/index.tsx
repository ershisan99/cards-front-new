import { PropsWithChildren } from 'react'

import { Outlet } from 'react-router-dom'

import { useGetMeQuery } from '../../services/auth/auth'

import { Header } from './header'
import s from './layout.module.scss'
type Props = PropsWithChildren<{
  userInfo?: {
    name: string
    avatar?: string
    email: string
  }
}>
export const Layout = ({ userInfo }: Props) => {
  const { data, isLoading, isError, error } = useGetMeQuery()

  if (isLoading) return <div>Loading...</div>
  // if (isError)
  //   return (
  //     <div>
  //       Error: <div>{JSON.stringify(error)}</div>
  //     </div>
  //   )

  return (
    <div className={s.container}>
      <Header isAuth={!!data} userInfo={data} />
      <div aria-hidden className={s.placeholder} />
      <Outlet />
    </div>
  )
}
