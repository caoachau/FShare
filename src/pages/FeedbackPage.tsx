"use client"

import type React from "react"
import { useState } from "react"
import "./feedback.css"

const FeedbackPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "suggestion",
        rating: 5,
        subject: "",
        message: "",
        anonymous: false,
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert("Cảm ơn bạn đã góp ý! Chúng tôi sẽ xem xét và cải thiện dịch vụ.")
        setFormData({
            name: "",
            email: "",
            type: "suggestion",
            rating: 5,
            subject: "",
            message: "",
            anonymous: false,
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        })
    }

    return (
        <div className="static-page">
            <div className="static-container">
                <div className="page-header">
                    <h1>Đóng góp ý kiến</h1>
                    <p>Ý kiến của bạn giúp chúng tôi cải thiện dịch vụ</p>
                </div>

                <div className="feedback-content">
                    <div className="feedback-info">
                        <div className="content-section">
                            <h2>Tại sao ý kiến của bạn quan trọng?</h2>

                            <div className="importance-list">
                                <div className="importance-item">
                                    <i className="fas fa-lightbulb"></i>
                                    <div>
                                        <h4>Cải thiện trải nghiệm</h4>
                                        <p>Góp ý giúp chúng tôi hiểu rõ hơn về nhu cầu của người dùng</p>
                                    </div>
                                </div>

                                <div className="importance-item">
                                    <i className="fas fa-rocket"></i>
                                    <div>
                                        <h4>Phát triển tính năng mới</h4>
                                        <p>Ý tưởng của bạn có thể trở thành tính năng trong phiên bản tiếp theo</p>
                                    </div>
                                </div>

                                <div className="importance-item">
                                    <i className="fas fa-bug"></i>
                                    <div>
                                        <h4>Sửa lỗi nhanh chóng</h4>
                                        <p>Báo cáo lỗi giúp chúng tôi khắc phục vấn đề kịp thời</p>
                                    </div>
                                </div>

                                <div className="importance-item">
                                    <i className="fas fa-users"></i>
                                    <div>
                                        <h4>Xây dựng cộng đồng</h4>
                                        <p>Cùng nhau tạo ra môi trường học tập tốt nhất</p>
                                    </div>
                                </div>
                            </div>

                            <div className="feedback-stats">
                                <h3>Thống kê góp ý</h3>
                                <div className="stats-grid">
                                    <div className="stat-item">
                                        <div className="stat-number">1,234</div>
                                        <div className="stat-label">Góp ý đã nhận</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">89%</div>
                                        <div className="stat-label">Đã được xử lý</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">156</div>
                                        <div className="stat-label">Tính năng mới</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">24h</div>
                                        <div className="stat-label">Thời gian phản hồi</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="feedback-form-section">
                        <div className="content-section">
                            <h2>Gửi góp ý</h2>

                            <form className="feedback-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Họ tên {!formData.anonymous && "*"}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Nhập họ tên của bạn"
                                            required={!formData.anonymous}
                                            disabled={formData.anonymous}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Email {!formData.anonymous && "*"}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Nhập email của bạn"
                                            required={!formData.anonymous}
                                            disabled={formData.anonymous}
                                        />
                                    </div>
                                </div>

                                <div className="form-group checkbox">
                                    <label>
                                        <input type="checkbox" name="anonymous" checked={formData.anonymous} onChange={handleChange} />
                                        Gửi góp ý ẩn danh
                                    </label>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Loại góp ý *</label>
                                        <select name="type" value={formData.type} onChange={handleChange} required>
                                            <option value="suggestion">Đề xuất cải thiện</option>
                                            <option value="feature">Yêu cầu tính năng mới</option>
                                            <option value="bug">Báo cáo lỗi</option>
                                            <option value="content">Góp ý về nội dung</option>
                                            <option value="ui">Giao diện người dùng</option>
                                            <option value="performance">Hiệu suất</option>
                                            <option value="other">Khác</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Đánh giá tổng thể *</label>
                                        <div className="rating-input">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    className={`star-btn ${star <= formData.rating ? "active" : ""}`}
                                                    onClick={() => setFormData({ ...formData, rating: star })}
                                                >
                                                    <i className="fas fa-star"></i>
                                                </button>
                                            ))}
                                            <span className="rating-text">
                        {formData.rating === 1 && "Rất không hài lòng"}
                                                {formData.rating === 2 && "Không hài lòng"}
                                                {formData.rating === 3 && "Bình thường"}
                                                {formData.rating === 4 && "Hài lòng"}
                                                {formData.rating === 5 && "Rất hài lòng"}
                      </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Tiêu đề *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Tóm tắt ngắn gọn về góp ý của bạn"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Nội dung chi tiết *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Mô tả chi tiết về góp ý, đề xuất hoặc vấn đề bạn gặp phải..."
                                        rows={6}
                                        required
                                    ></textarea>
                                    <small>Tối thiểu 20 ký tự</small>
                                </div>

                                <button type="submit" className="btn-primary submit-btn">
                                    <i className="fas fa-paper-plane"></i>
                                    Gửi góp ý
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Góp ý gần đây</h2>

                    <div className="recent-feedback">
                        <div className="feedback-item">
                            <div className="feedback-header">
                                <div className="feedback-type suggestion">Đề xuất</div>
                                <div className="feedback-date">2 ngày trước</div>
                            </div>
                            <h4>Thêm tính năng bookmark tài liệu</h4>
                            <p>Mong muốn có thể đánh dấu tài liệu để đọc sau, giúp quản lý tài liệu dễ dàng hơn.</p>
                            <div className="feedback-status processing">
                                <i className="fas fa-clock"></i>
                                Đang xử lý
                            </div>
                        </div>

                        <div className="feedback-item">
                            <div className="feedback-header">
                                <div className="feedback-type bug">Lỗi</div>
                                <div className="feedback-date">1 tuần trước</div>
                            </div>
                            <h4>Lỗi tải trang khi search</h4>
                            <p>Khi tìm kiếm với từ khóa dài, trang web bị lag và không hiển thị kết quả.</p>
                            <div className="feedback-status completed">
                                <i className="fas fa-check"></i>
                                Đã hoàn thành
                            </div>
                        </div>

                        <div className="feedback-item">
                            <div className="feedback-header">
                                <div className="feedback-type feature">Tính năng</div>
                                <div className="feedback-date">2 tuần trước</div>
                            </div>
                            <h4>Dark mode cho website</h4>
                            <p>Thêm chế độ tối để bảo vệ mắt khi sử dụng vào ban đêm.</p>
                            <div className="feedback-status planned">
                                <i className="fas fa-calendar"></i>
                                Đã lên kế hoạch
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackPage
