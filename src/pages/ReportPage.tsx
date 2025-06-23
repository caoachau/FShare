"use client"

import type React from "react"
import { useState } from "react"
import "./report.css"

const ReportPage: React.FC = () => {
    const [formData, setFormData] = useState({
        reporterName: "",
        reporterEmail: "",
        type: "content",
        priority: "medium",
        url: "",
        subject: "",
        description: "",
        evidence: null as File | null,
        anonymous: false,
    })

// Hàm xử lý gửi báo cáo
   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newFeedback = {
        ...formData,
        createdAt: new Date().toISOString(),
    }

    const blob = new Blob([JSON.stringify(newFeedback, null, 2)], {
        type: "application/json",
    })

    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = `feedback-${Date.now()}.json` // tên file
    link.click()

    alert("Góp ý đã được lưu về máy của bạn!")

    setFormData({
        reporterName: "",
        reporterEmail: "",
        type: "content",
        priority: "medium",
        url: "",
        subject: "",
        description: "",
        evidence: null,
        anonymous: false,
    })
}


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        if (type === "file") {
            const file = (e.target as HTMLInputElement).files?.[0] || null
            setFormData({ ...formData, [name]: file })
        } else if (type === "checkbox") {
            setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    return (
        <div className="static-page">
            <div className="static-container">
                <div className="page-header">
                    <h1>Báo cáo vấn đề</h1>
                    <p>Giúp chúng tôi duy trì môi trường an toàn và chất lượng</p>
                </div>

                <div className="report-content">
                    <div className="report-info">
                        <div className="content-section">
                            <h2>Khi nào nên báo cáo?</h2>

                            <div className="report-types">
                                <div className="report-type-item">
                                    <i className="fas fa-exclamation-triangle"></i>
                                    <div>
                                        <h4>Nội dung không phù hợp</h4>
                                        <p>Tài liệu chứa nội dung vi phạm, spam hoặc không liên quan</p>
                                    </div>
                                </div>

                                <div className="report-type-item">
                                    <i className="fas fa-copyright"></i>
                                    <div>
                                        <h4>Vi phạm bản quyền</h4>
                                        <p>Tài liệu được upload trái phép hoặc vi phạm sở hữu trí tuệ</p>
                                    </div>
                                </div>

                                <div className="report-type-item">
                                    <i className="fas fa-user-slash"></i>
                                    <div>
                                        <h4>Hành vi không phù hợp</h4>
                                        <p>Người dùng có hành vi quấy rối, lạm dụng hoặc gian lận</p>
                                    </div>
                                </div>

                                <div className="report-type-item">
                                    <i className="fas fa-bug"></i>
                                    <div>
                                        <h4>Lỗi kỹ thuật</h4>
                                        <p>Phát hiện lỗi bảo mật hoặc vấn đề kỹ thuật nghiêm trọng</p>
                                    </div>
                                </div>
                            </div>

                            <div className="report-guidelines">
                                <h3>Hướng dẫn báo cáo hiệu quả</h3>
                                <ul>
                                    <li>Cung cấp thông tin chi tiết và chính xác</li>
                                    <li>Đính kèm bằng chứng nếu có thể</li>
                                    <li>Sử dụng ngôn ngữ lịch sự và tôn trọng</li>
                                    <li>Không báo cáo sai sự thật hoặc vu khống</li>
                                    <li>Chỉ báo cáo những vấn đề thực sự nghiêm trọng</li>
                                </ul>
                            </div>

                            <div className="report-process">
                                <h3>Quy trình xử lý</h3>
                                <div className="process-steps">
                                    <div className="process-step">
                                        <div className="step-content">
                                            <h4>Tiếp nhận</h4>
                                            <p>Báo cáo được ghi nhận trong hệ thống</p>
                                        </div>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-content">
                                            <h4>Xem xét</h4>
                                            <p>Đội ngũ kiểm duyệt đánh giá báo cáo</p>
                                        </div>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-content">
                                            <h4>Hành động</h4>
                                            <p>Thực hiện biện pháp xử lý phù hợp</p>
                                        </div>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-content">
                                            <h4>Phản hồi</h4>
                                            <p>Thông báo kết quả cho người báo cáo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="report-form-section">
                        <div className="content-section">
                            <h2>Gửi báo cáo</h2>

                            <form className="report-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Họ tên {!formData.anonymous && "*"}</label>
                                        <input
                                            type="text"
                                            name="reporterName"
                                            value={formData.reporterName}
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
                                            name="reporterEmail"
                                            value={formData.reporterEmail}
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
                                        Báo cáo ẩn danh
                                    </label>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Loại vấn đề *</label>
                                        <select name="type" value={formData.type} onChange={handleChange} required>
                                            <option value="content">Nội dung không phù hợp</option>
                                            <option value="copyright">Vi phạm bản quyền</option>
                                            <option value="user">Hành vi người dùng</option>
                                            <option value="security">Vấn đề bảo mật</option>
                                            <option value="technical">Lỗi kỹ thuật</option>
                                            <option value="spam">Spam/Quảng cáo</option>
                                            <option value="fraud">Gian lận</option>
                                            <option value="other">Khác</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Mức độ ưu tiên *</label>
                                        <select name="priority" value={formData.priority} onChange={handleChange} required>
                                            <option value="low">Thấp</option>
                                            <option value="medium">Trung bình</option>
                                            <option value="high">Cao</option>
                                            <option value="critical">Khẩn cấp</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>URL liên quan</label>
                                    <input
                                        type="url"
                                        name="url"
                                        value={formData.url}
                                        onChange={handleChange}
                                        placeholder="https://Fshare.vn/..."
                                    />
                                    <small>Link đến trang, tài liệu hoặc profile có vấn đề</small>
                                </div>

                                <div className="form-group">
                                    <label>Tiêu đề *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Tóm tắt ngắn gọn về vấn đề"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Mô tả chi tiết *</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Mô tả chi tiết về vấn đề, bao gồm thời gian, địa điểm và các chi tiết liên quan..."
                                        rows={6}
                                        required
                                    ></textarea>
                                    <small>Cung cấp càng nhiều thông tin càng tốt để chúng tôi xử lý nhanh chóng</small>
                                </div>

                                <div className="form-group">
                                    <label>Bằng chứng</label>
                                    <input type="file" name="evidence" onChange={handleChange} accept="image/*,.pdf,.doc,.docx" />
                                    <small>Ảnh chụp màn hình, tài liệu hoặc file liên quan (tối đa 10MB)</small>
                                </div>

                                <div className="form-group checkbox">
                                    <label>
                                        <input type="checkbox" required />
                                        Tôi xác nhận rằng thông tin báo cáo là chính xác và không vu khống
                                    </label>
                                </div>

                                <button type="submit" className="btn-primary submit-btn">
                                    <i className="fas fa-flag"></i>
                                    Gửi báo cáo
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Thống kê báo cáo</h2>

                    <div className="report-stats">
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-flag"></i>
                            </div>
                            <div className="stat-info">
                                <div className="stat-number">2,456</div>
                                <div className="stat-label">Báo cáo đã nhận</div>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-check"></i>
                            </div>
                            <div className="stat-info">
                                <div className="stat-number">94%</div>
                                <div className="stat-label">Đã xử lý</div>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="stat-info">
                                <div className="stat-number">18h</div>
                                <div className="stat-label">Thời gian xử lý TB</div>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <div className="stat-info">
                                <div className="stat-number">1,234</div>
                                <div className="stat-label">Nội dung đã gỡ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportPage
