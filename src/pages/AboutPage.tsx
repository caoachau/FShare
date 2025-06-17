"use client"

import type React from "react"
import "./StaticPages.css"

const AboutPage: React.FC = () => {
    return (
        <div className="static-page">
            <div className="static-container">
                <div className="page-header">
                    <h1>Giới thiệu về DevShare</h1>
                    <p className="document-description">Nền tảng học IT cho mọi người</p>
                </div>

                <div className="content-section">
                    <h2>Về chúng tôi</h2>
                    <p>
                        DevShare là nền tảng học tập và chia sẻ kiến thức IT hàng đầu tại Việt Nam. Chúng tôi được thành lập với sứ
                        mệnh democratize việc học lập trình và công nghệ, giúp mọi người có thể tiếp cận với kiến thức chất lượng
                        cao một cách dễ dàng và hiệu quả.
                    </p>

                    <h2>Tầm nhìn</h2>
                    <p>
                        Trở thành nền tảng học IT số 1 tại Việt Nam, nơi mọi người có thể học hỏi, chia sẻ và phát triển kỹ năng
                        công nghệ một cách toàn diện và bền vững.
                    </p>

                    <h2>Sứ mệnh</h2>
                    <ul>
                        <li>Cung cấp tài liệu học tập chất lượng cao và miễn phí</li>
                        <li>Kết nối cộng đồng developer Việt Nam</li>
                        <li>Tổ chức các workshop và sự kiện học tập</li>
                        <li>Hỗ trợ sự nghiệp cho các developer</li>
                    </ul>

                    <h2>Đội ngũ</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyFNpsQygkn-o9Gax76bEUd6sBjrvtMcRpEHWvGxBtpePb2ZHwwrjOohr9GwzX3SSi8I&usqp=CAU?height=150&width=150" alt="CEO" />
                            <h4>Nguyễn Văn A</h4>
                            <p>CEO & Founder</p>
                            <p>10+ năm kinh nghiệm trong ngành IT</p>
                        </div>
                        <div className="team-member">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkg0wNyjOA-1hhT39IIdP_KAz7zTmvCXuYS5FDelemKMmfYUCljqSW64tvV7sv8DXlbOE&usqp=CAU?height=150&width=150" alt="CTO" />
                            <h4>Trần B</h4>
                            <p>CTO</p>
                            <p>Chuyên gia về kiến trúc hệ thống</p>
                        </div>
                        <div className="team-member">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uMSqi6CaPMQb4JJvvjpFGIQWN6ApdoYtPiUmdrKKOdm66_k99gWHj5IOAWtH6QkTdDk&usqp=CAU?height=150&width=150" alt="Head of Education" />
                            <h4>Lê Văn C</h4>
                            <p>Head of Education</p>
                            <p>Chuyên gia về giáo dục công nghệ</p>
                        </div>
                    </div>

                    <h2>Thành tựu</h2>
                    <div className="achievements">
                        <div className="achievement-item">
                            <div className="achievement-number">500+</div>
                            <div className="achievement-label">Học viên</div>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-number">1,000+</div>
                            <div className="achievement-label">Tài liệu</div>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-number">100+</div>
                            <div className="achievement-label">Workshop</div>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-number">50+</div>
                            <div className="achievement-label">Giảng viên</div>
                        </div>
                        
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

export default AboutPage
