"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { workshopData } from "../data/workshopData"
import WorkshopModal from "../components/WorkshopModal"
import "./AllWorkshopsPage.css"

const categories = ["all", "upcoming", "ongoing", "completed"]
const levels = ["all", "Beginner", "Intermediate", "Advanced"]

const AllWorkshopsPage: React.FC = () => {
    const [filteredWorkshops, setFilteredWorkshops] = useState(workshopData)
    const [activeCategory, setActiveCategory] = useState("all")
    const [activeLevel, setActiveLevel] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedWorkshop, setSelectedWorkshop] = useState<any>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [sortBy, setSortBy] = useState("date")
    const [currentPage, setCurrentPage] = useState(1)
    const workshopsPerPage = 9

    useEffect(() => {
        filterWorkshops()
    }, [activeCategory, activeLevel, searchTerm, sortBy])

    const filterWorkshops = () => {
        let filtered = workshopData

        // Filter by category
        if (activeCategory !== "all") {
            filtered = filtered.filter((workshop) => workshop.category === activeCategory)
        }

        // Filter by level
        if (activeLevel !== "all") {
            filtered = filtered.filter((workshop) => workshop.level === activeLevel)
        }

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(
                (workshop) => {
                    return workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        workshop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        workshop.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        workshop.topics?.some((topic: string) => topic.toLowerCase().includes(searchTerm.toLowerCase()));                },
            )
        }

        // Sort workshops
        switch (sortBy) {
            case "date":
                filtered.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
                break
            case "popularity":
                filtered.sort((a, b) => (b.currentParticipants || 0) - (a.currentParticipants || 0))
                break
            case "title":
                filtered.sort((a, b) => a.title.localeCompare(b.title))
                break
            case "instructor":
                filtered.sort((a, b) => a.instructor.localeCompare(b.instructor))
                break
        }

        setFilteredWorkshops(filtered)
        setCurrentPage(1)
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        filterWorkshops()
    }

    const openModal = (workshop: any) => {
        setSelectedWorkshop(workshop)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedWorkshop(null)
    }

    const getCategoryCount = (category: string) => {
        if (category === "all") return workshopData.length
        return workshopData.filter((workshop) => workshop.category === category).length
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Sắp diễn ra":
                return "upcoming"
            case "Đang diễn ra":
                return "ongoing"
            case "Đã hoàn thành":
                return "completed"
            default:
                return "default"
        }
    }

    // Pagination
    const totalPages = Math.ceil(filteredWorkshops.length / workshopsPerPage)
    const startIndex = (currentPage - 1) * workshopsPerPage
    const endIndex = startIndex + workshopsPerPage
    const currentWorkshops = filteredWorkshops.slice(startIndex, endIndex)

    const goToPage = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="workshops-page">
            <div className="workshops-container">
                <div className="page-header">
                    <h1>Workshop & Sự kiện</h1>
                    <p>Tham gia các workshop chất lượng cao để nâng cao kỹ năng lập trình của bạn</p>
                </div>

                <div className="workshops-filters">
                    <div className="search-section">
                        <form className="search-form" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Tìm kiếm workshop..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                    </div>

                    <div className="filter-controls">
                        <div className="category-filter">
                            <label>Trạng thái:</label>
                            <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
                                <option value="all">Tất cả ({getCategoryCount("all")})</option>
                                <option value="upcoming">Sắp diễn ra ({getCategoryCount("upcoming")})</option>
                                <option value="ongoing">Đang diễn ra ({getCategoryCount("ongoing")})</option>
                                <option value="completed">Đã hoàn thành ({getCategoryCount("completed")})</option>
                            </select>
                        </div>

                        <div className="level-filter">
                            <label>Cấp độ:</label>
                            <select value={activeLevel} onChange={(e) => setActiveLevel(e.target.value)}>
                                <option value="all">Tất cả</option>
                                {levels.slice(1).map((level) => (
                                    <option key={level} value={level}>
                                        {level}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="sort-filter">
                            <label>Sắp xếp:</label>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="date">Theo ngày</option>
                                <option value="popularity">Phổ biến nhất</option>
                                <option value="title">Theo tên A-Z</option>
                                <option value="instructor">Theo giảng viên</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="workshops-results">
                    <div className="results-header">
                        <div className="results-info">
                            <span>Hiển thị {filteredWorkshops.length} workshop</span>
                            {searchTerm && <span> cho "{searchTerm}"</span>}
                            {activeCategory !== "all" && <span> - {activeCategory}</span>}
                            {activeLevel !== "all" && <span> - {activeLevel}</span>}
                        </div>
                    </div>

                    {currentWorkshops.length > 0 ? (
                        <div className="workshops-grid">
                            {currentWorkshops.map((workshop) => (
                                <div key={workshop.id} className="workshop-card" onClick={() => openModal(workshop)}>
                                    <div className="workshop-image">
                                        <img src={workshop.image || "/placeholder.svg"} alt={workshop.title} />
                                        <div className={`workshop-status ${getStatusColor(workshop.status)}`}>{workshop.status}</div>
                                        {workshop.price === "Free" && <div className="workshop-free-badge">FREE</div>}
                                    </div>

                                    <div className="workshop-content">
                                        <h3 className="workshop-title">{workshop.title}</h3>
                                        <p className="workshop-description">{workshop.description}</p>

                                        <div className="workshop-instructor">
                                            <img
                                                src={workshop.instructorAvatar || "/placeholder.svg"}
                                                alt={workshop.instructor}
                                                className="instructor-avatar"
                                            />
                                            <div className="instructor-info">
                                                <span className="instructor-name">{workshop.instructor}</span>
                                                <span className="instructor-title">Instructor</span>
                                            </div>
                                        </div>

                                        <div className="workshop-details">
                                            <div className="detail-item">
                                                <i className="fas fa-calendar"></i>
                                                <span>{new Date(workshop.startDate).toLocaleDateString("vi-VN")}</span>
                                            </div>
                                            <div className="detail-item">
                                                <i className="fas fa-clock"></i>
                                                <span>{workshop.time}</span>
                                            </div>
                                            <div className="detail-item">
                                                <i className="fas fa-signal"></i>
                                                <span>{workshop.level}</span>
                                            </div>
                                            <div className="detail-item">
                                                <i className="fas fa-dollar-sign"></i>
                                                <span className="price">{workshop.price === "Free" ? "Miễn phí" : workshop.price}</span>
                                            </div>
                                        </div>

                                        {workshop.topics && workshop.topics.length > 0 && (
                                            <div className="workshop-tags">
                                                {workshop.topics.slice(0, 3).map((topic: string) => (
                                                    <span key={topic} className="tag">
        {topic}
      </span>
                                                ))}
                                                {workshop.topics.length > 3 && (
                                                    <span className="tag more">+{workshop.topics.length - 3}</span>
                                                )}
                                            </div>
                                        )}

                                        {workshop.category !== "completed" && (
                                            <div className="participants-info">
                                                <div className="participants-bar">
                                                    <div
                                                        className="participants-fill"
                                                        style={{ width: `${(workshop.currentParticipants / workshop.maxParticipants) * 100}%` }}
                                                    ></div>
                                                </div>
                                                <span className="participants-text">
                          {workshop.currentParticipants}/{workshop.maxParticipants} người đã đăng ký
                        </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="workshop-overlay">
                                        <div className="overlay-content">
                                            <i className="fas fa-info-circle"></i>
                                            <span>Xem chi tiết</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <i className="fas fa-search"></i>
                            <h3>Không tìm thấy workshop</h3>
                            <p>Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc để tìm thấy workshop phù hợp.</p>
                            <button
                                className="btn-primary"
                                onClick={() => {
                                    setSearchTerm("")
                                    setActiveCategory("all")
                                    setActiveLevel("all")
                                }}
                            >
                                Xóa bộ lọc
                            </button>
                        </div>
                    )}

                    {totalPages > 1 && (
                        <div className="pagination">
                            <button className="pagination-btn" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                                <i className="fas fa-chevron-left"></i>
                                Trước
                            </button>

                            <div className="pagination-numbers">
                                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                    let page: number;                                    if (totalPages <= 5) {
                                        page = i + 1
                                    } else if (currentPage <= 3) {
                                        page = i + 1
                                    } else if (currentPage >= totalPages - 2) {
                                        page = totalPages - 4 + i
                                    } else {
                                        page = currentPage - 2 + i
                                    }

                                    return (
                                        <button
                                            key={page}
                                            className={`pagination-number ${currentPage === page ? "active" : ""}`}
                                            onClick={() => goToPage(page)}
                                        >
                                            {page}
                                        </button>
                                    )
                                })}
                            </div>

                            <button
                                className="pagination-btn"
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Sau
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <WorkshopModal workshop={selectedWorkshop} isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}

export default AllWorkshopsPage
