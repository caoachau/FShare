"use client"

export interface Document {
    id: number
    title: string
    description: string
    category: string
    tags: string[]
    author: string
    authorAvatar?: string
    authorId: string
    fileType: string
    fileSize: string
    icon: string
    iconClass: string
    downloads: number
    rating: number
    publishDate: string
    lastUpdated: string
    pages: number
    content: string
    fileUrl?: string
    visibility: "public" | "private" | "community"
}

export const documentsData: Document[] = [
    // React Documents

    {
        id: 2,
        title: "React Context API Deep Dive",
        description:
            "Master React Context API for state management in large applications with best practices and performance optimization.",
        category: "Frontend Development",
        tags: ["React", "Context API", "State Management", "JavaScript"],
        author: "Lê Thị B",
        authorAvatar: "https://ui-avatars.com/api/?name=Le+Thi+B&background=10b981&color=fff",
        authorId: "user2",
        fileType: "PDF",
        fileSize: "3.1 MB",
        icon: "fas fa-file-pdf",
        iconClass: "pdf",
        downloads: 890,
        rating: 4.6,
        publishDate: "2024-01-12",
        lastUpdated: "2024-01-18",
        pages: 38,
        content: `
      <h2>React Context API Deep Dive</h2>
      <p>Learn how to effectively use React Context API for state management.</p>
      
      <h3>Creating Context</h3>
      <p>How to create and provide context in your React application.</p>
      
      <h3>Performance Optimization</h3>
      <p>Best practices to avoid unnecessary re-renders when using Context.</p>
    `,
        fileUrl: "/documents/react-context-api.pdf",
        visibility: "public",
    },
    
    {
        id: 21,
        title: "Advanced React Patterns",
        description:
            "Master advanced React patterns including render props, higher-order components, and compound components.",
        category: "Frontend Development",
        tags: ["React", "Patterns", "Advanced", "JavaScript"],
        author: "Lê Thị B",
        authorAvatar: "https://ui-avatars.com/api/?name=Le+Thi+B&background=10b981&color=fff",
        authorId: "user2",
        fileType: "DOCX",
        fileSize: "3.1 MB",
        icon: "fas fa-file-word",
        iconClass: "doc",
        downloads: 890,
        rating: 4.6,
        publishDate: "2024-01-12",
        lastUpdated: "2024-01-18",
        pages: 38,
        content: `
      <h2>Advanced React Patterns</h2>
      <p>Learn advanced React patterns for building scalable applications.</p>
      
      <h3>Render Props</h3>
      <p>How to use render props pattern for component composition.</p>
      
      <h3>Higher-Order Components</h3>
      <p>Creating reusable logic with HOCs.</p>
    `,
        fileUrl: "/documents/react-patterns.docx",
        visibility: "public",
    },
    {
        id: 22,
        title: "React Performance Optimization",
        description:
            "Learn techniques to optimize React application performance including memoization, lazy loading, and code splitting.",
        category: "Frontend Development",
        tags: ["React", "Performance", "Optimization"],
        author: "Lê Thị B",
        authorAvatar: "https://ui-avatars.com/api/?name=Le+Thi+B&background=10b981&color=fff",
        authorId: "user2",
        fileType: "TXT",
        fileSize: "3.1 MB",
        icon: "fas fa-file-alt",
        iconClass: "txt",
        downloads: 890,
        rating: 4.6,
        publishDate: "2024-01-12",
        lastUpdated: "2024-01-18",
        pages: 38,
        content: `
      <h2>React Performance Optimization</h2>
      <p>Learn how to optimize React applications for better performance.</p>
      
      <h3>Memoization</h3>
      <p>Using React.memo and useMemo for performance optimization.</p>
      
      <h3>Code Splitting</h3>
      <p>Implementing lazy loading and code splitting strategies.</p>
    `,
        fileUrl: "/documents/react-performance.txt",
        visibility: "public",
    },
    // Thêm các documents khác...
    {
        id: 3,
        title: "React Testing Library Handbook",
        description: "Complete guide to testing React components with React Testing Library and Jest.",
        category: "Frontend Development",
        tags: ["React", "Testing", "Jest", "JavaScript"],
        author: "Phạm Văn C",
        authorAvatar: "https://ui-avatars.com/api/?name=Pham+Van+C&background=f59e0b&color=fff",
        authorId: "user3",
        fileType: "PDF",
        fileSize: "2.8 MB",
        icon: "fas fa-file-pdf",
        iconClass: "pdf",
        downloads: 1120,
        rating: 4.7,
        publishDate: "2024-01-08",
        lastUpdated: "2024-01-15",
        pages: 52,
        content: `
      <h2>React Testing Library Handbook</h2>
      <p>Learn how to write effective tests for your React components.</p>
      
      <h3>Testing Components</h3>
      <p>Best practices for testing React components with user-centric approach.</p>
      
      <h3>Mocking and Async Testing</h3>
      <p>Handle complex testing scenarios including API calls and async operations.</p>
    `,
        fileUrl: "/documents/react-testing-library.pdf",
        visibility: "public",
    },
    // Node.js Documents
    {
        id: 4,
        title: "Node.js Best Practices 2024",
        description:
            "Modern Node.js development practices including security, performance optimization, and project structure.",
        category: "Backend Development",
        tags: ["Node.js", "JavaScript", "Backend", "API"],
        author: "Trần Thị D",
        authorAvatar: "https://ui-avatars.com/api/?name=Tran+Thi+D&background=8b5cf6&color=fff",
        authorId: "user4",
        fileType: "PDF",
        fileSize: "3.2 MB",
        icon: "fas fa-file-pdf",
        iconClass: "pdf",
        downloads: 1890,
        rating: 4.8,
        publishDate: "2024-01-10",
        lastUpdated: "2024-01-18",
        pages: 62,
        content: `
      <h2>Node.js Best Practices 2024</h2>
      <p>This guide covers the latest best practices for Node.js development in 2024.</p>
      
      <h3>1. Project Structure</h3>
      <p>Organize your Node.js project with a clear and scalable structure.</p>
      
      <h3>2. Security Best Practices</h3>
      <p>Implement security measures to protect your Node.js applications.</p>
      
      <h3>3. Performance Optimization</h3>
      <p>Techniques to optimize your Node.js application performance.</p>
    `,
        fileUrl: "/documents/nodejs-best-practices.pdf",
        visibility: "public",
    },
    {
        id: 5,
        title: "TypeScript Handbook for Beginners",
        description: "An introduction to TypeScript with examples, type annotations, interfaces, and more.",
        category: "Frontend Development",
        tags: ["TypeScript", "JavaScript", "Frontend"],
        author: "Ngô Thị E",
        authorAvatar: "https://ui-avatars.com/api/?name=Ngo+Thi+E&background=ef4444&color=fff",
        authorId: "user5",
        fileType: "PDF",
        fileSize: "4.0 MB",
        icon: "fas fa-file-pdf",
        iconClass: "pdf",
        downloads: 650,
        rating: 4.5,
        publishDate: "2024-02-01",
        lastUpdated: "2024-02-03",
        pages: 50,
        content: `
      <h2>TypeScript Handbook</h2>
      <p>Learn the basics of TypeScript and how to use it in modern development.</p>
      
      <h3>Type Annotations</h3>
      <p>Using type annotations to catch bugs early.</p>
    `,
        fileUrl: "https://drive.google.com/uc?export=download&id=1UUGKcVx_FFwCffNBSUnKc8VQeJMQiMNs",
        visibility: "public"
    },
    {
        id: 6,
        title: "RESTful API Design Guide",
        description: "Best practices for designing scalable and secure RESTful APIs.",
        category: "Backend Development",
        tags: ["API", "REST", "Backend", "Node.js"],
        author: "Lý Văn F",
        authorAvatar: "https://ui-avatars.com/api/?name=Ly+Van+F&background=3b82f6&color=fff",
        authorId: "user6",
        fileType: "DOCX",
        fileSize: "2.2 MB",
        icon: "fas fa-file-word",
        iconClass: "doc",
        downloads: 430,
        rating: 4.4,
        publishDate: "2024-03-10",
        lastUpdated: "2024-03-12",
        pages: 32,
        content: `
      <h2>RESTful API Design</h2>
      <p>Learn how to design RESTful APIs that scale and are easy to maintain.</p>
    `,
        fileUrl: "https://drive.google.com/uc?export=download&id=1u0Z5B9Y5a-p-rU6XrQ3HZHezN9vUdTzA",
        visibility: "public"
    },
    {
        id: 7,
        title: "DevOps Fundamentals",
        description: "A presentation on DevOps culture, CI/CD, automation tools, and best practices.",
        category: "DevOps",
        tags: ["DevOps", "CI/CD", "Automation"],
        author: "Trịnh Thị G",
        authorAvatar: "https://ui-avatars.com/api/?name=Trinh+Thi+G&background=14b8a6&color=fff",
        authorId: "user7",
        fileType: "PPT",
        fileSize: "6.3 MB",
        icon: "fas fa-file-powerpoint",
        iconClass: "ppt",
        downloads: 510,
        rating: 4.7,
        publishDate: "2024-04-05",
        lastUpdated: "2024-04-07",
        pages: 25,
        content: `
      <h2>DevOps Fundamentals</h2>
      <p>Understand the key concepts of DevOps and how to apply them in real-world projects.</p>
    `,
        fileUrl: "https://drive.google.com/uc?export=download&id=1gXlZY9xOrHRSFJuAnTyHwJxFihIdtWdv",
        visibility: "public"
    },
    {
        id: 8,
        title: "Git Commands Cheat Sheet",
        description: "Quick reference to essential Git commands for version control.",
        category: "Tools",
        tags: ["Git", "Version Control", "CLI"],
        author: "Đặng Văn H",
        authorAvatar: "https://ui-avatars.com/api/?name=Dang+Van+H&background=6366f1&color=fff",
        authorId: "user8",
        fileType: "TXT",
        fileSize: "1.1 MB",
        icon: "fas fa-file-alt",
        iconClass: "txt",
        downloads: 970,
        rating: 4.9,
        publishDate: "2024-05-01",
        lastUpdated: "2024-05-03",
        pages: 10,
        content: `
      <h2>Git Commands Cheat Sheet</h2>
      <p>Essential commands: clone, commit, push, pull, merge, rebase, stash, and more.</p>
    `,
        fileUrl: "https://drive.google.com/uc?export=download&id=1gPbeEX4E1c2ftwFZxzk5bDw6FJl8vFRH",
        visibility: "public"
    },


    {
        id: 102,
        title: "RESTful API Design Best Practices",
        description: "A detailed guide to designing clean, scalable REST APIs using Node.js.",
        category: "Backend Development",
        tags: ["API", "Node.js", "Express", "REST"],
        author: "Jane Doe",
        authorAvatar: "https://ui-avatars.com/api/?name=Jane+Doe&background=f43f5e&color=fff",
        authorId: "user9",
        fileType: "DOCX",
        fileSize: "2.2 MB",
        icon: "fas fa-file-word",
        iconClass: "doc",
        downloads: 540,
        rating: 4.7,
        publishDate: "2024-02-21",
        lastUpdated: "2024-03-05",
        pages: 42,
        content: `<h2>RESTful API Best Practices</h2><p>Follow consistent URI naming and HTTP status conventions.</p>`,
        fileUrl: "https://drive.google.com/uc?export=download&id=1zWyU7c-DowDf1VQfWJqcpH67EyHkgY6A",
        visibility: "public"
    },
    {
        id: 103,
        title: "React Native - Hướng Dẫn Xây Dựng Ứng Dụng Di Động",
        description: "Tạo ứng dụng di động với React Native và Expo, phù hợp người mới.",
        category: "Mobile Development",
        tags: ["React Native", "Mobile", "JavaScript", "Expo"],
        author: "Lý Thị G",
        authorAvatar: "https://ui-avatars.com/api/?name=Ly+Thi+G&background=ec4899&color=fff",
        authorId: "user10",
        fileType: "PDF",
        fileSize: "3.0 MB",
        icon: "fas fa-file-pdf",
        iconClass: "pdf",
        downloads: 420,
        rating: 4.6,
        publishDate: "2024-03-20",
        lastUpdated: "2024-04-05",
        pages: 55,
        content: `<h2>Khởi tạo dự án với Expo</h2><p>Cài đặt và thiết lập môi trường phát triển.</p>`,
        fileUrl: "https://drive.google.com/uc?export=download&id=1wTO7ybPikFs7KUpCXDWKj5uJvylByXU0",
        visibility: "public"
    },
    {
        id: 104,
        title: "Data Cleaning Techniques with Python",
        description: "Best practices for handling missing data, outliers, and normalization.",
        category: "Data Science",
        tags: ["Data Science", "Pandas", "Cleaning", "Python"],
        author: "Ali Raza",
        authorAvatar: "https://ui-avatars.com/api/?name=Ali+Raza&background=6366f1&color=fff",
        authorId: "user11",
        fileType: "PPT",
        fileSize: "4.1 MB",
        icon: "fas fa-file-powerpoint",
        iconClass: "ppt",
        downloads: 610,
        rating: 4.9,
        publishDate: "2024-03-18",
        lastUpdated: "2024-03-25",
        pages: 35,
        content: `<h2>Cleaning Data with Pandas</h2><p>Use .dropna(), .fillna(), and .astype() effectively.</p>`,
        fileUrl: "https://drive.google.com/uc?export=download&id=1rXqgKFu-LjGHRy-JqcfP8bIn-KvEvTci",
        visibility: "public"
    },
    {
        id: 105,
        title: "CI/CD Với GitHub Actions",
        description: "Tự động hoá quy trình build, test và deploy bằng GitHub Actions.",
        category: "DevOps",
        tags: ["CI/CD", "DevOps", "GitHub", "Automation"],
        author: "Trịnh Minh K",
        authorAvatar: "https://ui-avatars.com/api/?name=Trinh+Minh+K&background=14b8a6&color=fff",
        authorId: "user12",
        fileType: "TXT",
        fileSize: "1.2 MB",
        icon: "fas fa-file-alt",
        iconClass: "txt",
        downloads: 370,
        rating: 4.4,
        publishDate: "2024-05-02",
        lastUpdated: "2024-05-10",
        pages: 18,
        content: `<h2>GitHub Actions</h2><p>Viết workflow file cho CI/CD.</p>`,
        fileUrl: "https://drive.google.com/uc?export=download&id=1mRHDJRx5ZamU5mav0r5PXg6HGm7RHDqK",
        visibility: "public"
    },
    {
        id: 106,
        title: "Thiết Kế UX Từ Căn Bản Đến Thực Chiến",
        description: "Cẩm nang cho người mới bắt đầu thiết kế trải nghiệm người dùng (UX).",
        category: "UI/UX Design",
        tags: ["UX", "Figma", "Prototype", "Wireframe"],
        author: "Hoàng Anh",
        authorAvatar: "https://ui-avatars.com/api/?name=Hoang+Anh&background=f97316&color=fff",
        authorId: "user13",
        fileType: "PDF",
        fileSize: "2.5 MB",
        icon: "fas fa-file-pdf",
        iconClass: "pdf",
        downloads: 290,
        rating: 4.3,
        publishDate: "2024-04-12",
        lastUpdated: "2024-04-20",
        pages: 45,
        content: `<h2>UX là gì?</h2><p>Trải nghiệm người dùng là yếu tố then chốt trong sản phẩm số.</p>`,
        fileUrl: "https://drive.google.com/uc?export=download&id=1vUuwKgaIrQazCd9bRf5taEqmGm9kgv6N",
        visibility: "public"
    },
    {
        id: 107,
        title: "SQL Performance Tuning",
        description: "Tips và kỹ thuật tối ưu truy vấn SQL cho hệ thống lớn.",
        category: "Database",
        tags: ["SQL", "Indexing", "MySQL", "Query Optimization"],
        author: "Trần Văn Bình",
        authorAvatar: "https://ui-avatars.com/api/?name=Tran+Van+Binh&background=10b981&color=fff",
        authorId: "user14",
        fileType: "DOCX",
        fileSize: "1.8 MB",
        icon: "fas fa-file-word",
        iconClass: "doc",
        downloads: 360,
        rating: 4.2,
        publishDate: "2024-03-15",
        lastUpdated: "2024-03-22",
        pages: 32,
        content: `<h2>Explain và Index</h2><p>Sử dụng EXPLAIN để phân tích truy vấn và tạo chỉ mục hiệu quả.</p>`,
        fileUrl: "https://drive.google.com/uc?export=download&id=1QzSbcNVkg-fZ3q5SHoqT0ihP_w3aQuRn",
        visibility: "public"
    },{
        id: 108,
        title: "Deploy Ứng Dụng Node.js Lên AWS EC2",
        description: "Hướng dẫn chi tiết cách triển khai ứng dụng lên máy chủ EC2 của AWS.",
        category: "Cloud Computing",
        tags: ["AWS", "EC2", "Node.js", "Cloud Deployment"],
        author: "Nguyễn Lộc",
        authorAvatar: "https://ui-avatars.com/api/?name=Nguyen+Loc&background=7c3aed&color=fff",
        authorId: "user15",
        fileType: "PDF",
        fileSize: "2.3 MB",
        icon: "fas fa-file-pdf",
        iconClass: "pdf",
        downloads: 480,
        rating: 4.5,
        publishDate: "2024-02-25",
        lastUpdated: "2024-03-01",
        pages: 40,
        content: `<h2>Khởi tạo EC2 instance</h2><p>Chọn Amazon Linux và cấu hình security group.</p>`,
        fileUrl: "https://drive.google.com/uc?export=download&id=1Jqg2AOYhHMRNf07al6nExOUwZXmf1cOy",
        visibility: "public"
    },{
        id: 109,
        title: "Web Security 101",
        description: "Các lỗ hổng phổ biến trong ứng dụng web và cách phòng chống.",
        category: "Cybersecurity",
        tags: ["XSS", "SQLi", "OWASP", "Security"],
        author: "Lâm Đình",
        authorAvatar: "https://ui-avatars.com/api/?name=Lam+Dinh&background=ef4444&color=fff",
        authorId: "user16",
        fileType: "PPT",
        fileSize: "1.5 MB",
        icon: "fas fa-file-powerpoint",
        iconClass: "ppt",
        downloads: 270,
        rating: 4.0,
        publishDate: "2024-03-30",
        lastUpdated: "2024-04-02",
        pages: 28,
        content: `<h2>OWASP Top 10</h2><p>Danh sách 10 lỗ hổng phổ biến nhất trong bảo mật web.</p>`,
        fileUrl: "https://drive.google.com/uc?export=download&id=1QSlCyPbV4GjXrxC2UQF9bnvhtLEUQUTj",
        visibility: "public"
    },{
        id: 110,
        title: "Introduction to Neural Networks",
        description: "A beginner-friendly guide to understanding artificial neural networks.",
        category: "Machine Learning",
        tags: ["Neural Network", "AI", "Deep Learning", "ML"],
        author: "Emily Zhang",
        authorAvatar: "https://ui-avatars.com/api/?name=Emily+Zhang&background=8b5cf6&color=fff",
        authorId: "user17",
        fileType: "PDF",
        fileSize: "3.6 MB",
        icon: "fas fa-file-pdf",
        iconClass: "pdf",
        downloads: 670,
        rating: 4.8,
        publishDate: "2024-01-10",
        lastUpdated: "2024-01-22",
        pages: 52,
        content: `<h2>Perceptron và Backpropagation</h2><p>Hiểu cách hoạt động của mạng neuron cơ bản.</p>`,
        fileUrl: "https://drive.google.com/uc?export=download&id=1He2YwqHyCvHhnU0QkYOFL9ZwNW_N3icb",
        visibility: "public"
    },{
        id: 111,
        title: "Smart Contract Cơ Bản Với Solidity",
        description: "Viết và triển khai hợp đồng thông minh đầu tiên trên Ethereum.",
        category: "Blockchain",
        tags: ["Solidity", "Ethereum", "Smart Contract", "Web3"],
        author: "Vũ Thành",
        authorAvatar: "https://ui-avatars.com/api/?name=Vu+Thanh&background=0f766e&color=fff",
        authorId: "user18",
        fileType: "DOCX",
        fileSize: "2.1 MB",
        icon: "fas fa-file-word",
        iconClass: "doc",
        downloads: 300,
        rating: 4.3,
        publishDate: "2024-02-10",
        lastUpdated: "2024-02-18",
        pages: 35,
        content: `<h2>Viết hợp đồng đầu tiên</h2><p>Sử dụng Remix IDE để deploy contract.</p>`,
        fileUrl: "https://drive.google.com/uc?export=download&id=1U6EUiygi6pZn4fpjVm6bbn7DzWpiTH1g",
        visibility: "public"
    },{
        id: 112,
        title: "Tài Liệu Tổng Hợp Các Lệnh Git Cơ Bản",
        description: "Tổng hợp tất cả các lệnh git phổ biến cho lập trình viên.",
        category: "Others",
        tags: ["Git", "Version Control", "CLI", "Cheatsheet"],
        author: "Đỗ Phương",
        authorAvatar: "https://ui-avatars.com/api/?name=Do+Phuong&background=22c55e&color=fff",
        authorId: "user19",
        fileType: "TXT",
        fileSize: "0.8 MB",
        icon: "fas fa-file-alt",
        iconClass: "txt",
        downloads: 520,
        rating: 4.7,
        publishDate: "2024-03-01",
        lastUpdated: "2024-03-10",
        pages: 10,
        content: `<h2>Git Cheatsheet</h2><p>git init, git add, git commit, git push,...</p>`,
        fileUrl: "https://drive.google.com/uc?export=download&id=1AFY1fxu_xPYWUm4ObJz0xf3p3cSbFe7q",
        visibility: "public"
    },{
        id: 101,
        title: "React Cơ Bản Cho Người Mới Bắt Đầu",
        description: "Hướng dẫn chi tiết về React.js, JSX, component và state.",
        category: "Frontend Development",
        tags: ["React", "JSX", "Hooks", "State"],
        author: "Nguyễn Minh",
        authorAvatar: "https://ui-avatars.com/api/?name=Nguyen+Minh&background=3b82f6&color=fff",
        authorId: "user01",
        fileType: "PDF",
        fileSize: "2.1 MB",
        icon: "fas fa-file-pdf",
        iconClass: "pdf",
        downloads: 320,
        rating: 4.5,
        publishDate: "2024-05-10",
        lastUpdated: "2024-05-15",
        pages: 42,
        content: `<h2>Giới thiệu React</h2><p>React là thư viện JavaScript dùng để xây dựng giao diện người dùng.</p>`,
        fileUrl: "https://drive.google.com/uc?export=download&id=1uKEncr7m3oK5EcAF32y9P_dTzNEetJvD",
        visibility: "public"
    },{
        id: 1,
        title: "Modern CSS Tricks & Layouts",
        description: "A visual guide to Flexbox, Grid, and responsive design best practices.",
        category: "Frontend Development",
        tags: ["CSS", "Flexbox", "Grid", "Responsive"],
        author: "Jane Doe",
        authorAvatar: "https://ui-avatars.com/api/?name=Jane+Doe&background=f43f5e&color=fff",
        authorId: "user02",
        fileType: "DOCX",
        fileSize: "1.5 MB",
        icon: "fas fa-file-word",
        iconClass: "doc",
        downloads: 210,
        rating: 4.0,
        publishDate: "2024-04-20",
        lastUpdated: "2024-04-25",
        pages: 30,
        content: `<h2>CSS Grid Layout</h2><p>Use grid-template-columns to define your layout.</p>`,
        fileUrl: "https://drive.google.com/uc?export=download&id=1bnzDBQPhd7wO4A5TpuwCv_zR6f0e4gJj",
        visibility: "public"
    },{
        id: 200,
        title: "Modern CSS Tricks & Layouts",
        description: "A visual guide to Flexbox, Grid, and responsive design best practices.",
        category: "Frontend Development",
        tags: ["CSS", "Flexbox", "Grid", "Responsive"],
        author: "Jane Doe",
        authorAvatar: "https://ui-avatars.com/api/?name=Jane+Doe&background=f43f5e&color=fff",
        authorId: "user02",
        fileType: "DOCX",
        fileSize: "1.5 MB",
        icon: "fas fa-file-word",
        iconClass: "doc",
        downloads: 210,
        rating: 4.0,
        publishDate: "2024-04-20",
        lastUpdated: "2024-04-25",
        pages: 30,
        content: `<h2>CSS Grid Layout</h2><p>Use grid-template-columns to define your layout.</p>`,
        fileUrl: "https://drive.google.com/uc?export=download&id=1bnzDBQPhd7wO4A5TpuwCv_zR6f0e4gJj",
        visibility: "public"
    },






















]

