import type React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <div className="footer-info">
                        <div className="logo-text">FShare</div>


                    </div>

                    <div className="footer-column">
                        <p className="p11">Liên hệ với chúng tôi</p>
                        <p className="p11">📱 Hotline 1: 0123456789</p>
                        <p className="p11">📱 Hotline 2: 0987654321</p>
                        <p className="p11">📧 Email: contact@FShare.com</p>
                        <p className="p11">🌐 Website: devshare.com</p>
                    </div>
                    <div className="footer-right">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>

                    </div>

                </div>

                <div className="footer-column">
                    <h3>Về DevShare</h3>
                    <ul>
                        <li>
                            <Link to="/about">Giới thiệu</Link>
                        </li>
                        <li>
                            <Link to="/terms">Điều khoản dịch vụ</Link>
                        </li>
                        <li>
                            <Link to="/privacy">Chính sách bảo mật</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Học tập</h3>
                    <ul>
                        <li>
                            <Link to="/documents">Thư viện tài liệu</Link>
                        </li>

                        <li>
                            <Link to="/workshops">Workshop & Sự kiện</Link>
                        </li>
                        <li>
                            <Link to="/teacher">Dành cho giáo viên</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Hỗ trợ</h3>
                    <ul>
                        <li>
                            <Link to="/contact">Liên hệ hỗ trợ</Link>
                        </li>

                        <li>
                            <Link to="/help">Trung tâm trợ giúp</Link>
                        </li>
                        <li>
                            <Link to="/feedback">Đóng góp ý kiến</Link>
                        </li>
                        <li>
                            <Link to="/report">Báo cáo vấn đề</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-left">
                © 2025 Coursera Inc. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer
