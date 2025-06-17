"use client"

import type React from "react"
import "./StaticPages.css"

const PrivacyPage: React.FC = () => {
    return (
        <div className="static-page">
            <div className="static-container">
                <div className="page-header">
                    <h1>Chính sách bảo mật</h1>
                    <p>Cập nhật lần cuối: 15/01/2024</p>
                </div>

                <div className="content-section">
                    <h2>1. Giới thiệu</h2>
                    <p>
                        DevShare cam kết bảo vệ quyền riêng tư và thông tin cá nhân của người dùng. Chính sách này mô tả cách chúng
                        tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin của bạn khi sử dụng dịch vụ của chúng tôi.
                    </p>

                    <h2>2. Thông tin chúng tôi thu thập</h2>

                    <h3>2.1 Thông tin cá nhân</h3>
                    <p>Khi bạn đăng ký tài khoản, chúng tôi thu thập:</p>
                    <ul>
                        <li>Họ tên</li>
                        <li>Địa chỉ email</li>
                        <li>Số điện thoại (tùy chọn)</li>
                        <li>Ảnh đại diện (tùy chọn)</li>
                        <li>Thông tin nghề nghiệp (tùy chọn)</li>
                    </ul>

                    <h3>2.2 Thông tin sử dụng</h3>
                    <p>Chúng tôi tự động thu thập:</p>
                    <ul>
                        <li>Địa chỉ IP</li>
                        <li>Thông tin trình duyệt và thiết bị</li>
                        <li>Thời gian truy cập và tương tác</li>
                        <li>Trang web bạn truy cập trước và sau</li>
                        <li>Cookies và công nghệ theo dõi tương tự</li>
                    </ul>

                    <h3>2.3 Nội dung do người dùng tạo</h3>
                    <ul>
                        <li>Tài liệu upload</li>
                        <li>Bình luận và đánh giá</li>
                        <li>Tin nhắn trong forum</li>
                        <li>Thông tin hồ sơ công khai</li>
                    </ul>

                    <h2>3. Cách chúng tôi sử dụng thông tin</h2>

                    <h3>3.1 Cung cấp dịch vụ</h3>
                    <ul>
                        <li>Tạo và quản lý tài khoản</li>
                        <li>Cung cấp nội dung được cá nhân hóa</li>
                        <li>Xử lý thanh toán và giao dịch</li>
                        <li>Hỗ trợ khách hàng</li>
                    </ul>

                    <h3>3.2 Cải thiện dịch vụ</h3>
                    <ul>
                        <li>Phân tích hành vi người dùng</li>
                        <li>Phát triển tính năng mới</li>
                        <li>Tối ưu hóa hiệu suất website</li>
                        <li>Nghiên cứu thị trường</li>
                    </ul>

                    <h3>3.3 Liên lạc</h3>
                    <ul>
                        <li>Gửi thông báo về dịch vụ</li>
                        <li>Newsletter và cập nhật</li>
                        <li>Thông báo bảo mật</li>
                        <li>Phản hồi yêu cầu hỗ trợ</li>
                    </ul>

                    <h2>4. Chia sẻ thông tin</h2>

                    <h3>4.1 Chúng tôi KHÔNG bán thông tin cá nhân</h3>
                    <p>
                        DevShare cam kết không bán, cho thuê hoặc trao đổi thông tin cá nhân của bạn với bên thứ ba vì mục đích
                        thương mại.
                    </p>

                    <h3>4.2 Trường hợp chia sẻ hợp pháp</h3>
                    <p>Chúng tôi có thể chia sẻ thông tin khi:</p>
                    <ul>
                        <li>Có sự đồng ý rõ ràng từ bạn</li>
                        <li>Tuân thủ yêu cầu pháp lý</li>
                        <li>Bảo vệ quyền lợi và an toàn của DevShare</li>
                        <li>Ngăn chặn gian lận hoặc lạm dụng</li>
                    </ul>

                    <h3>4.3 Đối tác dịch vụ</h3>
                    <p>Chúng tôi có thể chia sẻ thông tin với:</p>
                    <ul>
                        <li>Nhà cung cấp dịch vụ thanh toán</li>
                        <li>Dịch vụ phân tích web</li>
                        <li>Nhà cung cấp dịch vụ email</li>
                        <li>Dịch vụ lưu trữ đám mây</li>
                    </ul>

                    <h2>5. Bảo mật thông tin</h2>

                    <h3>5.1 Biện pháp kỹ thuật</h3>
                    <ul>
                        <li>Mã hóa SSL/TLS cho tất cả dữ liệu truyền tải</li>
                        <li>Mã hóa mật khẩu bằng thuật toán bcrypt</li>
                        <li>Firewall và hệ thống phát hiện xâm nhập</li>
                        <li>Sao lưu dữ liệu định kỳ</li>
                    </ul>

                    <h3>5.2 Biện pháp quản lý</h3>
                    <ul>
                        <li>Kiểm soát truy cập nghiêm ngặt</li>
                        <li>Đào tạo nhân viên về bảo mật</li>
                        <li>Kiểm tra bảo mật định kỳ</li>
                        <li>Kế hoạch ứng phó sự cố</li>
                    </ul>

                    <h2>6. Quyền của người dùng</h2>

                    <h3>6.1 Quyền truy cập</h3>
                    <p>Bạn có quyền yêu cầu xem thông tin cá nhân mà chúng tôi lưu trữ về bạn.</p>

                    <h3>6.2 Quyền chỉnh sửa</h3>
                    <p>Bạn có thể cập nhật hoặc sửa đổi thông tin cá nhân bất cứ lúc nào.</p>

                    <h3>6.3 Quyền xóa</h3>
                    <p>Bạn có thể yêu cầu xóa tài khoản và dữ liệu cá nhân (với một số ngoại lệ pháp lý).</p>

                    <h3>6.4 Quyền hạn chế xử lý</h3>
                    <p>Bạn có thể yêu cầu hạn chế việc xử lý dữ liệu trong một số trường hợp nhất định.</p>

                    <h3>6.5 Quyền di chuyển dữ liệu</h3>
                    <p>Bạn có thể yêu cầu xuất dữ liệu cá nhân ở định dạng có thể đọc được.</p>

                    <h2>7. Cookies và công nghệ theo dõi</h2>

                    <h3>7.1 Loại cookies chúng tôi sử dụng</h3>
                    <ul>
                        <li>
                            <strong>Cookies cần thiết:</strong> Để website hoạt động bình thường
                        </li>
                        <li>
                            <strong>Cookies hiệu suất:</strong> Để phân tích và cải thiện website
                        </li>
                        <li>
                            <strong>Cookies chức năng:</strong> Để ghi nhớ tùy chọn của bạn
                        </li>
                        <li>
                            <strong>Cookies quảng cáo:</strong> Để hiển thị quảng cáo phù hợp
                        </li>
                    </ul>

                    <h3>7.2 Quản lý cookies</h3>
                    <p>
                        Bạn có thể kiểm soát cookies thông qua cài đặt trình duyệt. Tuy nhiên, việc tắt cookies có thể ảnh hưởng đến
                        trải nghiệm sử dụng.
                    </p>

                    <h2>8. Lưu trữ dữ liệu</h2>

                    <h3>8.1 Thời gian lưu trữ</h3>
                    <ul>
                        <li>Thông tin tài khoản: Cho đến khi bạn xóa tài khoản</li>
                        <li>Dữ liệu sử dụng: 2 năm</li>
                        <li>Logs hệ thống: 1 năm</li>
                        <li>Dữ liệu thanh toán: 7 năm (theo quy định pháp luật)</li>
                    </ul>

                    <h3>8.2 Vị trí lưu trữ</h3>
                    <p>
                        Dữ liệu được lưu trữ tại các trung tâm dữ liệu an toàn tại Việt Nam và có thể được sao lưu tại các địa điểm
                        khác để đảm bảo tính sẵn sàng.
                    </p>

                    <h2>9. Quyền riêng tư của trẻ em</h2>
                    <p>
                        Dịch vụ của chúng tôi không dành cho trẻ em dưới 13 tuổi. Chúng tôi không cố ý thu thập thông tin cá nhân từ
                        trẻ em dưới 13 tuổi. Nếu phát hiện, chúng tôi sẽ xóa thông tin đó ngay lập tức.
                    </p>

                    <h2>10. Thay đổi chính sách</h2>
                    <p>
                        Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian. Những thay đổi quan trọng sẽ được thông báo
                        qua email hoặc thông báo nổi bật trên website ít nhất 30 ngày trước khi có hiệu lực.
                    </p>

                    <h2>11. Liên hệ về quyền riêng tư</h2>
                    <p>Nếu bạn có câu hỏi hoặc yêu cầu về quyền riêng tư, vui lòng liên hệ:</p>
                    <ul>
                        <li>Email: contact@devshare.com</li>
                        <li>Hotline 1: 0123456789</li>
                        <li>Hotline 2: 0987654321</li>
                        <li>Địa chỉ: 123 Đường ABC, Phường XYZ, TP. Trà Vinh </li>
                    </ul>
                    <br/>


                </div>
            </div>
            
        </div>
    )
}

export default PrivacyPage
