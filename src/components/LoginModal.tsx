"use client"

import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import "./LoginModal.css"

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
    isSignUp: boolean
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, isSignUp: initialIsSignUp }) => {
    const [isSignUp, setIsSignUp] = useState(initialIsSignUp)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "student" as "student" | "teacher",
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const { login, register, isLoading } = useAuth()

    React.useEffect(() => {
        setIsSignUp(initialIsSignUp)
    }, [initialIsSignUp])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }))
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (isSignUp && !formData.name.trim()) {
            newErrors.name = "Vui lòng nhập họ tên"
        }

        if (!formData.email.trim()) {
            newErrors.email = "Vui lòng nhập email"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email không hợp lệ"
        }

        if (!formData.password) {
            newErrors.password = "Vui lòng nhập mật khẩu"
        } else if (formData.password.length < 6) {
            newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự"
        }

        if (isSignUp && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Mật khẩu xác nhận không khớp"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        try {
            let success = false

            if (isSignUp) {
                success = await register(formData.name, formData.email, formData.password, formData.role)
            } else {
                success = await login(formData.email, formData.password)
            }

            if (success) {
                onClose()
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    role: "student",
                })
            } else {
                setErrors({ general: "Đăng nhập thất bại. Vui lòng thử lại." })
            }
        } catch (error) {
            setErrors({ general: "Có lỗi xảy ra. Vui lòng thử lại." })
        }
    }

    const toggleMode = () => {
        setIsSignUp(!isSignUp)
        setErrors({})
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "student",
        })
    }

    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="modal-header">
                    <h2>{isSignUp ? "Đăng ký tài khoản" : "Đăng nhập"}</h2><br/>
                    <p>{isSignUp ? "Tạo tài khoản mới để truy cập DevShare" : "Chào mừng bạn quay trở lại!"}</p>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    {errors.general && <div className="error-message general-error">{errors.general}</div>}

                    {isSignUp && (
                        <div className="form-group">
                            <label htmlFor="name">Họ tên *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? "error" : ""}
                                placeholder="Nhập họ tên của bạn"
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? "error" : ""}
                            placeholder="Nhập email của bạn"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu *</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.password ? "error" : ""}
                            placeholder="Nhập mật khẩu"
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    {isSignUp && (
                        <>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Xác nhận mật khẩu *</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={errors.confirmPassword ? "error" : ""}
                                    placeholder="Nhập lại mật khẩu"
                                />
                                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="role">Vai trò</label>
                                <select id="role" name="role" value={formData.role} onChange={handleChange}>
                                    <option value="student">Học viên</option>
                                    <option value="teacher">Giáo viên</option>
                                </select>
                            </div>
                        </>
                    )}

                    <button type="submit" className="submit-btnn" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <i className="fas fa-spinner fa-spin"></i>
                                {isSignUp ? "Đang đăng ký..." : "Đang đăng nhập..."}
                            </>
                        ) : isSignUp ? (
                            "Đăng ký"
                        ) : (
                            "Đăng nhập"
                        )}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        {isSignUp ? "Đã có tài khoản?" : "Chưa có tài khoản?"}
                        <button type="button" onClick={toggleMode} className="toggle-btn">
                            {isSignUp ? "Đăng nhập ngay" : "Đăng ký ngay"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
