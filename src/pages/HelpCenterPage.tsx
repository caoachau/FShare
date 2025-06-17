"use client"

import type React from "react"
import { useState } from "react"
import "./helpcenter.css"

const HelpCenterPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")

    const faqCategories = [
        { id: "all", name: "Tất cả", icon: "fas fa-list" },
        { id: "account", name: "Tài khoản", icon: "fas fa-user" },
        { id: "documents", name: "Tài liệu", icon: "fas fa-file-alt" },
        { id: "workshops", name: "Workshop", icon: "fas fa-calendar" },
        { id: "payment", name: "Thanh toán", icon: "fas fa-credit-card" },
        { id: "technical", name: "Kỹ thuật", icon: "fas fa-cog" },
    ]

    const faqs = [
        {
            id: 1,
            category: "account",
            question: "Làm thế nào để tạo tài khoản?",
            answer: "Click vào nút 'Đăng ký' ở góc phải trên cùng, điền thông tin cần thiết và xác nhận email.",
        },
        {
            id: 2,
            category: "account",
            question: "Tôi quên mật khẩu, phải làm sao?",
            answer: "Click 'Quên mật khẩu' ở trang đăng nhập, nhập email và làm theo hướng dẫn trong email.",
        },
        {
            id: 3,
            category: "documents",
            question: "Làm thế nào để tải tài liệu?",
            answer: "Đăng nhập tài khoản, tìm tài liệu cần tải và click nút 'Tải xuống'.",
        },
        {
            id: 4,
            category: "documents",
            question: "Tôi có thể upload tài liệu của mình không?",
            answer: "Có, sau khi đăng nhập, truy cập trang 'Upload' và làm theo hướng dẫn.",
        },
        {
            id: 5,
            category: "workshops",
            question: "Làm thế nào để đăng ký workshop?",
            answer: "Vào trang Workshop, chọn workshop bạn quan tâm và click 'Đăng ký ngay'.",
        },
        {
            id: 6,
            category: "workshops",
            question: "Tôi có thể hủy đăng ký workshop không?",
            answer: "Có, bạn có thể hủy trong trang tài khoản. Chính sách hoàn tiền tùy thuộc vào thời gian hủy.",
        },
        {
            id: 7,
            category: "payment",
            question: "Những phương thức thanh toán nào được hỗ trợ?",
            answer: "Chúng tôi hỗ trợ thẻ tín dụng, chuyển khoản ngân hàng và ví điện tử.",
        },
        {
            id: 8,
            category: "technical",
            question: "Website không tải được, tôi phải làm gì?",
            answer: "Thử làm mới trang, xóa cache trình duyệt hoặc liên hệ hỗ trợ kỹ thuật.",
        },
    ]

    const filteredFaqs = faqs.filter((faq) => {
        const matchesCategory = activeCategory === "all" || faq.category === activeCategory
        const matchesSearch =
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="static-page">
            <div className="static-container">
                <div className="page-header">
                    <h1>Trung tâm trợ giúp</h1>
                    <p>Tìm câu trả lời cho các câu hỏi thường gặp</p>
                </div>

                <div className="help-search">
                    <div className="content-section">
                        <div className="search-box">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="Tìm kiếm câu hỏi..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="help-content">
                    <div className="help-sidebar">
                        <div className="content-section">
                            <h3>Danh mục</h3>
                            <div className="category-list">
                                {faqCategories.map((category) => (
                                    <button
                                        key={category.id}
                                        className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
                                        onClick={() => setActiveCategory(category.id)}
                                    >
                                        <i className={category.icon}></i>
                                        {category.name}
                                    </button>
                                ))}
                            </div>

                            <div className="quick-links">
                                <h4>Liên kết nhanh</h4>
                                <a href="/contact" className="quick-link">
                                    <i className="fas fa-envelope"></i>
                                    Liên hệ hỗ trợ
                                </a>
                                <a href="/feedback" className="quick-link">
                                    <i className="fas fa-comment"></i>
                                    Góp ý
                                </a>
                                <a href="/report" className="quick-link">
                                    <i className="fas fa-exclamation-triangle"></i>
                                    Báo cáo vấn đề
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="help-main">
                        <div className="content-section">
                            <h2>Câu hỏi thường gặp</h2>

                            {filteredFaqs.length > 0 ? (
                                <div className="faq-list">
                                    {filteredFaqs.map((faq) => (
                                        <div key={faq.id} className="faq-item">
                                            <h4 className="faq-question">
                                                <i className="fas fa-question-circle"></i>
                                                {faq.question}
                                            </h4>
                                            <p className="faq-answer">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="no-results">
                                    <i className="fas fa-search"></i>
                                    <h3>Không tìm thấy kết quả</h3>
                                    <p>Thử thay đổi từ khóa tìm kiếm hoặc chọn danh mục khác.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="help-contact">
                    <div className="content-section">
                        <h2>Vẫn cần hỗ trợ?</h2>
                        <p>Nếu không tìm thấy câu trả lời, hãy liên hệ với chúng tôi</p>

                        <div className="contact-options">
                            <div className="contact-option">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-info">
                                    <h4>Email hỗ trợ</h4>
                                    <p>support@devshare.vn</p>
                                    <span>Phản hồi trong 24h</span>
                                </div>
                            </div>

                            <div className="contact-option">
                                <div className="contact-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="contact-info">
                                    <h4>Hotline</h4>
                                    <p>+84 123 456 789</p>
                                    <span>T2-T6: 8:00-18:00</span>
                                </div>
                            </div>

                            <div className="contact-option">
                                <div className="contact-icon">
                                    <i className="fas fa-comments"></i>
                                </div>
                                <div className="contact-info">
                                    <h4>Live Chat</h4>
                                    <p>Trò chuyện trực tiếp</p>
                                    <button className="btn-primary">Bắt đầu chat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpCenterPage
