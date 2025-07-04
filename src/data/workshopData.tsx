export interface Workshop {

    id: number
    title: string
    description: string
    instructor: string
    instructorAvatar?: string
    instructorBio?: string
    image: string
    startDate: string
    endDate?: string
    time: string
    duration: string
    level: "Beginner" | "Intermediate" | "Advanced"
    price: string
    status: "Sắp diễn ra" | "Đang diễn ra" | "Đã hoàn thành"
    category: "upcoming" | "ongoing" | "completed"
    currentParticipants: number
    maxParticipants: number
    rating?: number
    topics?: string[]
    requirements?: string[]
    benefits?: string[]
    registrationLink?: string
    feedback?: Array<{
        name: string
        rating: number
        comment: string
    }>
}

export const workshopData: Workshop[] = [
     {
        id: 1,
        title: "Học Công nghệ Thông tin – Làm gì sau khi ra trường?",
        description:
        "Trong những năm gần đây, Công nghệ thông tin vẫn luôn được xem là ngành học “hot”, thu hút nhiều bạn sinh viên theo học. Ngành học hứa hẹn mang đến nhiều cơ hội và mở ra một tương lai công việc có thu nhập cao, nhu cầu tuyển dụng lớn, và nhiều sự lựa chọn về nghề nghiệp. Tuy nhiên, giữa rất nhiều sự lựa chọn như thế, các bạn sinh viên không khỏi băn khoăn về con đường thật sự phù hợp với sở thích cá nhân, năng lực của bản thân và nhu cầu tuyển dụng trên thị trường.",

        instructor: "UIT",
        instructorAvatar: "https://ui-avatars.com/api/?name=UIT&background=667eea&color=fff",
        instructorBio: "",
        image: "data:image/jpeg;base64,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",
        startDate: "2025-06-24",
        endDate: "2025-06-30",
        time: "19:00 - 20:30",
        duration: "1 giờ 30 phút",
        level: "Advanced",
        price: "Free",
        status: "Sắp diễn ra",
        category: "upcoming",
        currentParticipants: 45,
        maxParticipants: 100,
        topics: [
            "Học Công nghệ Thông tin – Làm gì sau khi ra trường? ",
            "Chia sẻ về định hướng nghề nghiệp, xu hướng ngành CNTT và cơ hội phát triển sự nghiệp cho sinh viên sau khi tốt nghiệp."
            ,
           
        ],
        requirements: ["Sinh viên UIT", "Đăng ký trước tại: https://forms.office.com/e/k21vjH8Kt3",],
        benefits: [
            "Nắm bắt xu hướng ngành CNTT và các hướng đi nghề nghiệp sau tốt nghiệp",
            "Cơ hội giao lưu với các chuyên gia trong ngành",
            "Nhận được những lời khuyên quý giá từ những người đã thành công trong ngành",
            "Biết được những kỹ năng cần trau dồi khi còn là sinh viên",
          
        ],
        registrationLink: "https://forms.office.com/pages/responsepage.aspx?id=p4ibjz4_40uq5CAG1MQjBjVclDAeAqxIuD0w-NWci15UQ1hRTFUwNTJITjNZREJRWEtPSVhYTko0Qy4u&route=shorturl",
    },
    {
        id: 8,
        title: "IVIETTECH – TECHTALK | CHUỖI WORKSHOP MIỄN PHÍ VỀ CÔNG NGHỆ THÔNG TIN MÀ BẠN KHÔNG MUỐN BỎ LỠ",
        description:"Ngành Công nghệ Thông tin (CNTT) từ trước đến nay vẫn luôn là một trong những ngành top đầu, không chỉ đòi hỏi nguồn nhân lực chất lượng cao mà còn đem lại cho người làm trong nghề một lộ trình thăng tiến rõ ràng với mức lương cao ngất ngưỡng.",

        instructor: "UIT",
        instructorAvatar: "https://ui-avatars.com/api/?name=IVIETTECH&background=667eea&color=fff",
        instructorBio: "",
        image:"https://iviettech.vn/wp-content/uploads/2023/03/techtalk001-ngang.jpg",
        startDate: "2025-06-24",
        endDate: "2025-06-30",
        time: "19:00 - 20:30",
        duration: "1 giờ 30 phút",
        level: "Advanced",
        price: "Free",
        status: "Sắp diễn ra",
        category: "upcoming",
        currentParticipants: 45,
        maxParticipants: 100,
        topics: [
            "Tình hình ngành công nghiệp phần mềm ",
            "Các xu hướng công nghệ mới",
            "Yêu cầu của các công ty phần mềm trong tình hình mới"  
            ,
           
        ],
        requirements: [" Dành cho sinh viên ngành CNTT hoặc người yêu thích công nghệ đang tìm hiểu cơ hội nghề nghiệp.","Có tinh thần cầu tiến, ham học hỏi, sẵn sàng tiếp thu kiến thức và định hướng mới."],
        benefits: [
            "Hiểu rõ thực trạng và xu hướng nghề nghiệp trong ngành CNTT hiện nay." ,
            "Nhận được những lời khuyên hữu ích từ các chuyên gia trong ngành.",
            "Cơ hội kết nối với các chuyên gia và những người cùng đam mê công nghệ.",
            "Biết cách chuẩn bị đúng và đủ để tăng khả năng được tuyển dụng.",

          
        ],
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfTNMJrfYq2Y88_V_jyTIdbbJbfbtdwtvW3x3nFMxoW6KgQ3g/viewform",
    },
    {
        id: 6,
        title: "Advanced React Patterns",
        description:
            "Deep dive into advanced React patterns including render props, higher-order components, and compound components.",
        instructor: "Nguyễn Minh Tuấn",
        instructorAvatar: "https://ui-avatars.com/api/?name=Nguyen+Minh+Tuan&background=667eea&color=fff",
        instructorBio: "Senior Frontend Developer với 8+ năm kinh nghiệm tại các công ty công nghệ hàng đầu.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
        startDate: "2024-02-15",
        endDate: "2024-02-17",
        time: "19:00 - 21:00",
        duration: "6 giờ",
        level: "Advanced",
        price: "Free",
        status: "Sắp diễn ra",
        category: "upcoming",
        currentParticipants: 45,
        maxParticipants: 100,
        topics: [
            "Render Props Pattern",
            "Higher-Order Components",
            "Compound Components",
            "Custom Hooks",
            "Context API Advanced Usage",
        ],
        requirements: ["Kinh nghiệm với React cơ bản", "Hiểu biết về JavaScript ES6+", "Đã làm việc với React Hooks"],
        benefits: [
            "Nắm vững các pattern nâng cao trong React",
            "Viết code React có thể tái sử dụng",
            "Tối ưu hóa performance ứng dụng",
        ],
        registrationLink: "https://example.com/",
    },
    {
        id: 7,
        title: "GraphQL with Apollo Client",
        description: "Learn how to build modern applications using GraphQL and Apollo Client for efficient data fetching.",
        instructor: "Trần Văn Hùng",
        instructorAvatar: "https://ui-avatars.com/api/?name=Tran+Van+Hung&background=10b981&color=fff",
        instructorBio: "Full-stack Developer chuyên về GraphQL và modern web technologies.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
        startDate: "2024-01-25",
        endDate: "2024-01-25",
        time: "14:00 - 17:00",
        duration: "3 giờ",
        level: "Intermediate",
        price: "Free",
        status: "Đã hoàn thành",
        category: "completed",
        currentParticipants: 80,
        maxParticipants: 80,
        rating: 4.8,
        topics: [
            "GraphQL Fundamentals",
            "Apollo Client Setup",
            "Queries and Mutations",
            "Caching Strategies",
            "Error Handling",
        ],
        requirements: ["Kinh nghiệm với React", "Hiểu biết cơ bản về API", "JavaScript ES6+"],
        benefits: ["Hiểu rõ về GraphQL", "Sử dụng Apollo Client hiệu quả", "Tối ưu hóa data fetching"],
        feedback: [
            {
                name: "Lê Thị Mai",
                rating: 5,
                comment: "Workshop rất hữu ích, giảng viên giải thích rất rõ ràng!",
            },
            {
                name: "Phạm Văn Nam",
                rating: 4,
                comment: "Nội dung chất lượng, ví dụ thực tế tốt.",
            },
        ],
    },
    {
        id: 3,
        title: "TypeScript Masterclass",
        description: "Master TypeScript from basics to advanced features for building robust and scalable applications.",
        instructor: "Lê Thị Hoa",
        instructorAvatar: "https://ui-avatars.com/api/?name=Le+Thi+Hoa&background=f59e0b&color=fff",
        instructorBio: "Senior TypeScript Developer và technical writer với nhiều năm kinh nghiệm.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
        startDate: "2024-02-20",
        endDate: "2024-02-22",
        time: "20:00 - 22:00",
        duration: "6 giờ",
        level: "Intermediate",
        price: "Free",
        status: "Sắp diễn ra",
        category: "upcoming",
        currentParticipants: 32,
        maxParticipants: 60,
        topics: ["TypeScript Basics", "Advanced Types", "Generics", "Decorators", "Integration with React"],
        requirements: ["Kinh nghiệm với JavaScript", "Hiểu biết về OOP", "Đã làm việc với modern frameworks"],
        benefits: [
            "Viết code JavaScript an toàn hơn",
            "Tăng productivity trong development",
            "Dễ dàng maintain large codebase",
        ],
        registrationLink: "https://example.com/register/3",
    },
    {
        id: 4,
        title: "Node.js Performance Optimization",
        description: "Learn techniques to optimize Node.js applications for better performance and scalability.",
        instructor: "Phạm Minh Đức",
        instructorAvatar: "https://ui-avatars.com/api/?name=Pham+Minh+Duc&background=8b5cf6&color=fff",
        instructorBio: "Backend Engineer với expertise trong Node.js performance và scalability.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
        startDate: "2024-01-30",
        endDate: "2024-01-30",
        time: "19:30 - 21:30",
        duration: "2 giờ",
        level: "Advanced",
        price: "Free",
        status: "Đang diễn ra",
        category: "ongoing",
        currentParticipants: 55,
        maxParticipants: 80,
        topics: [
            "Profiling Node.js Applications",
            "Memory Management",
            "Event Loop Optimization",
            "Clustering",
            "Caching Strategies",
        ],
        requirements: [
            "Kinh nghiệm với Node.js",
            "Hiểu biết về asynchronous programming",
            "Đã deploy Node.js applications",
        ],
        benefits: ["Tối ưu hóa performance ứng dụng", "Giảm memory usage", "Scale ứng dụng hiệu quả"],
        registrationLink: "https://example.com/register/4",
    },
    {
        id: 5,
        title: "Modern CSS Techniques",
        description: "Explore modern CSS features including Grid, Flexbox, Custom Properties, and CSS-in-JS solutions.",
        instructor: "Võ Thị Lan",
        instructorAvatar: "https://ui-avatars.com/api/?name=Vo+Thi+Lan&background=ef4444&color=fff",
        instructorBio: "UI/UX Developer chuyên về modern CSS và design systems.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
        startDate: "2024-02-10",
        endDate: "2024-02-12",
        time: "18:00 - 20:00",
        duration: "6 giờ",
        level: "Beginner",
        price: "Free",
        status: "Sắp diễn ra",
        category: "upcoming",
        currentParticipants: 28,
        maxParticipants: 50,
        topics: ["CSS Grid Layout", "Flexbox Advanced", "CSS Custom Properties", "CSS Animations", "Responsive Design"],
        requirements: ["Kiến thức CSS cơ bản", "Hiểu biết về HTML", "Đã làm việc với responsive design"],
        benefits: ["Tạo layouts phức tạp dễ dàng", "Viết CSS maintainable", "Tối ưu hóa performance CSS"],
        registrationLink: "https://example.com/register/5",
    },
   
    {
        id: 2,
        title: "Tìm hiểu nghề Phân tích nghiệp vụ Business Analyst (BA) – Định hướng lộ trình học tập hiệu quả",
        description:
            "Hiện nay, nghề Phân tích nghiệp vụ Business Analyst (BA) đang trở thành vị trí quan trọng và được săn đón không chỉ ở các doanh nghiệp công nghệ mà ở nhiều lĩnh vực khác nhau. Để giúp các bạn sinh viên, người đi làm quan tâm tới nghề BA có thể hiểu rõ hơn công việc, vai trò và trách nhiệm của một  BA chuyên nghiệp. Từ đó, xây dựng định hướng lộ nghề nghiệp hiệu quả, tiết kiệm thời gian và chi phí cơ hội. BKACAD tổ chức Free Workshop: Tìm hiểu nghề phân tích nghiệp vụ Business Analyst - Định hướng lộ trình học tập hiệu quả. Hứa hẹn sẽ mang lại những thông tin bổ ích cho các bạn quan tâm",
        instructor: "BKACAD",
        instructorAvatar: "https://ui-avatars.com/api/?name=BKACAD&background=10b981&color=fff",
        instructorBio: ".",
        image: "https://www.bkacad.com/images/banners/original/banner-news_1591588244.jpg?w=800&h=400&fit=crop",
        startDate: "2024-06-15",
        endDate: "2024-06-17",
        time: "18:00 - 20:00",
        duration: "2 giờ",
        level: "Beginner",
        price: "Free",
        status: "Đang diễn ra",
        category: "ongoing",
        currentParticipants: 60,
        maxParticipants: 100,
    },


]

export const getWorkshopsByCategory = (category: string): Workshop[] => {
    if (category === "all") return workshopData
    return workshopData.filter((workshop) => workshop.category === category)
}

export const getWorkshopById = (id: number): Workshop | undefined => {
    return workshopData.find((workshop) => workshop.id === id)
}

export const searchWorkshops = (query: string): Workshop[] => {
    const lowercaseQuery = query.toLowerCase()
    return workshopData.filter(
        (workshop) =>
            workshop.title.toLowerCase().includes(lowercaseQuery) ||
            workshop.description.toLowerCase().includes(lowercaseQuery) ||
            workshop.instructor.toLowerCase().includes(lowercaseQuery),
    )
}
