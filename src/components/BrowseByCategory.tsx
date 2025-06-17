
import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { getDocumentsByCategory } from "../data/documentsData"
import "./BrowseByCategory.css"

interface Category {
    name: string
    icon: string
    description: string
    color: string // ✅ thêm dòng này
}

const categories = [
    {
        name: "Frontend Development",
        icon: "fas fa-laptop-code",
        description: "React, Vue, Angular và các công nghệ frontend",
        color: "#d3d5d9"

    },
    {
        name: "Backend Development",
        icon: "fas fa-server",
        description: "Node.js, Python, Java và server-side development",
        color: "#d3d5d9"
    },
    {
        name: "Mobile Development",
        icon: "fas fa-mobile-alt",
        description: "React Native, Flutter, iOS và Android",
        color: "#d3d5d9"
    },
    {
        name: "Data Science",
        icon: "fas fa-chart-bar",
        description: "Python, R, Machine Learning và Analytics",
        color: "#d3d5d9"
    },
    {
        name: "DevOps",
        icon: "fas fa-cogs",
        description: "Docker, Kubernetes, CI/CD và Infrastructure",
        color: "#d3d5d9"
    },
    {
        name: "UI/UX Design",
        icon: "fas fa-paint-brush",
        description: "Design Systems, Figma và User Experience",
        color: "#d3d5d9"
    },
    {
        name: "Database",
        icon: "fas fa-database",
        description: "SQL, NoSQL, MongoDB và Database Design",
        color: "#d3d5d9"
    },
    {
        name: "Cloud Computing",
        icon: "fas fa-cloud",
        description: "AWS, Azure, GCP và Cloud Architecture",
        color: "#d3d5d9"
    },
    {
        name: "Cybersecurity",
        icon: "fas fa-shield-alt",
        description: "Security, Penetration Testing và Ethical Hacking",
        color: "#d3d5d9"
    },
    {
        name: "Machine Learning",
        icon: "fas fa-robot",
        description: "AI, Deep Learning và Neural Networks",
        color: "#d3d5d9"
    },
    {
        name: "Blockchain",
        icon: "fas fa-link",
        description: "Cryptocurrency, Smart Contracts và Web3",
        color: "#d3d5d9"
    },
    {
        name: "Others",
        icon: "fas fa-folder",
        description: "Các chủ đề khác và tài liệu tổng hợp",
        color: "#d3d5d9"
    },
]

const BrowseByCategory: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("Frontend Development")
    const [filteredDocuments, setFilteredDocuments] = useState(getDocumentsByCategory("Frontend Development"))

    const handleCategoryChange = (categoryName: string) => {
        setActiveCategory(categoryName)
        const filtered = getDocumentsByCategory(categoryName)
        setFilteredDocuments(filtered)
    }

    const getCategoryStats = (categoryName: string) => {
        return getDocumentsByCategory(categoryName).length
    }

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

// Chia tài liệu theo trang
    const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);
    const paginatedDocs = filteredDocuments.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );




    return (
        <div className="browse-category-section">
            <div className="category-container">
                <div className="category-header">
                    <h2 className="category-main-title">BROWSE BY CATEGORY</h2>
                    <p className="category-subtitle">Khám phá tài liệu theo từng lĩnh vực chuyên môn</p>
                </div>

                <div className="category-grid">
                    {categories.map((category) => {
                        const docCount = getCategoryStats(category.name)
                        const isActive = activeCategory === category.name

                        return (
                            <div
                                key={category.name}
                                className={`category-card ${isActive ? "active" : ""}`}
                                onClick={() => handleCategoryChange(category.name)}
                                style={{ "--category-color": category.color } as React.CSSProperties}
                            >
                                <div className="category-icon">
                                    <i className={category.icon}></i>
                                </div>
                                <div className="category-info">
                                    <h3 className="category-name">{category.name}</h3>
                                    <p className="category-desc">{category.description}</p>
                                    <div className="category-stats">
                                        <span className="doc-count">{docCount} tài liệu</span>
                                    </div>
                                </div>
                                <div className="category-arrow">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="documents-section">
                    <div className="documents-header">
                        <h3 className="documents-title">
                            {activeCategory}
                            <span className="documents-count">({filteredDocuments.length} tài liệu)</span>
                        </h3>
                        <Link to="/documents" className="view-all-docs">
                            Xem tất cả
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>

                    <div className="documents-grid">
                        {paginatedDocs.map((doc) => (
                            <Link key={doc.id} to={`/document/${doc.id}`} className="document-card">
                                <div className="document-header">
                                    <div className={`file-icon ${doc.iconClass}`}>
                                        <i className={doc.icon}></i>
                                    </div>
                                    <div className="document-meta">
                                        <span className="file-type">{doc.fileType}</span>
                                        <span className="file-size">{doc.fileSize}</span>
                                    </div>
                                </div>

                                <div className="document-content">
                                    <h4 className="document-title">{doc.title}</h4>
                                    <p className="document-description">{doc.description}</p>

                                    <div className="document-tags">
                                        {doc.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className="tag">
                        {tag}
                    </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="document-footer">
                                    <img
                                        src={doc.authorAvatar || "/placeholder.svg"}
                                        alt={doc.author}
                                        className="author-avatar"
                                    />
                                    <div className="author-name">{doc.author}</div>

                                    <div className="document-stats">
                                        <div className="stat-item">
                                            <i className="fas fa-download"></i>
                                            <span>{doc.downloads}</span>
                                        </div>
                                        <div className="stat-item">
                                            <i className="fas fa-star"></i>
                                            <span>{doc.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}

                    </div>
                    {totalPages > 1 && (
                        <div className="pagination sticky-bottom">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    className={`pagination-number ${currentPage === i + 1 ? "active" : ""}`}
                                    onClick={() => setCurrentPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}

                    {filteredDocuments.length === 0 && (
                        <div className="no-documents">
                            <i className="fas fa-folder-open"></i>
                            <h4>Chưa có tài liệu</h4>
                            <p>Hiện tại chưa có tài liệu nào trong danh mục này.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BrowseByCategory
