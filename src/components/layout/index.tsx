import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { useGetMeQuery } from '../../services/auth/auth'

import { Header } from './header'
import s from './layout.module.scss'

export const Layout = () => {
  const { data, isLoading, isError } = useGetMeQuery()
  const navigate = useNavigate()
  const location = useLocation()

  if (isLoading) return <div>Loading...</div>
  if (isError && location.pathname !== '/login') navigate('/login')

  return (
    <div className={s.container}>
      <Header isAuth={!!data} userInfo={data} />
      <div aria-hidden className={s.placeholder} />
      <Outlet />
    </div>
  )
}
