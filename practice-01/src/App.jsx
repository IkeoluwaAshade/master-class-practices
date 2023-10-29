import React from 'react'
import Header from './components/static/Header'

import AboutUs from './pages/About/AboutUs'
import ContactUs from './pages/Contact-Us/ContactUs'
import Home from './pages/Home/Home'
import Footer from './components/static/Footer'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/about' element= {<AboutUs />} />
          <Route path='/Contact' element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
      
    </div>
  )
}

export default App