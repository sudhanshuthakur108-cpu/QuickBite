import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import './App.css'
import OrderSuccess from './pages/OrderSuccess/OrderSuccess'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  const [search, setSearch] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  return (

    <>

      {/* LOGIN POPUP */}
      {
        showLogin &&
        <LoginPopup setShowLogin={setShowLogin} />
      }

      {/* DARK MODE WRAPPER */}
      <div className={darkMode ? "dark-mode" : ""}>

        {/* APP */}
        <div className="app">

          <Navbar
            setShowLogin={setShowLogin}
            search={search}
            setSearch={setSearch}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <Routes>

            <Route
              path='/'
              element={<Home search={search} />}
            />

            <Route
              path='/cart'
              element={<Cart />}
            />

            <Route
              path='/order'
              element={<PlaceOrder />}
            />
            <Route path='/success' element={<OrderSuccess />} />


          </Routes>

        </div>

        {/* FOOTER */}
        <Footer />

      </div>

      {/* TOAST */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
      />
      

    </>
  )
}

export default App