export const getDocumentsByCategory = (category: string): Document[] => {
    if (category === "all") return documentsData
    return documentsData.filter((doc) => doc.category === category)
}

export const getDocumentById = (id: number): Document | undefined => {
    return documentsData.find((doc) => doc.id === id)
}

export const searchDocuments = (query: string): Document[] => {
    const lowercaseQuery = query.toLowerCase()
    return documentsData.filter(
        (doc) =>
            doc.title.toLowerCase().includes(lowercaseQuery) ||
            doc.description.toLowerCase().includes(lowercaseQuery) ||
            doc.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
            doc.author.toLowerCase().includes(lowercaseQuery),
    )
}

export const getDocumentsByTag = (tag: string): Document[] => {
    return documentsData.filter((doc) => doc.tags.some((docTag) => docTag.toLowerCase() === tag.toLowerCase()))
}

export const getAllTags = (): string[] => {
    const allTags = documentsData.flatMap((doc) => doc.tags)
    return Array.from(new Set(allTags)).sort()
}

export const getPopularDocuments = (limit = 5): Document[] => {
    return [...documentsData].sort((a, b) => b.downloads - a.downloads).slice(0, limit)
}

export const getRecentDocuments = (limit = 5): Document[] => {
    return [...documentsData]
        .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
        .slice(0, limit)
}
