import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './components/layout'
import { Login } from './pages'
import { Cards } from './pages/cards'
import { Decks } from './pages/decks'
import { SignUpPage } from './pages/sign-up'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Decks />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'cards/:deckId',
        element: <Cards />,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />
}
