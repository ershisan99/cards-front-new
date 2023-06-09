import './styles/index.scss'
import '@fontsource-variable/montserrat'
import 'react-toastify/dist/ReactToastify.min.css'
import 'dayjs/locale/en-gb'

import { StrictMode } from 'react'

import { extend, locale } from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { App } from './App'
import { store } from './app/store'

extend(LocalizedFormat)
locale('en-gb')
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <App />
    </Provider>
  </StrictMode>
)
