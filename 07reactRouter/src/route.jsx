import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'


function Route() {
  return (
    <>
    <Header />
    <Outlet>

    </Outlet>
    <Footer />
    </>

  )
}

export default Route