"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { newsData, getNewsByCategory } from "../data/newsData"
import "./FeaturedNews.css"

const FeaturedNews: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState("all")
    const [visibleNews, setVisibleNews] = useState(newsData)
    const navigate = useNavigate()

    // Thêm state và useEffect cho auto-rotation
    const [currentMainIndex, setCurrentMainIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (visibleNews.length > 1) {
                setCurrentMainIndex((prev) => (prev + 1) % visibleNews.length)
            }
        }, 5000) // Thay đổi mỗi 5 giây

        return () => clearInterval(interval)
    }, [visibleNews.length])

    useEffect(() => {
        filterNews(activeFilter)
    }, [activeFilter])

    const filterNews = (category: string) => {
        if (category === "all") {
            setVisibleNews(newsData)
        } else {
            setVisibleNews(getNewsByCategory(category))
        }
    }

    const handleNewsClick = (newsId: number) => {
        navigate(`/news/${newsId}`)
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("vi-VN", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    // Cập nhật mainNews và sideNews
    const mainNews = visibleNews[currentMainIndex]
    const sideNews = visibleNews.filter((_, index) => index !== currentMainIndex).slice(0, 4)

    return (
        <section className="featured-news-mit">
            <div className="container">
                <div className="news-header">
                    <h2>TIN TỨC NỔI BẬT</h2>
                    <div className="news-filters">
                        <button
                            className={`filter-bt ${activeFilter === "all" ? "active" : ""}`}
                            onClick={() => setActiveFilter("all")}
                        >
                            Tất cả
                        </button>
                        <button
                            className={`filter-bt ${activeFilter === "featured" ? "active" : ""}`}
                            onClick={() => setActiveFilter("featured")}
                        >
                            Nổi bật
                        </button>
                        <button
                            className={`filter-bt ${activeFilter === "new" ? "active" : ""}`}
                            onClick={() => setActiveFilter("new")}
                        >
                            Mới
                        </button>
                        <button
                            className={`filter-bt ${activeFilter === "trending" ? "active" : ""}`}
                            onClick={() => setActiveFilter("trending")}
                        >
                            Xu hướng
                        </button>
                    </div>
                    <Link to="/news" className="view-all-link">
                        Xem tất cả
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>

                <div className="news-content">
                    {mainNews && (
                        <div className="main-news" onClick={() => handleNewsClick(mainNews.id)}>
                            <div className="main-news-image">
                                <img src={mainNews.image || "/placeholder.svg?height=400&width=600"} alt={mainNews.title} />
                                <div className="news-overlay"></div>
                                <div className="news-content-overlay">
                                    <div className="news-date">{formatDate(mainNews.publishDate)}</div>
                                    <h3 className="news-title">{mainNews.title}</h3>
                                    <p className="news-description">
                                        {mainNews.description.length > 150
                                            ? `${mainNews.description.substring(0, 150)}...`
                                            : mainNews.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="side-news">
                        {sideNews.map((news) => (
                            <div key={news.id} className="side-news-item" onClick={() => handleNewsClick(news.id)}>
                                <div className="side-news-image">
                                    <img src={news.image || "/placeholder.svg?height=120&width=200"} alt={news.title} />
                                </div>
                                <div className="side-news-content">
                                    <h4 className="side-news-title">
                                        {news.title.length > 60 ? `${news.title.substring(0, 60)}...` : news.title}
                                    </h4>
                                    <div className="side-news-date">{formatDate(news.publishDate)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedNews
