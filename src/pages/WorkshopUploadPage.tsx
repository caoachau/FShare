"use client"

import type React from "react"
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { workshopData } from "../data/workshopData"
import "./UploadPage.css"

export type Workshop = {
    id: string
    title: string
    description: string
    instructor: string
    instructorAvatar: string
    level: "Beginner" | "Intermediate" | "Advanced"
    startDate: string
    endDate: string
    time: string
    duration: string
    maxParticipants: string
    currentParticipants: string
    price: string
    status: string
    category: string
    image: string
    topics: string[]
    requirements: string[]
    benefits: string[]
    tags: string[]
    rating: string
    feedback: any[]
}


const WorkshopUploadPage: React.FC = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [uploading, setUploading] = useState(false)
    const [uploadProgress, setUploadProgress] = useState(0)
    const [workshopInfo, setWorkshopInfo] = useState({
        title: "",
        description: "",
        level: "Beginner",
        startDate: "",
        endDate: "",
        time: "",
        duration: "",
        maxParticipants: 20,
        price: "Free",
        topics: "",
        requirements: "",
        benefits: "",
    })
    const [workshopImage, setWorkshopImage] = useState<File | null>(null)
    const imageInputRef = useRef<HTMLInputElement>(null)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setWorkshopImage(e.target.files[0])
        }
    }

    const handleSubmit = async () => {
        if (!workshopInfo.title || !workshopInfo.startDate || !workshopInfo.time) {
            alert("Vui lòng điền đầy đủ thông tin bắt buộc")
            return
        }

        if (user?.role !== "teacher") {
            alert("Chỉ giáo viên mới có thể tạo workshop")
            return
        }

        setUploading(true)
        setUploadProgress(0)

        // Simulate upload progress
        const interval = setInterval(() => {
            setUploadProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setUploading(false)

                    // Create new workshop object
                    const newWorkshop = {
                        id: Date.now(),
                        title: workshopInfo.title,
                        description: workshopInfo.description,
                        instructor: user?.name || "Unknown",
                        instructorAvatar:
                            user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=072D4A&color=fff`,
                        level: workshopInfo.level as "Beginner" | "Intermediate" | "Advanced",
                        startDate: workshopInfo.startDate,
                        endDate: workshopInfo.endDate || workshopInfo.startDate,
                        time: workshopInfo.time,
                        duration: workshopInfo.duration,
                        maxParticipants: workshopInfo.maxParticipants,
                        currentParticipants: 0,
                        price: workshopInfo.price,
                        status: "Sắp diễn ra" as "Sắp diễn ra" | "Đang diễn ra" | "Đã hoàn thành",

                        category: "upcoming" as "upcoming" | "ongoing" | "completed",

                        image: workshopImage ? URL.createObjectURL(workshopImage) : "/placeholder.svg",
                        topics: workshopInfo.topics
                            .split(",")
                            .map((t) => t.trim())
                            .filter((t) => t),
                        requirements: workshopInfo.requirements
                            .split(",")
                            .map((t) => t.trim())
                            .filter((t) => t),
                        benefits: workshopInfo.benefits
                            .split(",")
                            .map((t) => t.trim())
                            .filter((t) => t),
                        tags: [workshopInfo.level, "Workshop", user?.name || "Teacher"],
                        rating: 0,
                        feedback: [],
                    }

                    // Add to workshop data
                    workshopData.push(newWorkshop)

                    // Save to localStorage
                    const uploadedWorkshops = JSON.parse(localStorage.getItem("uploadedWorkshops") || "[]")
                    uploadedWorkshops.push(newWorkshop)
                    localStorage.setItem("uploadedWorkshops", JSON.stringify(uploadedWorkshops))

                    alert("Workshop đã được tạo thành công!")

                    // Reset form
                    setWorkshopInfo({
                        title: "",
                        description: "",
                        level: "Beginner",
                        startDate: "",
                        endDate: "",
                        time: "",
                        duration: "",
                        maxParticipants: 20,
                        price: "Free",
                        topics: "",
                        requirements: "",
                        benefits: "",
                    })
                    setWorkshopImage(null)

                    // Navigate to workshops page
                    navigate("/workshops")

                    return 100
                }
                return prev + 5
            })
        }, 200)
    }

    if (!user || user.role !== "teacher") {
        return (
            <div className="upload-page">
                <div className="upload-header">
                    <h1>Không có quyền truy cập</h1>
                    <p>Chỉ giáo viên mới có thể tạo workshop</p>
                    <button onClick={() => navigate("/teacher")} className="btn-primary">
                        Đăng ký làm giáo viên
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="upload-page workshop-upload">
            <div className="upload-header">
                <h1>Tạo Workshop mới</h1>
                <p>Chia sẻ kiến thức và kinh nghiệm của bạn với cộng đồng</p>
            </div>

            <div className="upload-content">
                <div className="upload-form">
                    <div className="form-section">
                        <h3>Thông tin Workshop</h3>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="title">Tiêu đề Workshop *</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={workshopInfo.title}
                                    onChange={(e) => setWorkshopInfo({ ...workshopInfo, title: e.target.value })}
                                    placeholder="Nhập tiêu đề workshop"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Mô tả</label>
                            <textarea
                                id="description"
                                rows={4}
                                value={workshopInfo.description}
                                onChange={(e) => setWorkshopInfo({ ...workshopInfo, description: e.target.value })}
                                placeholder="Mô tả nội dung workshop"
                            ></textarea>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="level">Cấp độ *</label>
                                <select
                                    value={workshopInfo.level}
                                    onChange={(e) =>
                                        setWorkshopInfo({ ...workshopInfo, level: e.target.value as Workshop["level"] })
                                    }
                                >
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                </select>


                            </div>

                            <div className="form-group">
                                <label htmlFor="maxParticipants">Số lượng tham gia tối đa</label>
                                <input
                                    type="number"
                                    id="maxParticipants"
                                    value={workshopInfo.maxParticipants}
                                    onChange={(e) =>
                                        setWorkshopInfo({ ...workshopInfo, maxParticipants: Number.parseInt(e.target.value) })
                                    }
                                    min="5"
                                    max="100"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="startDate">Ngày bắt đầu *</label>
                                <input
                                    type="date"
                                    id="startDate"
                                    value={workshopInfo.startDate}
                                    onChange={(e) => setWorkshopInfo({ ...workshopInfo, startDate: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="endDate">Ngày kết thúc</label>
                                <input
                                    type="date"
                                    id="endDate"
                                    value={workshopInfo.endDate}
                                    onChange={(e) => setWorkshopInfo({ ...workshopInfo, endDate: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="time">Thời gian *</label>
                                <input
                                    type="time"
                                    id="time"
                                    value={workshopInfo.time}
                                    onChange={(e) => setWorkshopInfo({ ...workshopInfo, time: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="duration">Thời lượng</label>
                                <input
                                    type="text"
                                    id="duration"
                                    value={workshopInfo.duration}
                                    onChange={(e) => setWorkshopInfo({ ...workshopInfo, duration: e.target.value })}
                                    placeholder="VD: 2 giờ, 1 ngày"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Giá</label>
                            <input
                                type="text"
                                id="price"
                                value={workshopInfo.price}
                                onChange={(e) => setWorkshopInfo({ ...workshopInfo, price: e.target.value })}
                                placeholder="VD: Free, 500,000 VND"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="topics">Chủ đề chính</label>
                            <textarea
                                id="topics"
                                rows={3}
                                value={workshopInfo.topics}
                                onChange={(e) => setWorkshopInfo({ ...workshopInfo, topics: e.target.value })}
                                placeholder="Nhập các chủ đề, cách nhau bằng dấu phẩy"
                            ></textarea>
                            <small>VD: React Hooks, State Management, Performance Optimization</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="requirements">Yêu cầu</label>
                            <textarea
                                id="requirements"
                                rows={3}
                                value={workshopInfo.requirements}
                                onChange={(e) => setWorkshopInfo({ ...workshopInfo, requirements: e.target.value })}
                                placeholder="Nhập các yêu cầu, cách nhau bằng dấu phẩy"
                            ></textarea>
                            <small>VD: Kiến thức JavaScript cơ bản, Laptop cá nhân, Node.js đã cài đặt</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="benefits">Lợi ích</label>
                            <textarea
                                id="benefits"
                                rows={3}
                                value={workshopInfo.benefits}
                                onChange={(e) => setWorkshopInfo({ ...workshopInfo, benefits: e.target.value })}
                                placeholder="Nhập các lợi ích, cách nhau bằng dấu phẩy"
                            ></textarea>
                            <small>VD: Chứng chỉ hoàn thành, Tài liệu workshop, Hỗ trợ sau khóa học</small>
                        </div>
                    </div>

                    <div className="form-section">
                        <h3>Hình ảnh Workshop</h3>
                        <div className="image-upload-section">
                            <input type="file" ref={imageInputRef} className="hidden" onChange={handleImageChange} accept="image/*" />

                            <div className="image-preview" onClick={() => imageInputRef.current?.click()}>
                                {workshopImage ? (
                                    <img src={URL.createObjectURL(workshopImage) || "/placeholder.svg"} alt="Workshop preview" />
                                ) : (
                                    <div className="image-placeholder">
                                        <i className="fas fa-image"></i>
                                        <p>Click để chọn hình ảnh</p>
                                        <small>Khuyến nghị: 800x400px, định dạng JPG/PNG</small>
                                    </div>
                                )}
                            </div>
                        </div>

                        {uploading && (
                            <div className="upload-progress">
                                <h4>Đang tạo workshop...</h4>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: `${uploadProgress}%` }}></div>
                                </div>
                                <p>{uploadProgress}% hoàn thành</p>
                            </div>
                        )}

                        <div className="upload-actions">
                            <button className="upload-btn" onClick={handleSubmit} disabled={uploading}>
                                {uploading ? "Đang tạo..." : "Tạo Workshop"}
                            </button>
                            <button className="cancel-btn" onClick={() => navigate("/workshops")}>
                                Hủy
                            </button>
                        </div>
                    </div>
                </div>

                <div className="upload-guidelines">
                    <h3>Hướng dẫn tạo Workshop</h3>
                    <div className="guidelines-list">
                        <div className="guideline-item">
                            <h4>📋 Chuẩn bị nội dung</h4>
                            <p>Đảm bảo nội dung workshop có giá trị và phù hợp với cấp độ đã chọn</p>
                        </div>
                        <div className="guideline-item">
                            <h4>🎯 Mục tiêu rõ ràng</h4>
                            <p>Xác định rõ mục tiêu học tập và kết quả mong đợi</p>
                        </div>
                        <div className="guideline-item">
                            <h4>⏰ Thời gian hợp lý</h4>
                            <p>Lên kế hoạch thời gian phù hợp với nội dung</p>
                        </div>
                        <div className="guideline-item">
                            <h4>🤝 Tương tác</h4>
                            <p>Tạo cơ hội tương tác và thực hành cho học viên</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkshopUploadPage
