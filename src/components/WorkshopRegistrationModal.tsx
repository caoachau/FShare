"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { sendEmail, showNotification } from "../services/emailService"
import "./WorkshopRegistrationModal.css"

interface WorkshopRegistrationModalProps {
    workshop: any
    isOpen: boolean
    onClose: () => void
    onSuccess: () => void
}

const WorkshopRegistrationModal: React.FC<WorkshopRegistrationModalProps> = ({
                                                                                 workshop,
                                                                                 isOpen,
                                                                                 onClose,
                                                                                 onSuccess,
                                                                             }) => {
    const { user } = useAuth()
    const [formData, setFormData] = useState({
        fullName: user?.name || "",
        email: user?.email || "",
        phone: "",
        experience: "beginner",
        motivation: "",
        expectations: "",
        hasLaptop: true,
        dietaryRestrictions: "",
        emergencyContact: "",
        agreeTerms: false,
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    if (!isOpen || !workshop) return null

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.agreeTerms) {
            showNotification("Vui lòng đồng ý với điều khoản và điều kiện", "error")
            return
        }

        setIsSubmitting(true)

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000))

            // Save registration to localStorage
            const registrations = JSON.parse(localStorage.getItem("workshopRegistrations") || "[]")
            const newRegistration = {
                id: Date.now(),
                workshopId: workshop.id,
                workshopTitle: workshop.title,
                userId: user?.id || "guest",
                ...formData,
                registrationDate: new Date().toISOString(),
                status: "confirmed",
            }
            registrations.push(newRegistration)
            localStorage.setItem("workshopRegistrations", JSON.stringify(registrations))

            // Send notification email to teacher
            const emailSuccess = await sendEmail({
                to: "chaucao4325@gmail.com",
                subject: `🎉 Đăng ký workshop mới: ${workshop.title}`,
                body: `
<h2>Thông báo đăng ký workshop mới</h2>

<p>Có người dùng mới đăng ký workshop "<strong>${workshop.title}</strong>"</p>

<h3>Thông tin người đăng ký:</h3>
<ul>
  <li><strong>Họ tên:</strong> ${formData.fullName}</li>
  <li><strong>Email:</strong> ${formData.email}</li>
  <li><strong>Số điện thoại:</strong> ${formData.phone}</li>
  <li><strong>Kinh nghiệm:</strong> ${formData.experience}</li>
  <li><strong>Động lực:</strong> ${formData.motivation}</li>
  <li><strong>Kỳ vọng:</strong> ${formData.expectations}</li>
  <li><strong>Có laptop:</strong> ${formData.hasLaptop ? "Có" : "Không"}</li>
  <li><strong>Hạn chế ăn uống:</strong> ${formData.dietaryRestrictions || "Không có"}</li>
  <li><strong>Liên hệ khẩn cấp:</strong> ${formData.emergencyContact}</li>
</ul>

<h3>Thông tin workshop:</h3>
<ul>
  <li><strong>Ngày:</strong> ${new Date(workshop.startDate).toLocaleDateString("vi-VN")}</li>
  <li><strong>Thời gian:</strong> ${workshop.time}</li>
  <li><strong>Giảng viên:</strong> ${workshop.instructor}</li>
</ul>

<p><strong>Thời gian đăng ký:</strong> ${new Date().toLocaleString("vi-VN")}</p>

<hr>
<p><em>Email này được gửi tự động từ hệ thống DevShare</em></p>
        `,
                type: "workshop_registration",
            })

            if (emailSuccess) {
                showNotification("Đăng ký thành công! Giảng viên đã được thông báo.", "success")
            }

            onSuccess()
            onClose()
        } catch (error) {
            showNotification("Có lỗi xảy ra. Vui lòng thử lại.", "error")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        })
    }

    return (
        <div className="registration-modal-overlay" onClick={onClose}>
            <div className="registration-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Đăng ký Workshop</h2>
                    <button className="close-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="workshop-info">
                    <h3>{workshop.title}</h3>
                    <div className="workshop-details">
            <span>
              <i className="fas fa-calendar"></i>
                {new Date(workshop.startDate).toLocaleDateString("vi-VN")}
            </span>
                        <span>
              <i className="fas fa-clock"></i>
                            {workshop.time}
            </span>
                        <span>
              <i className="fas fa-user"></i>
                            {workshop.instructor}
            </span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="registration-form">
                    <div className="form-section">
                        <h4>Thông tin cá nhân</h4>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Họ và tên *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Nhập họ và tên"
                                />
                            </div>
                            <div className="form-group">
                                <label>Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Nhập email"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Số điện thoại *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Nhập số điện thoại"
                                />
                            </div>
                            <div className="form-group">
                                <label>Mức độ kinh nghiệm *</label>
                                <select name="experience" value={formData.experience} onChange={handleChange} required>
                                    <option value="beginner">Người mới bắt đầu</option>
                                    <option value="intermediate">Trung cấp</option>
                                    <option value="advanced">Nâng cao</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <h4>Thông tin bổ sung</h4>
                        <div className="form-group">
                            <label>Động lực tham gia</label>
                            <textarea
                                name="motivation"
                                value={formData.motivation}
                                onChange={handleChange}
                                placeholder="Tại sao bạn muốn tham gia workshop này?"
                                rows={3}
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label>Kỳ vọng từ workshop</label>
                            <textarea
                                name="expectations"
                                value={formData.expectations}
                                onChange={handleChange}
                                placeholder="Bạn mong muốn học được gì từ workshop?"
                                rows={3}
                            ></textarea>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Liên hệ khẩn cấp</label>
                                <input
                                    type="text"
                                    name="emergencyContact"
                                    value={formData.emergencyContact}
                                    onChange={handleChange}
                                    placeholder="Tên và số điện thoại người thân"
                                />
                            </div>
                            <div className="form-group">
                                <label>Hạn chế ăn uống (nếu có)</label>
                                <input
                                    type="text"
                                    name="dietaryRestrictions"
                                    value={formData.dietaryRestrictions}
                                    onChange={handleChange}
                                    placeholder="VD: Chay, không ăn hải sản..."
                                />
                            </div>
                        </div>

                        <div className="form-group checkbox">
                            <label>
                                <input type="checkbox" name="hasLaptop" checked={formData.hasLaptop} onChange={handleChange} />
                                Tôi có laptop cá nhân để thực hành
                            </label>
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="form-group checkbox">
                            <label>
                                <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
                                Tôi đồng ý với{" "}
                                <a href="/terms" target="_blank" rel="noreferrer">
                                    điều khoản và điều kiện
                                </a>{" "}
                                của DevShare
                            </label>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" onClick={onClose} className="btn-secondary">
                            Hủy
                        </button>
                        <button type="submit" disabled={isSubmitting} className="btn-primary">
                            {isSubmitting ? (
                                <>
                                    <i className="fas fa-spinner fa-spin"></i>
                                    Đang xử lý...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-user-plus"></i>
                                    Đăng ký ngay
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WorkshopRegistrationModal
