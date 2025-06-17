"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import "./TeacherPage.css"

const TeacherPage: React.FC = () => {
    const { user } = useAuth()
    const [activeTab, setActiveTab] = useState("overview")

    return (
        <div className="static-page">
            <div className="static-container">
                <div className="page-header">
                    <h1>Dành cho Giáo viên</h1>
                    <p>Chia sẻ kiến thức và xây dựng cộng đồng học tập</p>
                </div>

                <div className="teacher-tabs">
                    <button
                        className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
                        onClick={() => setActiveTab("overview")}
                    >
                        Tổng quan
                    </button>
                    <button
                        className={`tab-btn ${activeTab === "benefits" ? "active" : ""}`}
                        onClick={() => setActiveTab("benefits")}
                    >
                        Lợi ích
                    </button>
                    <button
                        className={`tab-btn ${activeTab === "requirements" ? "active" : ""}`}
                        onClick={() => setActiveTab("requirements")}
                    >
                        Yêu cầu
                    </button>
                    <button className={`tab-btn ${activeTab === "apply" ? "active" : ""}`} onClick={() => setActiveTab("apply")}>
                        Đăng ký
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === "overview" && (
                        <div className="content-section">
                            <h2>Tại sao nên trở thành giảng viên DevShare?</h2>
                            <p>
                                DevShare mang đến cơ hội tuyệt vời cho các chuyên gia IT muốn chia sẻ kiến thức và kinh nghiệm của mình
                                với cộng đồng. Bạn sẽ được hỗ trợ toàn diện để tạo ra những khóa học chất lượng cao.
                            </p>

                            <div className="feature-grid">
                                <div className="feature-item">
                                    <i className="fas fa-users"></i>
                                    <h4>Tiếp cận hàng nghìn học viên</h4>
                                    <p>Chia sẻ kiến thức với cộng đồng developer lớn nhất Việt Nam</p>
                                </div>
                                <div className="feature-item">
                                    <i className="fas fa-dollar-sign"></i>
                                    <h4>Thu nhập hấp dẫn</h4>
                                    <p>Nhận được thu nhập từ việc bán khóa học và workshop</p>
                                </div>
                                <div className="feature-item">
                                    <i className="fas fa-chart-line"></i>
                                    <h4>Phát triển thương hiệu cá nhân</h4>
                                    <p>Xây dựng uy tín và thương hiệu trong ngành IT</p>
                                </div>
                                <div className="feature-item">
                                    <i className="fas fa-headset"></i>
                                    <h4>Hỗ trợ toàn diện</h4>
                                    <p>Đội ngũ hỗ trợ chuyên nghiệp giúp bạn thành công</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "benefits" && (
                        <div className="content-section">
                            <h2>Lợi ích khi trở thành giảng viên</h2>

                            <div className="benefits-list">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-money-bill-wave"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h4>Thu nhập ổn định</h4>
                                        <p>Nhận 70% doanh thu từ khóa học của bạn. Không có phí ẩn.</p>
                                    </div>
                                </div>

                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-tools"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h4>Công cụ tạo khóa học</h4>
                                        <p>Sử dụng các công cụ hiện đại để tạo nội dung chất lượng cao.</p>
                                    </div>
                                </div>

                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-analytics"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h4>Thống kê chi tiết</h4>
                                        <p>Theo dõi hiệu suất khóa học và phản hồi từ học viên.</p>
                                    </div>
                                </div>

                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-certificate"></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h4>Chứng nhận giảng viên</h4>
                                        <p>Nhận chứng nhận chính thức từ DevShare.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "requirements" && (
                        <div className="content-section">
                            <h2>Yêu cầu để trở thành giảng viên</h2>

                            <div className="requirements-section">
                                <h3>Yêu cầu cơ bản</h3>
                                <ul>
                                    <li>Có ít nhất 2 năm kinh nghiệm trong lĩnh vực IT</li>
                                    <li>Có kiến thức chuyên sâu về ít nhất một công nghệ</li>
                                    <li>Có khả năng truyền đạt và giao tiếp tốt</li>
                                    <li>Cam kết tạo nội dung chất lượng cao</li>
                                </ul>

                                <h3>Yêu cầu kỹ thuật</h3>
                                <ul>
                                    <li>Máy tính có cấu hình đủ mạnh để quay video</li>
                                    <li>Microphone chất lượng tốt</li>
                                    <li>Kết nối internet ổn định</li>
                                    <li>Kiến thức cơ bản về quay dựng video (có hỗ trợ)</li>
                                </ul>

                                <h3>Quy trình đánh giá</h3>
                                <ol>
                                    <li>Nộp đơn đăng ký với CV và portfolio</li>
                                    <li>Phỏng vấn trực tuyến với đội ngũ DevShare</li>
                                    <li>Tạo video demo về một chủ đề</li>
                                    <li>Đánh giá và phê duyệt</li>
                                    <li>Ký hợp đồng và bắt đầu tạo khóa học</li>
                                </ol>
                            </div>
                        </div>
                    )}

                    {activeTab === "apply" && (
                        <div className="content-section">
                            <h2 className="dkygv">Đăng ký trở thành giảng viên</h2>

                            {user?.role === "teacher" ? (
                                <div className="teacher-dashboard">
                                    <div className="welcome-message">
                                        <h3>Chào mừng giảng viên {user.name}!</h3>
                                        <p>Bạn đã là giảng viên của DevShare. Hãy bắt đầu tạo khóa học đầu tiên của mình.</p>
                                    </div>

                                    <div className="teacher-actions">
                                        <button className="btn-primary">
                                            <i className="fas fa-plus"></i>
                                            Tạo khóa học mới
                                        </button>
                                        <button className="btn-secondary">
                                            <i className="fas fa-chart-bar"></i>
                                            Xem thống kê
                                        </button>
                                        <button className="btn-secondary">
                                            <i className="fas fa-calendar"></i>
                                            Quản lý workshop
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="application-form">
                                    <form className="teacher-form">
                                        <div className="form-group">
                                            <label>Họ tên *</label>
                                            <input type="text" placeholder="Nhập họ tên của bạn" required />
                                        </div>

                                        <div className="form-group">
                                            <label>Email *</label>
                                            <input type="email" placeholder="Nhập email của bạn" required />
                                        </div>

                                        <div className="form-group">
                                            <label>Số điện thoại *</label>
                                            <input type="tel" placeholder="Nhập số điện thoại" required />
                                        </div>

                                        <div className="form-group">
                                            <label>Chuyên môn *</label>
                                            <select required>
                                                <option value="">Chọn chuyên môn</option>
                                                <option value="frontend">Frontend Development</option>
                                                <option value="backend">Backend Development</option>
                                                <option value="mobile">Mobile Development</option>
                                                <option value="devops">DevOps</option>
                                                <option value="data-science">Data Science</option>
                                                <option value="ai-ml">AI/Machine Learning</option>
                                                <option value="blockchain">Blockchain</option>
                                                <option value="cybersecurity">Cybersecurity</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Năm kinh nghiệm *</label>
                                            <select required>
                                                <option value="">Chọn số năm kinh nghiệm</option>
                                                <option value="2-3">2-3 năm</option>
                                                <option value="4-5">4-5 năm</option>
                                                <option value="6-10">6-10 năm</option>
                                                <option value="10+">Trên 10 năm</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>CV/Portfolio *</label>
                                            <input type="file" accept=".pdf,.doc,.docx" required />
                                            <small>Chấp nhận file PDF, DOC, DOCX (tối đa 5MB)</small>
                                        </div>

                                        <div className="form-group">
                                            <label>Mô tả bản thân</label>
                                            <textarea
                                                placeholder="Hãy chia sẻ về kinh nghiệm, dự án đã làm và lý do muốn trở thành giảng viên..."
                                                rows={5}
                                            ></textarea>
                                        </div>

                                        <div className="form-group">
                                            <label>Chủ đề muốn giảng dạy</label>
                                            <textarea className="chudegd" placeholder="Liệt kê các chủ đề bạn muốn tạo khóa học..." rows={3}></textarea>
                                        </div>

                                        <div className="form-group checkbox">
                                            <label>
                                                <input type="checkbox" required />
                                                Tôi đồng ý với <a href="/terms">điều khoản dịch vụ</a> và{" "}
                                                <a href="/privacy">chính sách bảo mật</a>
                                            </label>
                                        </div>

                                        <button type="submit" className="btn-primary submit-btn">
                                            <i className="fas fa-paper-plane"></i>
                                            Gửi đơn đăng ký
                                        </button>
                                    </form>

                                    <div className="application-note">
                                        <h4>Lưu ý:</h4>
                                        <ul>
                                            <li>Chúng tôi sẽ xem xét đơn đăng ký trong vòng 3-5 ngày làm việc</li>
                                            <li>Bạn sẽ nhận được email thông báo kết quả</li>
                                            <li>Nếu được chấp nhận, chúng tôi sẽ liên hệ để hướng dẫn các bước tiếp theo</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TeacherPage
