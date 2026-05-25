import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

import StoreContextProvider from './context/StoreContext.jsx'
import AuthContextProvider from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <AuthContextProvider>

      <StoreContextProvider>

        <BrowserRouter>

          <App />

        </BrowserRouter>

      </StoreContextProvider>

    </AuthContextProvider>

  </React.StrictMode>

)