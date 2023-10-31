import React from 'react'
import Header from './components/static/Header'
import Footer from './components/static/Footer'
import About from './pages/About/About'
import Service from './pages/Services/Service'
import Faq from './pages/FAQ/Faq'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<About />} />

          <Route path='/Service' element={<Service />} />

          <Route path='/Faq' element={<Faq />} />

          <Route path='/Login' element={<Login />} />

          <Route path='/Signup' element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
      

    </div>
  )
}

export default App