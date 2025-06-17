"use client"

import type React from "react"
import { getNewsById, getRelatedNews } from "../data/newsData"
import "./NewsModal.css"

interface NewsModalProps {
    newsId: number | null
    isOpen: boolean
    onClose: () => void
}

const NewsModal: React.FC<NewsModalProps> = ({ newsId, isOpen, onClose }) => {
    if (!isOpen || !newsId) return null

    const news = getNewsById(newsId)
    const relatedNews = getRelatedNews(newsId)

    if (!news) return null

    return (
        <div className="news-modal-overlay" onClick={onClose}>
            <div className="news-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="news-modal-close" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="news-modal-header">
                    <img src={news.image || "/placeholder.svg"} alt={news.title} className="news-modal-image" />
                    <div className={`news-modal-tag ${news.category}`}>{news.tag}</div>
                </div>

                <div className="news-modal-body">
                    <h1 className="news-modal-title">{news.title}</h1>

                    <div className="news-modal-meta">
                        <div className="news-author">
                            <img src={news.authorAvatar || "/placeholder.svg"} alt={news.author} className="author-avatar" />
                            <div className="author-info">
                                <span className="author-name">{news.author}</span>
                                <span className="publish-date">{new Date(news.publishDate).toLocaleDateString("vi-VN")}</span>
                            </div>
                        </div>

                        <div className="news-stats">
                            <div className="news-stat">
                                <i className="fas fa-eye"></i>
                                <span>{news.views.toLocaleString()} lượt xem</span>
                            </div>
                            <div className="news-stat">
                                <i className="fas fa-heart"></i>
                                <span>{news.likes} lượt thích</span>
                            </div>
                            <div className="news-stat">
                                <i className="fas fa-clock"></i>
                                <span>{news.readTime}</span>
                            </div>
                        </div>
                    </div>

                    <div className="news-content" dangerouslySetInnerHTML={{ __html: news.content }}></div>

                    {news.tags && (
                        <div className="news-tags">
                            {news.tags.map((tag) => (
                                <span key={tag} className="news-tag">
                  #{tag}
                </span>
                            ))}
                        </div>
                    )}

                    {relatedNews.length > 0 && (
                        <div className="related-news">
                            <h3>Bài viết liên quan</h3>
                            <div className="related-news-grid">
                                {relatedNews.map((relatedItem) => (
                                    <div key={relatedItem.id} className="related-news-card">
                                        <div className="related-news-image">
                                            <img src={relatedItem.image || "/placeholder.svg"} alt={relatedItem.title} />
                                        </div>
                                        <div className="related-news-content">
                                            <h4 className="related-news-title">{relatedItem.title}</h4>
                                            <span className="related-news-date">
                        {new Date(relatedItem.publishDate).toLocaleDateString("vi-VN")}
                      </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NewsModal
