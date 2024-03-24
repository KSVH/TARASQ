import React from 'react'
import NavbarCustom from './Navbar'
import Footer from './Footer'
import FooterOne from './Footer/Footers/FooterOne'

export default function Layout({ children }) {
  return (
    <div>
      <NavbarCustom />
      {children}
      <FooterOne />
    </div>
  )
}