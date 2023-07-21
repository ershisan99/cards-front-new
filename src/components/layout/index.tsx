import { Outlet } from 'react-router-dom'

import { useGetMeQuery, useLogoutMutation } from '../../services/auth/auth'

import { Header } from './header'
import s from './layout.module.scss'

export const Layout = () => {
  const { data } = useGetMeQuery()
  const [logout] = useLogoutMutation()

  return (
    <div className={s.container}>
      <Header isAuth={!!data} userInfo={data} onSignOut={logout} />
      <div aria-hidden className={s.placeholder} />
      <Outlet />
    </div>
  )
}
