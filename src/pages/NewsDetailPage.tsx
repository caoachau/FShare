"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { newsData } from "../data/newsData"
import "./NewsDetailPage.css"

const NewsDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [news, setNews] = useState<any>(null)
    const [relatedNews, setRelatedNews] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (id) {
            const newsItem = newsData.find((item) => item.id === Number.parseInt(id))
            if (newsItem) {
                setNews(newsItem)

                // Get related news
                const related = newsData
                    .filter((item) => item.id !== newsItem.id && item.category === newsItem.category)
                    .slice(0, 3)
                setRelatedNews(related)
            } else {
                navigate("/news")
            }
            setIsLoading(false)
        }
    }, [id, navigate])

    if (isLoading) {
        return (
            <div className="news-detail-page">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Đang tải bài viết...</p>
                </div>
            </div>
        )
    }

    if (!news) {
        return (
            <div className="news-detail-page">
                <div className="error-container">
                    <h2>Không tìm thấy bài viết</h2>
                    <button onClick={() => navigate("/news")} className="btn-primary">
                        Quay lại tin tức
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="news-detail-page">
            <div className="news-container">
                <div className="breadcrumb">
          <span onClick={() => navigate("/")} className="breadcrumb-link">
            Trang chủ
          </span>
                    <i className="fas fa-chevron-right"></i>
                    <span onClick={() => navigate("/news")} className="breadcrumb-link">
            Tin tức & Blog
          </span>
                    <i className="fas fa-chevron-right"></i>
                    <span className="breadcrumb-current">{news.title}</span>
                </div>

                <article className="news-article">
                    <header className="article-header">
                        <div className={`news-tag ${news.category}`}>{news.tag}</div>
                        <h1 className="article-title">{news.title}</h1>
                        <p className="article-description">{news.description}</p>

                        <div className="article-meta">
                            <div className="author-info">
                                <img src={news.authorAvatar || "/placeholder.svg"} alt={news.author} />
                                <div className="author-details">
                                    <span className="author-name">{news.author}</span>
                                    <span className="publish-date">{new Date(news.publishDate).toLocaleDateString("vi-VN")}</span>
                                </div>
                            </div>

                            <div className="article-stats">
                <span className="views">
                  <i className="fas fa-eye"></i>
                    {news.views.toLocaleString()}
                </span>
                                <span className="likes">
                  <i className="fas fa-heart"></i>
                                    {news.likes}
                </span>
                                <span className="read-time">
                  <i className="fas fa-clock"></i>
                                    {news.readTime}
                </span>
                            </div>
                        </div>
                    </header>

                    <div className="article-image">
                        <img src={news.image || "/placeholder.svg"} alt={news.title} />
                    </div>

                    <div className="article-content">
                        <div dangerouslySetInnerHTML={{ __html: news.content || generateNewsContent(news) }} />
                    </div>

                    {news.tags && (
                        <div className="article-tags">
                            <h4>Tags:</h4>
                            <div className="tags-list">
                                {news.tags.map((tag: string) => (
                                    <span key={tag} className="tag" onClick={() => navigate(`/news?search=${tag}`)}>
                    #{tag}
                  </span>
                                ))}
                            </div>
                        </div>
                    )}
                </article>

                {relatedNews.length > 0 && (
                    <section className="related-news">
                        <h3>Bài viết liên quan</h3>
                        <div className="related-grid">
                            {relatedNews.map((relatedItem) => (
                                <div key={relatedItem.id} className="related-card" onClick={() => navigate(`/news/${relatedItem.id}`)}>
                                    <div className="related-image">
                                        <img src={relatedItem.image || "/placeholder.svg"} alt={relatedItem.title} />
                                        <div className={`related-tag ${relatedItem.category}`}>{relatedItem.tag}</div>
                                    </div>
                                    <div className="related-content">
                                        <h4>{relatedItem.title}</h4>
                                        <p>{relatedItem.description}</p>
                                        <div className="related-meta">
                                            <span>{relatedItem.author}</span>
                                            <span>{new Date(relatedItem.publishDate).toLocaleDateString("vi-VN")}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}

const generateNewsContent = (news: any) => {
    return `
    <h2>Giới thiệu</h2>
    <p>${news.description}</p>
    
    <h3>Nội dung chính</h3>
    <p>Trong bài viết này, chúng ta sẽ khám phá chi tiết về ${news.title.toLowerCase()}. Đây là một chủ đề quan trọng trong lĩnh vực công nghệ thông tin và lập trình.</p>
    
    <h3>Tại sao điều này quan trọng?</h3>
    <p>Hiểu biết về ${news.title.toLowerCase()} sẽ giúp bạn:</p>
    <ul>
      <li>Nâng cao kỹ năng lập trình</li>
      <li>Cập nhật xu hướng công nghệ mới</li>
      <li>Áp dụng kiến thức vào dự án thực tế</li>
      <li>Phát triển sự nghiệp trong ngành IT</li>
    </ul>
    
    <h3>Kết luận</h3>
    <p>Hy vọng bài viết này đã cung cấp cho bạn những thông tin hữu ích về ${news.title.toLowerCase()}. Hãy tiếp tục theo dõi DevShare để cập nhật những tin tức và kiến thức mới nhất!</p>
  `
}

export default NewsDetailPage
