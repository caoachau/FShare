import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { newsData, getNewsByCategory, searchNews } from "../data/newsData"
import NewsModal from "../components/NewsModal"
import "./AllNewsPage.css"

const NewsPage: React.FC = () => {
    const navigate = useNavigate()
    const newsPerPage = 10000

    const [activeCategory, setActiveCategory] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredNews, setFilteredNews] = useState(newsData)
    const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const categories = [
        { key: "all", label: "Tất cả", count: newsData.length },
        { key: "featured", label: "Nổi bật", count: getNewsByCategory("featured").length },
        { key: "new", label: "Mới nhất", count: getNewsByCategory("new").length },
        { key: "trending", label: "Thịnh hành", count: getNewsByCategory("trending").length },
        { key: "popular", label: "Phổ biến", count: getNewsByCategory("popular").length },
    ]

    useEffect(() => {
        filterNews()
    }, [activeCategory, searchTerm])

    const filterNews = () => {
        let filtered = newsData

        if (activeCategory !== "all") {
            filtered = getNewsByCategory(activeCategory)
        }

        if (searchTerm) {
            filtered = searchNews(searchTerm).filter(
                (news) => activeCategory === "all" || news.category === activeCategory
            )
        }

        setFilteredNews(filtered)
        setCurrentPage(1)
    }

    const handleNewsClick = (newsId: number) => {
        navigate(`/news/${newsId}`)
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        filterNews()
    }

    const totalPages = Math.ceil(filteredNews.length / newsPerPage)
    const startIndex = (currentPage - 1) * newsPerPage
    const endIndex = startIndex + newsPerPage
    const currentNews = filteredNews.slice(startIndex, endIndex)

    const goToPage = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="all-news-page">
            <div className="news-container1">
                <div className="page-header">
                    <h1>Tin tức & Blog</h1>
                     <div >
                    Cập nhật những tin tức mới nhất về công nghệ và lập trình
                </div>

                </div>
                <div className="news-results">
                    
                    <div className="category-filters">
                        {categories.map((category) => (
                            <button
                                key={category.key}
                                className={`filter-btn ${activeCategory === category.key ? "active" : ""}`}
                                onClick={() => setActiveCategory(category.key)}
                            >
                                {category.label}
                                <span className="count">({category.count})</span>
                            </button>
                        ))}
                    </div>
                
                            <div className="search-section">
                                <form className="search-form" onSubmit={handleSearch}>
                                    <input
                                        type="text"
                                        placeholder="🔎  Tìm kiếm tin tức...      "
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </form>
                                
                            </div>  
                   
                    <div className="results-info">
                        <span>Hiển thị {filteredNews.length} bài viết</span>
                        {searchTerm && <span> cho "{searchTerm}"</span>}
                    </div>

                    {currentNews.length > 0 ? (
                        <div className="news-grid">
                            {currentNews.map((news) => (
                                <article key={news.id} className="news-card" onClick={() => handleNewsClick(news.id)}>
                                    <div className="news-image">
                                        <img src={news.image || "/placeholder.svg"} alt={news.title} />
                                        <div className={`news-tag ${news.category}`}>{news.tag}</div>
                                    </div>

                                    <div className="news-content">
                                        <h3 className="news-title">{news.title}</h3>
                                        <p className="news-description">{news.description}</p>

                                            <div className="author-info">
                                          
                                                <div className="author-details">
                                                    <span className="author-name">{news.author}
                                                    </span>
                                                    <span className="publish-datee">
                                                        
                                                        {new Date(news.publishDate).toLocaleDateString("vi-VN")}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="author-avatar">
                                                <img src={news.authorAvatar || "/default-avatar.png"} alt={news.author} />
                                            </div>
                                            <div className="news-stats">
                                                
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
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <i className="fas fa-search"></i>
                            <h3>Không tìm thấy bài viết</h3>
                            <p>Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc để tìm thấy bài viết phù hợp.</p>
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
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        className={`pagination-number ${currentPage === page ? "active" : ""}`}
                                        onClick={() => goToPage(page)}
                                    >
                                        {page}
                                    </button>
                                ))}
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

            <NewsModal newsId={selectedNewsId} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default NewsPage
