import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignIn } from '../../components/auth/sign-in'
import { Page } from '../../components/ui/page'
import { useLoginMutation } from '../../services/auth/auth'
import { LoginArgs } from '../../services/auth/types'

export const Login = () => {
  const [login] = useLoginMutation()
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
