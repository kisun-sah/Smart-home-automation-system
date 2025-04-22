import React from 'react'
import Navbar from '../components/Navbar'
import Homepage from './Homepage'
import Footer from '../components/footer'

const Layout = () => {
  return (
   <>
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
    
        <Homepage />
   

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
      </>
    
  )
}

export default Layout