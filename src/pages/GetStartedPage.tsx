"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import "./GetStartedPage.css"

const GetStartedPage: React.FC = () => {
    const { user } = useAuth()

    return (
        <div className="get-started-page">
            <div className="get-started-container">
                <div className="page-header">
                    <h1>Bắt đầu với DevShare</h1>
                    <p>Hướng dẫn chi tiết để bạn có thể tận dụng tối đa nền tảng DevShare</p>
                </div>

                <div className="steps-container">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3>Tạo tài khoản</h3>
                            <p>Đăng ký tài khoản miễn phí để truy cập đầy đủ các tính năng của DevShare</p>
                            {!user && (
                                <Link to="/" className="step-action">
                                    Đăng ký ngay
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3>Khám phá tài liệu</h3>
                            <p>Duyệt qua hàng nghìn tài liệu chất lượng cao về lập trình và công nghệ</p>
                            <Link to="/documents" className="step-action">
                                Xem tài liệu
                            </Link>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3>Tham gia Workshop</h3>
                            <p>Đăng ký các workshop và sự kiện để học hỏi từ các chuyên gia</p>
                            <Link to="/workshops" className="step-action">
                                Xem Workshop
                            </Link>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h3>Chia sẻ kiến thức</h3>
                            <p>Upload tài liệu của bạn để chia sẻ kiến thức với cộng đồng</p>
                            <Link to="/upload" className="step-action">
                                Upload tài liệu
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="features-section">
                    <h2>Tính năng nổi bật</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <i className="fas fa-book-open"></i>
                            <h4>Thư viện phong phú</h4>
                            <p>Hàng nghìn tài liệu về các công nghệ mới nhất</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-users"></i>
                            <h4>Cộng đồng sôi động</h4>
                            <p>Kết nối với các developer khác trên toàn thế giới</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-graduation-cap"></i>
                            <h4>Workshop chất lượng</h4>
                            <p>Học từ các chuyên gia hàng đầu trong ngành</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-mobile-alt"></i>
                            <h4>Truy cập mọi lúc</h4>
                            <p>Học tập mọi lúc, mọi nơi trên mọi thiết bị</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStartedPage
