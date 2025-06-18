"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { documentsData, getDocumentsByCategory, searchDocuments } from "../data/documentsData"
import "./DocumentsPage.css"
import { useParams } from 'react-router-dom';
const categories = [
    "Frontend Development",
    "Backend Development",
    "Mobile Development",
    "Data Science",
    "DevOps",
    "UI/UX Design",
    "Database",
    "Cloud Computing",
    "Cybersecurity",
    "Machine Learning",
    "Blockchain",
    "Others",
]

const DocumentsPage: React.FC = () => {
    const [searchParams] = useSearchParams()
    const [activeCategory, setActiveCategory] = useState("all")
    const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "")
    const [filteredDocuments, setFilteredDocuments] = useState(documentsData)
    const [sortBy, setSortBy] = useState("newest")
    const [currentPage, setCurrentPage] = useState(1)
    const documentsPerPage = 22 // Tăng từ 12 lên 16 để phù hợp với 4 cột
    const { id } = useParams();

    useEffect(() => {
        filterDocuments()
    }, [activeCategory, searchTerm, sortBy])

    useEffect(() => {
        const searchQuery = searchParams.get("search")
        if (searchQuery) {
            setSearchTerm(searchQuery)
        }
    }, [searchParams])

    const filterDocuments = () => {
        let filtered = documentsData

        // Filter by category
        if (activeCategory !== "all") {
            filtered = getDocumentsByCategory(activeCategory)
        }

        // Filter by search term
        if (searchTerm) {
            filtered = searchDocuments(searchTerm).filter(
                (doc) => activeCategory === "all" || doc.category === activeCategory,
            )
        }

        // Sort documents
        switch (sortBy) {
            case "newest":
                filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
                break
            case "oldest":
                filtered.sort((a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime())
                break
            case "popular":
                filtered.sort((a, b) => b.downloads - a.downloads)
                break
            case "rating":
                filtered.sort((a, b) => b.rating - a.rating)
                break
            case "title":
                filtered.sort((a, b) => a.title.localeCompare(b.title))
                break
        }

        setFilteredDocuments(filtered)
        setCurrentPage(1)
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        filterDocuments()
    }

    const getCategoryCount = (category: string) => {
        return category === "all" ? documentsData.length : getDocumentsByCategory(category).length
    }

    // Pagination
    const totalPages = Math.ceil(filteredDocuments.length / documentsPerPage)
    const startIndex = (currentPage - 1) * documentsPerPage
    const endIndex = startIndex + documentsPerPage
    const currentDocuments = filteredDocuments.slice(startIndex, endIndex)

    const goToPage = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="documents-page">
            <div className="documents-container">
                <div className="page-header">
                    <h1>Thư viện tài liệu <br/> <br/>
                            <h6>           Kho tài liệu miễn phí giúp bạn học lập trình hiệu quả và cập nhật xu hướng mới nhất.
                            </h6>
                    </h1>
                </div>


                <div className="documents-results">
                    <div className="results-header">
                        <div className="results-info">

                            {searchTerm && <span> cho "{searchTerm}"</span>}
                            {activeCategory !== "all" && <span> trong {activeCategory}</span>}
                        </div>
                    </div>



                    </div>
                    <div className="dm-sx">
                        


                    <div className="filter-group">
                        <label>Danh mục:</label>
                        <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
                            <option value="all">Tất cả ({getCategoryCount("all")})</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category} ({getCategoryCount(category)})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="filter-group">
                        <label>Sắp xếp:</label>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="newest">Mới nhất</option>
                            <option value="oldest">Cũ nhất</option>
                            <option value="popular">Phổ biến nhất</option>
                            <option value="rating">Đánh giá cao nhất</option>
                            <option value="title">Theo tên A-Z</option>
                        </select>
                    </div>
                        <form className="search-form" onSubmit={handleSearch}>
                            <div className="search-input-group">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm tài liệu..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button type="submit" className="search-button">
                                    Tìm kiếm
                                </button>
                            </div>
                        </form>


                    </div>
                    <div className="search-section">
                        
                    </div>

                    {currentDocuments.length > 0 ? (
                        <div className="documents-grid four-columns">
                            {currentDocuments.map((doc) => (
                                <Link key={doc.id} to={`/document/${doc.id}`} className="document-card">
                                    <div className="card-header">
                                        <div className={`file-icon ${doc.iconClass}`}>
                                            <i className={doc.icon}></i>
                                        </div>
                                        <div className="file-meta">
                                            <span className="file-type">{doc.fileType}</span>
                                            <span className="file-size">{doc.fileSize}</span>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <h3 className="document-title">{doc.title}</h3>
                                        <p className="document-description">{doc.description}</p>

                                        <div className="document-tags">
                                            {doc.tags.slice(0, 2).map((tag) => (
                                                <span key={tag} className="tag">
                          {tag}
                        </span>
                                            ))}
                                            {doc.tags.length > 2 && <span className="tag more">+{doc.tags.length - 2}</span>}
                                        </div>
                                    </div>

                                    <div className="card-footer">
                                        <div className="author-info">
                                            {/* <div className="author-details">
                                                
                                                <span className="author-name">{doc.author}
                                                    

                                                    <span className="publish-date">{new Date(doc.publishDate).toLocaleDateString("vi-VN")}</span>
                                                

                                                </span>
                                                
                                            </div> */}
                                                    <span className="author-info">
                                                         <span className="author-name">{doc.author}</span>

                                                        <img src={doc.authorAvatar || "/placeholder.svg"} alt={doc.author} />
                                                        
                                                    </span>
                                                    
                                                    
                                        </div>

                                     
                                    </div>

                                    <div className="card-overlay">
                                        <div className="overlay-content">
                                            <i className="fas fa-eye"></i>
                                            <span>Xem chi tiết</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <div className="no-results-icon">
                                <i className="fas fa-search"></i>
                            </div>
                            <h3>Không tìm thấy tài liệu</h3>
                            <p>Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc để tìm thấy tài liệu phù hợp.</p>
                            <button
                                className="btn-primary"
                                onClick={() => {
                                    setSearchTerm("")
                                    setActiveCategory("all")
                                }}
                            >
                                Xóa bộ lọc
                            </button>
                        </div>
                    )}

                    {totalPages > 1 && (
                        <div className="pagination">
                            <button className="pagination-btn" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                                <i className="fas fa-chevron-left"></i>
                                Trước
                            </button>

                            <div className="pagination-numbers">
                                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                    let page: number;                                    if (totalPages <= 5) {
                                        page = i + 1
                                    } else if (currentPage <= 3) {
                                        page = i + 1
                                    } else if (currentPage >= totalPages - 2) {
                                        page = totalPages - 4 + i
                                    } else {
                                        page = currentPage - 2 + i
                                    }

                                    return (
                                        <button
                                            key={page}
                                            className={`pagination-number ${currentPage === page ? "active" : ""}`}
                                            onClick={() => goToPage(page)}
                                        >
                                            {page}
                                        </button>
                                    )
                                })}
                            </div>

                            <button
                                className="pagination-btn"
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Sau
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    )}
                </div>
            </div>

    )
}

export default DocumentsPage
