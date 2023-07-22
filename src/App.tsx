import { useState } from 'react'

import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { Layout } from './components/layout'
import { Button } from './components/ui'
import { Login } from './pages'
import { Cards } from './pages/cards'
import { Decks } from './pages/decks'
import { Profile } from './pages/profile'
import { SignUpPage } from './pages/sign-up'
import { useGetMeQuery } from './services/auth/auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: '/',
            element: <Decks />,
          },
          {
            path: 'cards/:deckId',
            element: <Cards />,
          },
          {
            path: 'sign-up',
            element: <SignUpPage />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
])

export function App() {
  const handleThemeChanged = useHandleThemeChanged()

  return (
    <div>
      <Button onClick={handleThemeChanged} style={{ position: 'fixed', top: '50%' }}>
        {' '}
        Change Theme
      </Button>
      <RouterProvider router={router} />
    </div>
  )
}

function ProtectedRoutes() {
  const { data, isLoading } = useGetMeQuery()

  if (isLoading) return <div>Loading...</div>

  return data ? <Outlet /> : <Navigate to="/login" />
}
function useHandleThemeChanged() {
  const [state, setState] = useState(false)

  return () => {
    document.body.classList.toggle('dark-mode', state)
    setState(!state)
  }
}
