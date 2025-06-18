"use client"

import type React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import LoginModal from "./LoginModal"
import SidebarMenu from "./SidebarMenu"
import "./Header.css"

const Header: React.FC = () => {
    const { user, logout } = useAuth()
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [showSidebarMenu, setShowSidebarMenu] = useState(false)
    const navigate = useNavigate()

    const handleLogin = () => {
        setIsSignUp(false)
        setShowLoginModal(true)
    }

    const handleSignUp = () => {
        setIsSignUp(true)
        setShowLoginModal(true)
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchTerm.trim()) {
            navigate(`/documents?search=${encodeURIComponent(searchTerm)}`)
        }
    }

    const handleLogout = () => {
        logout()
        navigate("/")
    }

    const handleMenuClick = () => {
        setShowSidebarMenu(true)
    }

    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="header-left">
                        <button className="menu-btn" onClick={handleMenuClick}>
                            <i className="fas fa-bars"></i>
                        </button>
                        <Link to="/" className="logo">
                            <i className="fas fa-book-open"></i>
                            <h1>FShare</h1>
                        </Link>
                    </div>

                    <div className="search-container">
                        <form className="search-box" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Bạn muốn tìm tài liệu gì?"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                    </div>

                    <div className="header-right">
                        <nav className="nav-links">
                            <Link to="/teacher">For Teacher</Link>
                            <Link to="/contact">Contact</Link>
                        </nav>

                        {user ? (
                            <div className="user-menu">
                                <div className="user-avatar">
                                    <img src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                    <span>{user.name}</span>
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                                <div className="user-dropdown">
                                    <Link to="/account">
                                        <i className="fas fa-user"></i>
                                        Tài khoản
                                    </Link>
                                    <Link to="/upload">
                                        <i className="fas fa-upload"></i>
                                        Upload tài liệu
                                    </Link>
                                    <button onClick={handleLogout}>
                                        <i className="fas fa-sign-out-alt"></i>
                                        Đăng xuất
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="auth-buttons">
                                <button className="sign-in-btn" onClick={handleLogin}>
                                    Sign in
                                </button>
                                <button className="sign-up-btn" onClick={handleSignUp}>
                                    Sign up
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <SidebarMenu isOpen={showSidebarMenu} onClose={() => setShowSidebarMenu(false)} />
            <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} isSignUp={isSignUp} />
        </>
    )
}

export default Header
