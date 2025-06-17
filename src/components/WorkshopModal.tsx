"use client"

import type React from "react"
import "./WorkshopModal.css"

interface WorkshopModalProps {
    workshop: any
    isOpen: boolean
    onClose: () => void
}

const WorkshopModal: React.FC<WorkshopModalProps> = ({ workshop, isOpen, onClose }) => {
    if (!isOpen || !workshop) return null

    const handleRegister = () => {
        if (workshop.registrationLink) {
            window.open(workshop.registrationLink, "_blank")
        } else {
            alert("Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.")
        }
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
        <div className="workshop-modal-overlay" onClick={onClose}>
            <div className="workshop-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="modal-header">
                    <div className="modal-image">
                        <img src={workshop.image || "/placeholder.svg"} alt={workshop.title} />
                        <div className={`modal-status ${getStatusColor(workshop.status)}`}>{workshop.status}</div>
                        {workshop.price === "Free" && <div className="modal-free-badge">FREE</div>}
                    </div>

                    <div className="modal-header-content">
                        <h2 className="modal-title">{workshop.title}</h2>
                        <p className="modal-description">{workshop.description}</p>

                        <div className="modal-instructor">
                            <img
                                src={workshop.instructorAvatar || "/placeholder.svg"}
                                alt={workshop.instructor}
                                className="modal-instructor-avatar"
                            />
                            <div className="instructor-details">
                                <span className="instructor-name">{workshop.instructor}</span>
                                <span className="instructor-title">Instructor</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-body">
                    <div className="modal-info-grid">
                        <div className="info-item">
                            <i className="fas fa-calendar"></i>
                            <div>
                                <span className="info-label">Ngày bắt đầu</span>
                                <span className="info-value">{new Date(workshop.startDate).toLocaleDateString("vi-VN")}</span>
                            </div>
                        </div>

                        {workshop.endDate && (
                            <div className="info-item">
                                <i className="fas fa-calendar-check"></i>
                                <div>
                                    <span className="info-label">Ngày kết thúc</span>
                                    <span className="info-value">{new Date(workshop.endDate).toLocaleDateString("vi-VN")}</span>
                                </div>
                            </div>
                        )}

                        <div className="info-item">
                            <i className="fas fa-clock"></i>
                            <div>
                                <span className="info-label">Thời gian</span>
                                <span className="info-value">{workshop.time}</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <i className="fas fa-hourglass-half"></i>
                            <div>
                                <span className="info-label">Thời lượng</span>
                                <span className="info-value">{workshop.duration}</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <i className="fas fa-signal"></i>
                            <div>
                                <span className="info-label">Cấp độ</span>
                                <span className="info-value">{workshop.level}</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <i className="fas fa-dollar-sign"></i>
                            <div>
                                <span className="info-label">Giá</span>
                                <span className="info-value price">{workshop.price === "Free" ? "Miễn phí" : workshop.price}</span>
                            </div>
                        </div>
                    </div>

                    {workshop.topics && (
                        <div className="modal-section">
                            <h3>Nội dung chính</h3>
                            <ul className="topics-list">
                                {workshop.topics.map((topic: string, index: number) => (
                                    <li key={index}>{topic}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {workshop.requirements && (
                        <div className="modal-section">
                            <h3>Yêu cầu</h3>
                            <ul className="requirements-list">
                                {workshop.requirements.map((req: string, index: number) => (
                                    <li key={index}>{req}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {workshop.benefits && (
                        <div className="modal-section">
                            <h3>Lợi ích</h3>
                            <ul className="benefits-list">
                                {workshop.benefits.map((benefit: string, index: number) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {workshop.category !== "completed" && (
                        <div className="modal-section">
                            <h3>Số lượng tham gia</h3>
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
                        </div>
                    )}

                    {workshop.feedback && (
                        <div className="modal-section">
                            <h3>Đánh giá từ học viên</h3>
                            <div className="feedback-list">
                                {workshop.feedback.map((fb: any, index: number) => (
                                    <div key={index} className="feedback-item">
                                        <div className="feedback-header">
                                            <span className="feedback-name">{fb.name}</span>
                                            <div className="feedback-rating">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className={`fas fa-star ${i < fb.rating ? "filled" : ""}`}></i>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="feedback-comment">{fb.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="modal-footer">
                    {workshop.category === "completed" ? (
                        <div className="completed-info">
                            <i className="fas fa-check-circle"></i>
                            <span>Workshop đã hoàn thành</span>
                            {workshop.rating && (
                                <div className="completed-rating">
                                    <span>Đánh giá: {workshop.rating}/5</span>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="action-buttons">
                            <button className="btn-secondary" onClick={onClose}>
                                Đóng
                            </button>
                            <button className="btn-primary" onClick={handleRegister}>
                                <i className="fas fa-user-plus"></i>
                                Đăng ký tham gia
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WorkshopModal
