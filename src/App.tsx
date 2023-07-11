import { createBrowserRouter } from 'react-router-dom'

import { SignIn } from './components/auth/sign-in'
import { useGetMeQuery, useLoginMutation } from './services/auth/auth'

export function App() {
  const [login, result] = useLoginMutation()
  const { data } = useGetMeQuery()

  console.log(result)

  return (
    <div>
      <SignIn onSubmit={login} />
    </div>
  )
}
