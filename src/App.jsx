import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { SideNavbar } from './components/SideNavbar'
import { Home } from './components/Home'
import { About } from './components/About'

function App() {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  return (
    <>
      <Navbar
        setShowSideNavbar={setShowSideNavbar}
      />
      <SideNavbar
        showSideNavbar={showSideNavbar}
        setShowSideNavbar={setShowSideNavbar}
      />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </>    
  )
}

export default App
