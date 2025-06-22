"use client"

import type React from "react"
import "./StaticPages.css"

const TermsPage: React.FC = () => {
    return (
        <div className="static-page">
            <div className="static-container">
                <div className="page-header">
                    <h1>Điều khoản dịch vụ</h1>
                    <p>Cập nhật lần cuối: 15/01/2024</p>
                </div>

                <div className="content-section">
                    <h2>1. Chấp nhận điều khoản</h2>
                    <p>
                        Bằng việc truy cập và sử dụng website FShare, bạn đồng ý tuân thủ và bị ràng buộc bởi các điều khoản và
                        điều kiện sử dụng này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, bạn không được phép
                        sử dụng dịch vụ của chúng tôi.
                    </p>

                    <h2>2. Mô tả dịch vụ</h2>
                    <p>FShare là nền tảng học tập và chia sẻ tài liệu IT, cung cấp:</p>
                    <ul>
                        <li>Thư viện tài liệu học tập miễn phí</li>
                        <li>Workshop và khóa học trực tuyến</li>
                        <li>Cộng đồng chia sẻ kiến thức</li>
                        <li>Công cụ upload và quản lý tài liệu</li>
                    </ul>

                    <h2>3. Tài khoản người dùng</h2>
                    <h3>3.1 Đăng ký tài khoản</h3>
                    <p>
                        Để sử dụng đầy đủ các tính năng, bạn cần tạo tài khoản với thông tin chính xác và cập nhật. Bạn có trách
                        nhiệm bảo mật thông tin đăng nhập và chịu trách nhiệm cho mọi hoạt động diễn ra dưới tài khoản của mình.
                    </p>

                    <h3>3.2 Quyền và nghĩa vụ</h3>
                    <ul>
                        <li>Cung cấp thông tin chính xác khi đăng ký</li>
                        <li>Không chia sẻ tài khoản với người khác</li>
                        <li>Thông báo ngay khi phát hiện tài khoản bị xâm nhập</li>
                        <li>Tuân thủ các quy định của cộng đồng</li>
                    </ul>

                    <h2>4. Nội dung và sở hữu trí tuệ</h2>
                    <h3>4.1 Nội dung của người dùng</h3>
                    <p>Khi upload tài liệu lên FShare, bạn:</p>
                    <ul>
                        <li>Đảm bảo có quyền sở hữu hoặc được phép chia sẻ nội dung</li>
                        <li>Chịu trách nhiệm về tính chính xác và hợp pháp của nội dung</li>
                        <li>Cấp cho FShare quyền sử dụng, hiển thị và phân phối nội dung</li>
                        <li>Không upload nội dung vi phạm bản quyền hoặc pháp luật</li>
                    </ul>

                    <h3>4.2 Nội dung bị cấm</h3>
                    <p>Nghiêm cấm upload các nội dung:</p>
                    <ul>
                        <li>Vi phạm bản quyền, nhãn hiệu thương mại</li>
                        <li>Chứa virus, malware hoặc mã độc hại</li>
                        <li>Nội dung khiêu dâm, bạo lực, phân biệt chủng tộc</li>
                        <li>Thông tin cá nhân của người khác không được phép</li>
                        <li>Spam, quảng cáo không liên quan</li>
                    </ul>

                    <h2>5. Quyền riêng tư và bảo mật</h2>
                    <p>
                        Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn theo Chính sách bảo mật. Tuy nhiên, không có hệ thống nào
                        là hoàn toàn an toàn 100%, bạn cần có trách nhiệm bảo vệ thông tin của mình.
                    </p>

                    <h2>6. Thanh toán và hoàn tiền</h2>
                    <h3>6.1 Dịch vụ trả phí</h3>
                    <p>Một số workshop và khóa học có thể tính phí. Khi thanh toán, bạn đồng ý:</p>
                    <ul>
                        <li>Cung cấp thông tin thanh toán chính xác</li>
                        <li>Thanh toán đầy đủ trước khi sử dụng dịch vụ</li>
                        <li>Chấp nhận các điều khoản hoàn tiền cụ thể</li>
                    </ul>

                    <h3>6.2 Chính sách hoàn tiền</h3>
                    <ul>
                        <li>Hoàn tiền 100% nếu hủy trước 24h</li>
                        <li>Hoàn tiền 50% nếu hủy trước 12h</li>
                        <li>Không hoàn tiền nếu hủy trong vòng 12h</li>
                        <li>Hoàn tiền trong trường hợp lỗi kỹ thuật từ phía FShare</li>
                    </ul>

                    <h2>7. Hành vi bị cấm</h2>
                    <p>Người dùng không được phép:</p>
                    <ul>
                        <li>Sử dụng dịch vụ cho mục đích bất hợp pháp</li>
                        <li>Tấn công, hack hoặc làm gián đoạn hệ thống</li>
                        <li>Tạo nhiều tài khoản để lạm dụng dịch vụ</li>
                        <li>Thu thập thông tin người dùng khác trái phép</li>
                        <li>Phát tán nội dung spam hoặc quảng cáo</li>
                        <li>Mạo danh người khác hoặc tổ chức</li>
                    </ul>

                    <h2>8. Chấm dứt dịch vụ</h2>
                    <p>FShare có quyền tạm ngưng hoặc chấm dứt tài khoản của bạn nếu:</p>
                    <ul>
                        <li>Vi phạm điều khoản sử dụng</li>
                        <li>Có hành vi gian lận hoặc lạm dụng</li>
                        <li>Theo yêu cầu của cơ quan pháp luật</li>
                        <li>Ngừng cung cấp dịch vụ</li>
                    </ul>

                    <h2>9. Giới hạn trách nhiệm</h2>
                    <p>FShare không chịu trách nhiệm cho:</p>
                    <ul>
                        <li>Thiệt hại gián tiếp, ngẫu nhiên hoặc hậu quả</li>
                        <li>Mất mát dữ liệu hoặc lợi nhuận</li>
                        <li>Gián đoạn dịch vụ do lỗi kỹ thuật</li>
                        <li>Nội dung do người dùng khác cung cấp</li>
                    </ul>

                    <h2>10. Thay đổi điều khoản</h2>
                    <p>
                        FShare có quyền cập nhật điều khoản này bất cứ lúc nào. Chúng tôi sẽ thông báo về những thay đổi quan
                        trọng qua email hoặc thông báo trên website. Việc tiếp tục sử dụng dịch vụ sau khi có thay đổi đồng nghĩa
                        với việc bạn chấp nhận điều khoản mới.
                    </p>

                    <h2>11. Luật áp dụng</h2>
                    <p>
                        Điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp sẽ được giải quyết tại Tòa án có thẩm
                        quyền tại TP. Hồ Chí Minh.
                    </p>

                    <h2>12. Liên hệ</h2>
                    <p>Nếu có câu hỏi về điều khoản này, vui lòng liên hệ:</p>
                    <ul>
                        <li>Email: legal@Fshare.vn</li>
                        <li>Điện thoại: +84 123 456 789</li>
                        <li>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</li>
                    </ul>
                </div>
                <br />
            </div>
        </div>
    )
}

export default TermsPage
