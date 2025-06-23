"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { documentsData } from "../data/documentsData"
import "./UploadPage.css"

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

const UploadPage: React.FC = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [files, setFiles] = useState<File[]>([])//file dc chon
    const [uploading, setUploading] = useState(false)//trang thai upload
    const [uploadProgress, setUploadProgress] = useState(0)//tiến độ upload
    const [documentInfo, setDocumentInfo] = useState({
        title: "",
        description: "",
        category: "",
        tags: "",
        visibility: "public" as "public" | "private" | "community",
    })
    const fileInputRef = useRef<HTMLInputElement>(null)
    // Thêm state cho tab selection
    const [activeTab, setActiveTab] = useState("document")// tab hiện tại

    useEffect(() => { // Kiểm tra nếu người dùng không đăng nhập, chuyển hướng về trang chủ
        if (!user) {
            navigate("/")
        }
    }, [user, navigate])

    const handleDragOver = (e: React.DragEvent) => { // Ngăn chặn hành vi mặc định khi kéo thả
        e.preventDefault()
        e.stopPropagation()
    }

    const handleDrop = (e: React.DragEvent) => { // Xử lý sự kiện thả file tu o drag and drop
        e.preventDefault()
        e.stopPropagation()
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFiles(Array.from(e.dataTransfer.files))
        }
    }

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Xử lý sự kiện khi chọn file từ input
        if (e.target.files && e.target.files.length > 0) {
            handleFiles(Array.from(e.target.files))
        }
    }

    const handleFiles = (newFiles: File[]) => { // Xử lý danh sách file được chọn hoặc kéo thả
        // Kiểm tra kích thước file (giới hạn 50MB)
        const validFiles = newFiles.filter((file) => {
            const isValidSize = file.size <= 50 * 1024 * 1024
            if (!isValidSize) {
                alert(`File "${file.name}" vượt quá giới hạn 50MB.`)
            }
            return isValidSize
        })

        // Kiểm tra loại file
        const allowedTypes = [ 
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/vnd.ms-powerpoint",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "text/plain",
            "text/markdown",
        ] 

        const filteredFiles = validFiles.filter((file) => {
            const isValidType = allowedTypes.includes(file.type)
            if (!isValidType) {
                alert(`File "${file.name}" không được hỗ trợ. Vui lòng chọn file PDF, DOC, DOCX, PPT, PPTX, TXT hoặc MD.`)
            }
            return isValidType
        })

        setFiles((prev) => [...prev, ...filteredFiles])
    }

    const handleUpload = async () => { // Xử lý upload tài liệu
        if (files.length === 0) {
            alert("Vui lòng chọn ít nhất một file để upload")
            return
        }

        if (!documentInfo.title || !documentInfo.category) { // Kiểm tra thông tin tài liệu
            alert("Vui lòng điền đầy đủ thông tin tài liệu")
            return
        }

        setUploading(true)
        setUploadProgress(0)

        // Simulate upload progress
        const interval = setInterval(() => { 
            setUploadProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setUploading(false)

                    // Create new document object
                    const newDocument = { 
                        id: Date.now(),
                        title: documentInfo.title,
                        description: documentInfo.description,
                        category: documentInfo.category || "Others",
                        tags: documentInfo.tags
                            .split(",")
                            .map((tag) => tag.trim())
                            .filter((tag) => tag),
                        author: user?.name || "Anonymous",
                        authorAvatar: user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=667eea&color=fff`,
                        authorId: user?.id || "anonymous",
                        fileType: getFileType(files[0].name),
                        fileSize: formatFileSize(files[0].size),
                        icon: getFileIcon(files[0].name),
                        iconClass: getFileIconClass(files[0].name),
                        downloads: 0,
                        rating: 0,
                        publishDate: new Date().toISOString().split("T")[0],
                        lastUpdated: new Date().toISOString().split("T")[0],
                        pages: Math.floor(Math.random() * 50) + 10, // Random pages for demo
                        content: generateSampleContent(documentInfo.title, documentInfo.description),
                        visibility: documentInfo.visibility,
                    }

                    // Add to documents data (in real app, this would be an API call)
                    documentsData.push(newDocument)

                    // lưu tài liệu vào localStorage để mô phỏng lưu trữ
                    // (in real app, this would be a database)
                    const uploadedFiles = JSON.parse(localStorage.getItem("uploadedFiles") || "[]") // Get existing uploaded files
                    uploadedFiles.push(newDocument)
                    localStorage.setItem("uploadedFiles", JSON.stringify(uploadedFiles)) 

                    alert("Upload thành công! Tài liệu của bạn đã được thêm vào thư viện.")

                    // Reset form
                    setFiles([]) 
                    setDocumentInfo({ 
                        title: "",
                        description: "",
                        category: "",
                        tags: "",
                        visibility: "public",
                    })

                    // Navigate to documents page
                    navigate("/documents") // up load xong quay ve trang all documents page

                    return 100
                }
                return prev + 5
            })
        }, 200)
    }

    const removeFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index)) // Xóa file khỏi danh sách
    }

    const formatFileSize = (bytes: number): string => { // Định dạng kích thước file
        if (bytes < 1024) return `${bytes} B` // Bytes
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB` // Kilobytes
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    }

    const getFileType = (filename: string): string => { // Xác định loại file dựa trên phần mở rộng
        const extension = filename.split(".").pop()?.toLowerCase()
        switch (extension) {
            case "pdf":
                return "PDF"
            case "doc":
            case "docx":
                return "DOC"
            case "ppt":
            case "pptx":
                return "PPT"
            case "txt":
                return "TXT"
            case "md":
                return "MD"
            default:
                return "FILE"
        }
    }

    const getFileIcon = (filename: string): string => {
        const extension = filename.split(".").pop()?.toLowerCase()
        switch (extension) {
            case "pdf":
                return "fas fa-file-pdf"
            case "doc":
            case "docx":
                return "fas fa-file-word"
            case "ppt":
            case "pptx":
                return "fas fa-file-powerpoint"
            case "txt":
                return "fas fa-file-alt"
            case "md":
                return "fas fa-file-code"
            default:
                return "fas fa-file"
        }
    }

    const getFileIconClass = (filename: string): string => {
        const extension = filename.split(".").pop()?.toLowerCase()
        switch (extension) {
            case "pdf":
                return "pdf"
            case "doc":
            case "docx":
                return "doc"
            case "ppt":
            case "pptx":
                return "ppt"
            case "txt":
                return "txt"
            case "md":
                return "md"
            default:
                return "file"
        }
    }

    const generateSampleContent = (title: string, description: string): string => {
        return `
      <h2>${title}</h2>
      <p>${description}</p>
      
      <h3>Giới thiệu</h3>
      <p>Tài liệu này cung cấp thông tin chi tiết về ${title.toLowerCase()}. Nội dung được biên soạn kỹ lưỡng để đảm bảo tính chính xác và hữu ích cho người đọc.</p>
      
      <h3>Nội dung chính</h3>
      <p>Các chủ đề được đề cập trong tài liệu bao gồm:</p>
      <ul>
        <li>Khái niệm cơ bản và định nghĩa</li>
        <li>Các phương pháp và kỹ thuật</li>
        <li>Ví dụ thực tế và case study</li>
        <li>Best practices và recommendations</li>
      </ul>
      
      <h3>Kết luận</h3>
      <p>Tài liệu này sẽ giúp bạn hiểu rõ hơn về ${title.toLowerCase()} và áp dụng kiến thức vào thực tế một cách hiệu quả.</p>
    `
    }

    if (!user) {
        return null
    }

    return (
        <div className="upload-page">
            <div className="upload-header">
                <h1>Upload</h1>
                <p>Chia sẻ kiến thức của bạn với cộng đồng FShare</p>
            </div>
            {user?.role === "teacher" && (
                <div className="upload-tabs">
                    <button
                        className={`tab-btn ${activeTab === "document" ? "active" : ""}`}
                        onClick={() => setActiveTab("document")}
                    >
                        <i className="fas fa-file-alt"></i>
                        Upload Tài liệu
                    </button>
                    <button
                        className={`tab-btn ${activeTab === "workshop" ? "active" : ""}`}
                        onClick={() => setActiveTab("workshop")}
                    >
                        <i className="fas fa-chalkboard-teacher"></i>
                        Tạo Workshop
                    </button>
                </div>
            )}
            <div className="upload-content">
                {activeTab === "document" && (
                    <div className="upload-form">
                        <div className="form-section">
                            <h3>Thông tin tài liệu</h3>
                            <div className="form-group">
                                <label htmlFor="title">Tiêu đề *</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={documentInfo.title}
                                    onChange={(e) => setDocumentInfo({ ...documentInfo, title: e.target.value })}
                                    placeholder="Nhập tiêu đề tài liệu"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Mô tả</label>
                                <textarea
                                    id="description"
                                    rows={4}
                                    value={documentInfo.description}
                                    onChange={(e) => setDocumentInfo({ ...documentInfo, description: e.target.value })}
                                    placeholder="Mô tả nội dung tài liệu"
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">Danh mục *</label>
                                <select
                                    id="category"
                                    value={documentInfo.category}
                                    onChange={(e) => setDocumentInfo({ ...documentInfo, category: e.target.value })}
                                    required
                                >
                                    <option value="">Chọn danh mục</option>
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="tags">Tags</label>
                                <input
                                    type="text"
                                    id="tags"
                                    value={documentInfo.tags}
                                    onChange={(e) => setDocumentInfo({ ...documentInfo, tags: e.target.value })}
                                    placeholder="Nhập tags, cách nhau bằng dấu phẩy"
                                />
                                <small>VD: react, javascript, frontend</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="visibility">Quyền truy cập</label>
                                <select
                                    id="visibility"
                                    value={documentInfo.visibility}
                                    onChange={(e) => setDocumentInfo({ ...documentInfo, visibility: e.target.value as any })}
                                >
                                    <option value="public">Công khai</option>
                                    <option value="private">Riêng tư</option>
                                    <option value="community">Chỉ cộng đồng</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-section">
                            <h3>Upload files</h3>
                            <div
                                className="drop-zone"
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    onChange={handleFileInputChange}
                                    multiple
                                    accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.md"
                                />
                                <div className="drop-zone-content">
                                    <div className="upload-icon">📄</div>
                                    <h4>Kéo thả files vào đây hoặc click để chọn</h4>
                                    <p>Hỗ trợ: PDF, DOC, DOCX, PPT, PPTX, TXT, MD</p>
                                    <p>Kích thước tối đa: 50MB mỗi file</p>
                                </div>
                            </div>

                            {files.length > 0 && (
                                <div className="files-list">
                                    <h4>Files đã chọn ({files.length})</h4>
                                    {files.map((file, index) => (
                                        <div key={index} className="file-item">
                                            <div className="file-info">
                                                <span className="file-name">{file.name}</span>
                                                <span className="file-size">{formatFileSize(file.size)}</span>
                                            </div>
                                            <button className="remove-file" onClick={() => removeFile(index)}>
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {uploading && (
                                <div className="upload-progress">
                                    <h4>Đang upload...</h4>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: `${uploadProgress}%` }}></div>
                                    </div>
                                    <p>{uploadProgress}% hoàn thành</p>
                                </div>
                            )}

                            <div className="upload-actions">
                                <button className="upload-btn" onClick={handleUpload} disabled={uploading || files.length === 0}>
                                    {uploading ? "Đang upload..." : "Upload tài liệu"}
                                </button>
                                <button className="cancel-btn" onClick={() => setFiles([])}>
                                    Hủy
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "workshop" && user?.role === "teacher" && (
                    <div className="workshop-redirect">
                        <div className="redirect-content">
                            <i className="fas fa-chalkboard-teacher"></i>
                            <h3>Tạo Workshop mới</h3>
                            <p>Chuyển đến trang tạo workshop để thiết lập workshop của bạn</p>
                            <button className="btn-primary" onClick={() => navigate("/workshop-upload")}>
                                Tạo Workshop
                            </button>
                        </div>
                    </div>
                )}

                <div className="upload-guidelines">
                    <h3>Hướng dẫn upload</h3>
                    <div className="guidelines-list">
                        <div className="guideline-item">
                            <h4>📋 Chuẩn bị tài liệu</h4>
                            <p>Đảm bảo tài liệu có nội dung chất lượng và hữu ích cho cộng đồng</p>
                        </div>
                        <div className="guideline-item">
                            <h4>🏷️ Đặt tên rõ ràng</h4>
                            <p>Sử dụng tiêu đề mô tả chính xác nội dung tài liệu</p>
                        </div>
                        <div className="guideline-item">
                            <h4>📂 Chọn danh mục phù hợp</h4>
                            <p>Giúp người dùng dễ dàng tìm thấy tài liệu của bạn</p>
                        </div>
                        <div className="guideline-item">
                            <h4>🔖 Thêm tags</h4>
                            <p>Sử dụng từ khóa liên quan để tăng khả năng tìm kiếm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPage
