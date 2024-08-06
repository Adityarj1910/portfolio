import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/css/App.css'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import ContactMe from './pages/ContactMe'
import MyIntro from './pages/MyIntro'
import Projects from './pages/Projects'

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes> 
          <Route exact path='/' render={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/myIntro" element={<MyIntro />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contactMe' element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


