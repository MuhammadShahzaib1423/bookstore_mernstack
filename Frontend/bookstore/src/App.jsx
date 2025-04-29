import React, { useState } from 'react'
import Home  from './pages/Home'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AllBooks from './pages/AllBooks'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ViewBookDetail from './components/ViewBookDetails/ViewBookDetail'
import Aboutus from './pages/Aboutus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/about-us' element={Aboutus} />
    <Route path='/all-books' element={<AllBooks/>} />
    <Route path='/view-book-details/:bookid' element={<ViewBookDetail/>} />

</Routes>
    <Footer/> 
    </Router>
    </>
  )
}

export default App
