"use client"

import type React from "react"
import { useState } from "react"
import "./contactpage.css"

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        type: "general",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h.")
        setFormData({ name: "", email: "", subject: "", message: "", type: "general" })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="static-page">
            <div className="static-container">
                <div className="page-header">
                    <h1>Liên hệ hỗ trợ</h1>

                </div>
                <p className="contact-des">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>

                <div className="contact-content">
                    <div className="contact-info1">
                        <div className="content-section">
                            <h2>Thông tin liên hệ</h2>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div className="method-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="method-info">
                                        <h4>Email</h4>
                                        <p>contact@FShare.com</p>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="method-info">
                                        <h4>Điện thoại</h4>
                                        <p>Hotline 1: 0123456789</p>
                                        <p> Hotline 2: 0987654321</p>
                                        <p>Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="method-info">
                                        <h4>Địa chỉ</h4>
                                        <p>123 Đường ABC, Quận 1</p>
                                        <p>TP. Hồ Chí Minh, Việt Nam</p>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">
                                        <i className="fas fa-comments"></i>
                                    </div>
                                    <div className="method-info">
                                        <h4>Live Chat</h4>
                                        <p>Trò chuyện trực tiếp</p>
                                        <button className="btn-primary">Bắt đầu chat</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="contact-form-section">
                        <div className="content-section">
                            <h2>Gửi tin nhắn</h2>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Họ tên *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Nhập họ tên của bạn"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Nhập email của bạn"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Loại yêu cầu *</label>
                                    <select name="type" value={formData.type} onChange={handleChange} required>
                                        <option value="general">Câu hỏi chung</option>
                                        <option value="technical">Hỗ trợ kỹ thuật</option>
                                        <option value="billing">Thanh toán</option>
                                        <option value="partnership">Hợp tác</option>
                                        <option value="feedback">Góp ý</option>
                                        <option value="bug">Báo lỗi</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Tiêu đề *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Nhập tiêu đề tin nhắn"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Nội dung *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Mô tả chi tiết vấn đề hoặc câu hỏi của bạn..."
                                        rows={6}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn-primary submit-btn">
                                    <i className="fas fa-paper-plane"></i>
                                    Gửi tin nhắn
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Câu hỏi thường gặp</h2>

                    <div className="faq-list">
                        <div className="faq-item">
                            <h4>Làm thế nào để tải tài liệu?</h4>
                            <p>Bạn cần đăng nhập tài khoản, sau đó click vào nút "Tải xuống" trên trang chi tiết tài liệu.</p>
                        </div>

                        <div className="faq-item">
                            <h4>Tôi có thể upload tài liệu của mình không?</h4>
                            <p>Có, bạn có thể upload tài liệu thông qua trang "Upload" sau khi đăng nhập.</p>
                        </div>

                        <div className="faq-item">
                            <h4>Làm thế nào để đăng ký workshop?</h4>
                            <p>Truy cập trang Workshop, chọn workshop bạn quan tâm và click "Đăng ký ngay".</p>
                        </div>

                        <div className="faq-item">
                            <h4>Tôi quên mật khẩu, phải làm sao?</h4>
                            <p>Click vào "Quên mật khẩu" ở trang đăng nhập và làm theo hướng dẫn.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
