"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { getDocumentById } from "../data/documentsData"
import type { Document } from "../data/documentsData"
import "./DocumentDetailPage.css"

const DocumentDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [document, setDocument] = useState<Document | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (id) {
            const doc = getDocumentById(Number.parseInt(id))
            setDocument(doc || null)
            setLoading(false)
        }
    }, [id])

    const handleDownload = () => {
        if (document?.fileUrl) {
            // Tạo link download
            const link = window.document.createElement("a")
            link.href = document.fileUrl
            link.download = `${document.title}.${document.fileType.toLowerCase()}`
            link.target = "_blank"
            window.document.body.appendChild(link)
            link.click()
            window.document.body.removeChild(link)

            // Cập nhật số lượt download (trong thực tế sẽ gọi API)
            console.log(`Downloaded: ${document.title}`)
        }
    }

    if (loading) {
        return (
            <div className="document-detail-loading">
                <div className="loading-spinner">
                    <i className="fas fa-spinner fa-spin"></i>
                    <p>Đang tải tài liệu...</p>
                </div>
            </div>
        )
    }

    if (!document) {
        return (
            <div className="document-not-found">
                <div className="not-found-content">
                    <i className="fas fa-file-times"></i>
                    <h2>Không tìm thấy tài liệu</h2>
                    <p>Tài liệu bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                    <Link to="/documents" className="btn-primary">
                        <i className="fas fa-arrow-left"></i>
                        Quay lại thư viện
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="document-detail-page">
            <div className="document-detail-container">
                {/* Header */}
                <div className="document-header">
                    <button onClick={() => navigate(-1)} className="back-button">
                        <i className="fas fa-arrow-left"></i>
                        Quay lại
                    </button>

                    <div className="document-breadcrumb">
                        <Link to="/">Trang chủ</Link>
                        <span>/</span>
                        <Link to="/documents">Thư viện</Link>
                        <span>/</span>
                        <span>{document.category}</span>
                        <span>/</span>
                        <span>{document.title}</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="document-main">
                    <div className="document-info">
                        <div className="document-meta">
                            <div className={`file-icon-large ${document.iconClass}`}>
                                <i className={document.icon}></i>
                            </div>

                            <div className="document-details">
                                <h1 className="document-title">{document.title}</h1>
                                <p className="document-description">{document.description}</p>

                                <div className="document-stats-row">
                                    <div className="stat-item">
                                        <i className="fas fa-download"></i>
                                        <span>{document.downloads.toLocaleString()} lượt tải</span>
                                    </div>
                                    <div className="stat-item">
                                        <i className="fas fa-star"></i>
                                        <span>{document.rating}/5</span>
                                    </div>
                                    <div className="stat-item">
                                        <i className="fas fa-file"></i>
                                        <span>{document.pages} trang</span>
                                    </div>
                                    <div className="stat-item">
                                        <i className="fas fa-hdd"></i>
                                        <span>{document.fileSize}</span>
                                    </div>
                                </div>

                                <div className="document-tags">
                                    {document.tags.map((tag) => (
                                        <span key={tag} className="tag">
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Author Info */}
                        <div className="author-section">
                            <div className="author-info">
                                <img src={document.authorAvatar || "/placeholder.svg"} alt={document.author} />
                                <div className="author-details">
                                    <h3>{document.author}</h3>
                                    <p>Tác giả</p>
                                    <div className="author-meta">
                                        <span>Xuất bản: {new Date(document.publishDate).toLocaleDateString("vi-VN")}</span>
                                        <span>Cập nhật: {new Date(document.lastUpdated).toLocaleDateString("vi-VN")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Download Section */}
                        <div className="download-section">
                            <button onClick={handleDownload} className="download-btn">
                                <i className="fas fa-download"></i>
                                Tải xuống ({document.fileType})
                            </button>

                            <div className="download-info">
                                <p>
                                    <i className="fas fa-info-circle"></i>
                                    File sẽ được tải xuống dưới định dạng {document.fileType}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content Preview */}
                    <div className="document-content">
                        <h2>Nội dung tài liệu</h2>
                        <div className="content-preview" dangerouslySetInnerHTML={{ __html: document.content }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocumentDetailPage
