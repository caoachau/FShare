"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import "./Hero.css"

const Hero: React.FC = () => {
    const navigate = useNavigate()
    const { user } = useAuth()


    const handleGetStarted = () => {
        if (user) {
            navigate("/documents")
        } else {
            navigate("/get-started")
        }
    }

    const handleJoinTeacher = () => {
        navigate("/teacher")
    }



    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span className="badge-text">
                        <i className="fa-solid fa-graduation-cap"></i>                                FROM LEARNER TO LEADER</span>
                        </div>

                        <h1 className="hero-title">
                            <span className="title-line">TECH SKIILS ARE WHAT YOU LEARN.</span>
                            <span className="title-line highlight">LEARN THEM HERE.</span>
                        </h1>

                        <p className="hero-description">
                            Tham gia hệ sinh thái học tập năng động với hỗ trợ 24/7,

                            môi trường chia sẻ thông tin tương tác và cập nhật thường xuyên từ cộng đồng

                            để luôn dẫn đầu trong công nghệ.
                        </p>


                        <div className="hero-actions">
                            <button className="btn-primary" onClick={handleGetStarted}>
                                <span>Khám phá ngay</span>
                                <i className="fas fa-rocket"></i>
                            </button>
                            <button className="btn-secondary" onClick={handleJoinTeacher}>
                                <span>Tham gia với giáo viên</span>
                                <i className="fas fa-play"></i>
                            </button>
                        </div>


                    </div>

                    <div className="hero-visual">
                        <div className="hero-image-container">
                            <div className="main-image">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=faces"
                                    alt="Developer working on code sharing platform"
                                    className="hero-img"
                                />
                                <div className="image-overlay"></div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero
