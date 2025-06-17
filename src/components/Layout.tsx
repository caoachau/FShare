"use client"

import type React from "react"
import { useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation()

    return (
        <div className="app-layout">
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
