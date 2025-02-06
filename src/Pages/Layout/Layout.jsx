import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Menu from '../../Components/Menu/Menu'

export default function Layout() {



    return (
        <div>

            <Menu />

            <Outlet />
            <Footer />

        </div>
    )
}
