"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { workshopData, getWorkshopsByCategory } from "../data/workshopData"
import WorkshopModal from "./WorkshopModal"
import "./Workshop.css"

const Workshop: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const [selectedWorkshop, setSelectedWorkshop] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const categories = [
        { key: "all", label: "Tất cả", count: workshopData.length },
        { key: "upcoming", label: "Sắp diễn ra", count: getWorkshopsByCategory("upcoming").length },
        { key: "ongoing", label: "Đang diễn ra", count: getWorkshopsByCategory("ongoing").length },
        { key: "completed", label: "Đã hoàn thành", count: getWorkshopsByCategory("completed").length },
    ]

    const filteredWorkshops = getWorkshopsByCategory(activeCategory)

    const handleWorkshopClick = (workshop: any) => {
        setSelectedWorkshop(workshop)
        setIsModalOpen(true)
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

    return (
        <section className="workshop-section">
            <div className="workshop-header">
                <h2 className="workshop-title">JOIN OUR WORKSHOPS</h2>
            </div>

            {/* Features Section */}
            <div className="workshop-features">
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-users"></i>
                    </div>
                    <h3>Small Group Settings</h3>
                    <p>
                        Engage in intimate learning environments with limited participants to ensure personalized attention and
                        meaningful interactions.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-laptop-code"></i>
                    </div>
                    <h3>Interactive Sessions</h3>
                    <p>
                        Participate in hands-on activities, real-time discussions, and collaborative projects that enhance your
                        learning experience.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-book-open"></i>
                    </div>
                    <h3>Diverse Topics</h3>
                    <p>
                        Explore a wide range of subjects from technical skills to creative pursuits, all taught by industry experts
                        and thought leaders.
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="workshop-filters">
                {categories.map((category) => (
                    <button
                        key={category.key}
                        className={`filter-btn ${activeCategory === category.key ? "active" : "p1"}`}
                        onClick={() => setActiveCategory(category.key)}
                    >
                        {category.label}
                        <span className="count">({category.count})</span>
                    </button>
                ))}
            </div>

            {/* Upcoming Workshops Grid */}
            <div className="upcoming-workshops">
                <h3 className="upcoming-title">
                    {activeCategory === "all"
                        ? "TẤT CẢ WORKSHOPS"
                        : activeCategory === "upcoming"
                            ? "UPCOMING WORKSHOPS"
                            : activeCategory === "ongoing"
                                ? "ĐANG DIỄN RA"
                                : "ĐÃ HOÀN THÀNH"}
                </h3>


                <div className="workshops-grid">
                    {filteredWorkshops.slice(0, 8).map((workshop) => (
                        <div key={workshop.id} className="workshop-card-new" onClick={() => handleWorkshopClick(workshop)}>
                            <div className="workshop-image-new">
                                <img src={workshop.image || "/placeholder.svg"} alt={workshop.title} />
                                <div className="workshop-date-badge">
                                    {new Date(workshop.startDate).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </div>
                                <div className={`workshop-status-badge ${getStatusColor(workshop.status)}`}>{workshop.status}</div>
                                {workshop.price === "Free" && <div className="free-badge-new">FREE</div>}
                            </div>

                            <div className="workshop-content-new">
                                <h4 className="workshop-title-new">{workshop.title}</h4>
                                <p className="workshop-description-new">{workshop.description}</p>

                                <div className="workshop-details-new">
                                    <div className="detail-row">
                                        <i className="fas fa-clock"></i>
                                        <span>{workshop.time}</span>
                                    </div>
                                    <div className="detail-row">
                                        <i className="fas fa-user"></i>
                                        <span>{workshop.instructor}</span>
                                    </div>
                                    <div className="detail-row">
                                        <i className="fas fa-signal"></i>
                                        <span>{workshop.level}</span>
                                    </div>
                                </div>

                                {workshop.category !== "completed" && (
                                    <div className="workshop-participants-new">
                                        <div className="participants-bar">
                                            <div
                                                className="participants-fill"
                                                style={{ width: `${(workshop.currentParticipants / workshop.maxParticipants) * 100}%` }}
                                            ></div>
                                        </div>
                                        <span className="participants-text">
                      {workshop.currentParticipants}/{workshop.maxParticipants} người tham gia
                    </span>
                                    </div>
                                )}

                                {workshop.rating && (
                                    <div className="workshop-rating-new">
                                        <div className="stars">
                                            {workshop.rating && [...Array(5)].map((_, i) => (
                                                <i key={i} className={`fas fa-star ${i < Math.floor(workshop.rating ?? 0) ? "filled" : ""}`}></i>
                                            ))}
                                        </div>
                                        <span className="rating-text">({workshop.rating})</span>
                                    </div>
                                )}

                                <div className="workshop-footer-new">
                                    <div className="workshop-price-new">
                                        <span className="price-amount">{workshop.price === "Free" ? "Miễn phí" : workshop.price}</span>
                                        {workshop.category !== "completed" && (
                                            <span className="spots-left">
                        {workshop.maxParticipants - workshop.currentParticipants} spots left
                      </span>
                                        )}
                                    </div>
                                    <button
                                        className="register-btn"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleWorkshopClick(workshop)
                                        }}
                                    >
                                        <i className="fas fa-bookmark"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="workshop-actions">
                <Link to="/workshops" className="view-all-workshops">
                    Xem tất cả Workshop
                    <i className="fas fa-arrow-right"></i>
                </Link>
            </div>

            <WorkshopModal workshop={selectedWorkshop} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}

export default Workshop
