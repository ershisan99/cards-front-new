import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignIn } from '../../components/auth/sign-in'
import { Page } from '../../components/ui/page'
import { useGetMeQuery, useLoginMutation } from '../../services/auth/auth'
import { LoginArgs } from '../../services/auth/types'

export const Login = () => {
  const [login] = useLoginMutation()
  const { data: me } = useGetMeQuery()

  useEffect(() => {
    if (!me) return

    navigate('/')
  }, [me])

  const navigate = useNavigate()
  const handleLogin = (args: LoginArgs) => {
    return login(args)
      .unwrap()
      .then(() => navigate('/'))
      .catch(err => toast.error(err.data.message))
  }

  return (
    <Page flex>
      <SignIn onSubmit={handleLogin} />
    </Page>
  )
}
