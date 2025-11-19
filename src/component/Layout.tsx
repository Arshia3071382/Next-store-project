import React from 'react'
import { IChildren } from './Container'
import Navbar from './Navbar'



function Layout({children} : IChildren) {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout