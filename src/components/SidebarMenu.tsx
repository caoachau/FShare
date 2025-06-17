"use client"

import type React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./SidebarMenu.css"

interface SidebarMenuProps {
    isOpen: boolean
    onClose: () => void
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose }) => {
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
    const location = useLocation()

    const toggleSubmenu = (menuName: string) => {
        setOpenSubmenu(openSubmenu === menuName ? null : menuName)
    }

    const isActive = (path: string) => {
        return location.pathname === path
    }

    const menuItems = [
        {
            name: "Trang chủ",
            icon: "fas fa-home",
            path: "/",
        },
        {
            name: "Học tập",
            icon: "fas fa-graduation-cap",
            submenu: [
                { name: "Thư viện tài liệu", icon: "fas fa-book", path: "/documents" },
                { name: "Tin tức & Blog", icon: "fas fa-newspaper", path: "/news" },
                { name: "Workshop & Sự kiện", icon: "fas fa-calendar-alt", path: "/workshops" },
                { name: "Dành cho giáo viên", icon: "fas fa-chalkboard-teacher", path: "/teacher" },
            ],
        },
        {
            name: "Cộng đồng",
            icon: "fas fa-users",
            submenu: [
                { name: "Diễn đàn", icon: "fas fa-comments", path: "/forum" },
                { name: "Nhóm học tập", icon: "fas fa-user-friends", path: "/groups" },
                { name: "Sự kiện", icon: "fas fa-calendar", path: "/events" },
            ],
        },
        {
            name: "Hỗ trợ",
            icon: "fas fa-life-ring",
            submenu: [
                { name: "Liên hệ hỗ trợ", icon: "fas fa-headset", path: "/contact" },
                { name: "Câu hỏi thường gặp", icon: "fas fa-question-circle", path: "/faq" },
                { name: "Trung tâm trợ giúp", icon: "fas fa-info-circle", path: "/help" },
                { name: "Đóng góp ý kiến", icon: "fas fa-comment-dots", path: "/feedback" },
                { name: "Báo cáo vấn đề", icon: "fas fa-exclamation-triangle", path: "/report" },
            ],
        },
        {
            name: "Về DevShare",
            icon: "fas fa-info",
            submenu: [
                { name: "Giới thiệu", icon: "fas fa-building", path: "/about" },
                { name: "Điều khoản dịch vụ", icon: "fas fa-file-contract", path: "/terms" },
                { name: "Chính sách bảo mật", icon: "fas fa-shield-alt", path: "/privacy" },
            ],
        },
    ]

    return (
        <>
            {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
            <div className={`sidebar-menu ${isOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <Link to="/" className="logo" onClick={onClose}>
                        <i className="fas fa-book-open"></i>
                        <h2>DevShare</h2>
                    </Link>
                    <button className="close-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <nav className="sidebar-nav">
                    <ul className="menu-list">
                        {menuItems.map((item) => (
                            <li key={item.name} className="menu-item">
                                {item.submenu ? (
                                    <>
                                        <button
                                            className={`menu-button ${openSubmenu === item.name ? "active" : ""}`}
                                            onClick={() => toggleSubmenu(item.name)}
                                        >
                                            <i className={item.icon}></i>
                                            <span>{item.name}</span>
                                            <i className={`fas fa-chevron-down chevron ${openSubmenu === item.name ? "rotated" : ""}`}></i>
                                        </button>
                                        <ul className={`submenu ${openSubmenu === item.name ? "open" : ""}`}>
                                            {item.submenu.map((subItem) => (
                                                <li key={subItem.name}>
                                                    <Link
                                                        to={subItem.path}
                                                        className={`submenu-link ${isActive(subItem.path) ? "active" : ""}`}
                                                        onClick={onClose}
                                                    >
                                                        <i className={subItem.icon}></i>
                                                        <span>{subItem.name}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link
                                        to={item.path!}
                                        className={`menu-link ${isActive(item.path!) ? "active" : ""}`}
                                        onClick={onClose}
                                    >
                                        <i className={item.icon}></i>
                                        <span>{item.name}</span>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="sidebar-footer">
                    <div className="footer-info">
                        <p>© 2024 DevShare</p>
                        <p>Nền tảng chia sẻ tài liệu IT</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarMenu
