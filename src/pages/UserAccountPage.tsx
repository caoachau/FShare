"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { documentsData } from "../data/documentsData"
import { workshopData } from "../data/workshopData"
import "./UserAccountPage.css"

interface UserStats {
    uploadedDocuments: number
    registeredWorkshops: number
    favoriteDocuments: number
    totalDownloads: number
}

const UserAccountPage: React.FC = () => {
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("overview")
    const [userStats, setUserStats] = useState<UserStats>({
        uploadedDocuments: 0,
        registeredWorkshops: 0,
        favoriteDocuments: 0,
        totalDownloads: 0,
    })
    const [userDocuments, setUserDocuments] = useState<any[]>([])
    const [favoriteDocuments, setFavoriteDocuments] = useState<any[]>([])
    const [registeredWorkshops, setRegisteredWorkshops] = useState<any[]>([])

    useEffect(() => {
        if (!user) {
            navigate("/")
            return
        }

        // Load user data
        loadUserData()
    }, [user, navigate])

    const loadUserData = () => {
        if (!user) return

        // Get user's uploaded documents
        const uploadedDocs = documentsData.filter((doc) => doc.authorId === user.id)
        setUserDocuments(uploadedDocs)

        // Get favorite documents from localStorage
        const favorites = JSON.parse(localStorage.getItem(`favorites_${user.id}`) || "[]")
        const favoriteDocsData = documentsData.filter((doc) => favorites.includes(doc.id))
        setFavoriteDocuments(favoriteDocsData)

        // Get registered workshops from localStorage
        const registeredWorkshopIds = JSON.parse(localStorage.getItem(`workshops_${user.id}`) || "[]")
        const registeredWorkshopsData = workshopData.filter((workshop) => registeredWorkshopIds.includes(workshop.id))
        setRegisteredWorkshops(registeredWorkshopsData)

        // Calculate stats
        const totalDownloads = uploadedDocs.reduce((sum, doc) => sum + doc.downloads, 0)
        setUserStats({
            uploadedDocuments: uploadedDocs.length,
            registeredWorkshops: registeredWorkshopsData.length,
            favoriteDocuments: favoriteDocsData.length,
            totalDownloads,
        })
    }

    const handleLogout = () => {
        logout()
        navigate("/")
    }

    const toggleFavorite = (docId: number) => {
        if (!user) return

        const favorites = JSON.parse(localStorage.getItem(`favorites_${user.id}`) || "[]")
        const updatedFavorites = favorites.includes(docId)
            ? favorites.filter((id: number) => id !== docId)
            : [...favorites, docId]

        localStorage.setItem(`favorites_${user.id}`, JSON.stringify(updatedFavorites))
        loadUserData() // Reload data
    }

    const registerForWorkshop = (workshopId: number) => {
        if (!user) return

        const registeredWorkshops = JSON.parse(localStorage.getItem(`workshops_${user.id}`) || "[]")
        if (!registeredWorkshops.includes(workshopId)) {
            registeredWorkshops.push(workshopId)
            localStorage.setItem(`workshops_${user.id}`, JSON.stringify(registeredWorkshops))
            loadUserData() // Reload data
            alert("Đăng ký workshop thành công!")
        }
    }

    if (!user) {
        return null
    }

    return (
        <div className="account-page">
            <div className="account-container">
                <div className="account-sidebar">
                    <div className="user-profile">
                        <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="profile-avatar" />
                        <h3 className="profile-name">{user.name}</h3>
                        <p className="profile-email">{user.email}</p>
                        <span className={`profile-role ${user.role}`}>{user.role === "teacher" ? "Giáo viên" : "Học viên"}</span>
                    </div>

                    <nav className="account-nav">
                        <button
                            className={`nav-item ${activeTab === "overview" ? "active" : ""}`}
                            onClick={() => setActiveTab("overview")}
                        >
                            <i className="TQ  fas fa-chart-line"></i>
                            Tổng quan
                        </button>
                        <button
                            className={`nav-item ${activeTab === "documents" ? "active" : ""}`}
                            onClick={() => setActiveTab("documents")}
                        >
                            <i className="fas fa-file-alt"></i>
                            Tài liệu đã tải lên
                        </button>
                        <button
                            className={`nav-item ${activeTab === "favorites" ? "active" : ""}`}
                            onClick={() => setActiveTab("favorites")}
                        >
                            <i className="fas fa-heart"></i>
                            Tài liệu yêu thích
                        </button>
                        <button
                            className={`nav-item ${activeTab === "workshops" ? "active" : ""}`}
                            onClick={() => setActiveTab("workshops")}
                        >
                            <i className="fas fa-calendar"></i>
                            Workshop đã đăng ký
                        </button>
                        <button
                            className={`nav-item ${activeTab === "settings" ? "active" : ""}`}
                            onClick={() => setActiveTab("settings")}
                        >
                            <i className="fas fa-cog"></i>
                            Cài đặt
                        </button>
                    </nav>

                    <div className="account-actions">
                        <button className="upload-btn" onClick={() => navigate("/upload")}>
                            <i className="fas fa-upload"></i>
                            Upload tài liệu
                        </button>
                        <button className="logout-btn" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt"></i>
                            Đăng xuất
                        </button>
                    </div>
                </div>

                <div className="account-content">
                    {activeTab === "overview" && (
                        <div className="overview-tab">
                            <h2>Tổng quan tài khoản</h2>

                            <div className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-icon documents">
                                        <i className="fas fa-file-alt"></i>
                                    </div>
                                    <div className="stat-info">
                                        <span className="stat-number">{userStats.uploadedDocuments}</span>
                                        <span className="stat-label">Tài liệu đã tải lên</span>
                                    </div>
                                </div>

                                <div className="stat-card">
                                    <div className="stat-icon workshops">
                                        <i className="fas fa-calendar"></i>
                                    </div>
                                    <div className="stat-info">
                                        <span className="stat-number">{userStats.registeredWorkshops}</span>
                                        <span className="stat-label">Workshop đã đăng ký</span>
                                    </div>
                                </div>

                                <div className="stat-card">
                                    <div className="stat-icon favorites">
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <div className="stat-info">
                                        <span className="stat-number">{userStats.favoriteDocuments}</span>
                                        <span className="stat-label">Tài liệu yêu thích</span>
                                    </div>
                                </div>

                                <div className="stat-card">
                                    <div className="stat-icon downloads">
                                        <i className="fas fa-download"></i>
                                    </div>
                                    <div className="stat-info">
                                        <span className="stat-number">{userStats.totalDownloads}</span>
                                        <span className="stat-label">Lượt tải xuống</span>
                                    </div>
                                </div>
                            </div>

                            <div className="recent-activity">
                                <h3>Hoạt động gần đây</h3>
                                <div className="activity-list">
                                    <div className="activity-item">
                                        <i className="fas fa-upload"></i>
                                        <span>Bạn đã tải lên tài liệu mới</span>
                                        <span className="activity-time">2 giờ trước</span>
                                    </div>
                                    <div className="activity-item">
                                        <i className="fas fa-heart"></i>
                                        <span>Bạn đã thêm tài liệu vào yêu thích</span>
                                        <span className="activity-time">1 ngày trước</span>
                                    </div>
                                    <div className="activity-item">
                                        <i className="fas fa-calendar"></i>
                                        <span>Bạn đã đăng ký workshop mới</span>
                                        <span className="activity-time">3 ngày trước</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "documents" && (
                        <div className="documents-tab">
                            <div className="tab-header">
                                <h2>Tài liệu đã tải lên</h2>
                                <button className="upload-btn" onClick={() => navigate("/upload")}>
                                    <i className="fas fa-plus"></i>
                                    Tải lên mới
                                </button>
                            </div>

                            {userDocuments.length > 0 ? (
                                <div className="documents-grid">
                                    {userDocuments.map((doc) => (
                                        <div key={doc.id} className="document-card">
                                            <div className="document-header">
                                                <div className={`file-icon ${doc.iconClass}`}>
                                                    <i className={doc.icon}></i>
                                                </div>
                                                <div className="document-meta">
                                                    <span className="file-type">{doc.fileType}</span>
                                                    <span className="file-size">{doc.fileSize}</span>
                                                </div>
                                            </div>

                                            <div className="document-content">
                                                <h4 className="document-title">{doc.title}</h4>
                                                <p className="document-description">{doc.description}</p>
                                                <div className="document-stats">
                          <span>
                            <i className="fas fa-download"></i> {doc.downloads}
                          </span>
                                                    <span>
                            <i className="fas fa-star"></i> {doc.rating}
                          </span>
                                                </div>
                                            </div>

                                            <div className="document-actions">
                                                <button className="btn-secondary">
                                                    <i className="fas fa-edit"></i>
                                                    Chỉnh sửa
                                                </button>
                                                <button className="btn-danger">
                                                    <i className="fas fa-trash"></i>
                                                    Xóa
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="empty-state">
                                    <i className="fas fa-file-alt"></i>
                                    <h3>Chưa có tài liệu nào</h3>
                                    <p>Bạn chưa tải lên tài liệu nào. Hãy chia sẻ kiến thức của bạn với cộng đồng!</p>
                                    <button className="btn-primary" onClick={() => navigate("/upload")}>
                                        Tải lên tài liệu đầu tiên
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === "favorites" && (
                        <div className="favorites-tab">
                            <h2>Tài liệu yêu thích</h2>

                            {favoriteDocuments.length > 0 ? (
                                <div className="documents-grid">
                                    {favoriteDocuments.map((doc) => (
                                        <div key={doc.id} className="document-card">
                                            <div className="document-header">
                                                <div className={`file-icon ${doc.iconClass}`}>
                                                    <i className={doc.icon}></i>
                                                </div>
                                                <button className="favorite-btn active" onClick={() => toggleFavorite(doc.id)}>
                                                    <i className="fas fa-heart"></i>
                                                </button>
                                            </div>

                                            <div className="document-content">
                                                <h4 className="document-title">{doc.title}</h4>
                                                <p className="document-description">{doc.description}</p>
                                                <div className="document-stats">
                          <span>
                            <i className="fas fa-download"></i> {doc.downloads}
                          </span>
                                                    <span>
                            <i className="fas fa-star"></i> {doc.rating}
                          </span>
                                                </div>
                                            </div>

                                            <div className="document-actions">
                                                <button className="btn-primary">
                                                    <i className="fas fa-download"></i>
                                                    Tải xuống
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="empty-state">
                                    <i className="fas fa-heart"></i>
                                    <h3>Chưa có tài liệu yêu thích</h3>
                                    <p>Bạn chưa thêm tài liệu nào vào danh sách yêu thích.</p>
                                    <button className="btn-primary" onClick={() => navigate("/documents")}>
                                        Khám phá tài liệu
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === "workshops" && (
                        <div className="workshops-tab">
                            <h2>Workshop đã đăng ký</h2>

                            {registeredWorkshops.length > 0 ? (
                                <div className="workshops-grid">
                                    {registeredWorkshops.map((workshop) => (
                                        <div key={workshop.id} className="workshop-card">
                                            <div className="workshop-image">
                                                <img src={workshop.image || "/placeholder.svg"} alt={workshop.title} />
                                                <div className={`workshop-status ${workshop.category}`}>{workshop.status}</div>
                                            </div>

                                            <div className="workshop-content">
                                                <h4 className="workshop-title">{workshop.title}</h4>
                                                <p className="workshop-instructor">
                                                    <i className="fas fa-user"></i>
                                                    {workshop.instructor}
                                                </p>
                                                <p className="workshop-date">
                                                    <i className="fas fa-calendar"></i>
                                                    {new Date(workshop.startDate).toLocaleDateString("vi-VN")}
                                                </p>
                                                <p className="workshop-time">
                                                    <i className="fas fa-clock"></i>
                                                    {workshop.time}
                                                </p>
                                            </div>

                                            <div className="workshop-actions">
                                                <button className="btn-primary">
                                                    <i className="fas fa-info-circle"></i>
                                                    Chi tiết
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="empty-state">
                                    <i className="fas fa-calendar"></i>
                                    <h3>Chưa đăng ký workshop nào</h3>
                                    <p>Bạn chưa đăng ký tham gia workshop nào.</p>
                                    <button className="btn-primary" onClick={() => navigate("/workshops")}>
                                        Khám phá workshop
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === "settings" && (
                        <div className="settings-tab">
                            <h2>Cài đặt tài khoản</h2>

                            <div className="settings-section">
                                <h3>Thông tin cá nhân</h3>
                                <div className="form-group">
                                    <label>Họ tên</label>
                                    <input type="text" value={user.name} readOnly />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" value={user.email} readOnly />
                                </div>
                                <div className="form-group">
                                    <label>Vai trò</label>
                                    <input type="text" value={user.role === "teacher" ? "Giáo viên" : "Học viên"} readOnly />
                                </div>
                            </div>

                            <div className="settings-section">
                                <h3>Thông báo</h3>
                                <div className="setting-item">
                                    <label className="setting-label">
                                        <input type="checkbox" defaultChecked />
                                        Nhận thông báo qua email
                                    </label>
                                </div>
                                <div className="setting-item">
                                    <label className="setting-label">
                                        <input type="checkbox" defaultChecked />
                                        Thông báo workshop mới
                                    </label>
                                </div>
                                <div className="setting-item">
                                    <label className="setting-label">
                                        <input type="checkbox" />
                                        Thông báo tài liệu mới
                                    </label>
                                </div>
                            </div>

                            <div className="settings-actions">
                                <button className="btn-primary">Lưu thay đổi</button>
                                <button className="btn-danger" onClick={handleLogout}>
                                    Đăng xuất
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserAccountPage
