import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Index, Login } from './pages'
import { Decks } from './pages/decks'
import { SignUpPage } from './pages/sign-up'
import { useGetMeQuery } from './services/auth/auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/decks',
    element: <Decks />,
  },
  {
    path: 'sign-up',
    element: <SignUpPage />,
  },
])

export function App() {
  const { data } = useGetMeQuery()

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
