import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { Layout } from './components/layout'
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
  return <RouterProvider router={router} />
}

export default function ProtectedRoutes() {
  const { data, isLoading } = useGetMeQuery()

  if (isLoading) return <div>Loading...</div>

  return data ? <Outlet /> : <Navigate to="/login" />
}
