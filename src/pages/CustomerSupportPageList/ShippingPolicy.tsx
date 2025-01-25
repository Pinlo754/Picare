import React from "react";

const ShippingPolicy: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-normal text-gray-800 mx-auto">
            <div className="bg-gray-100 px-4 py-2 text-sm text-gray-400 my-1">
                <a
                    href="/"
                    className="text-black font-semibold hover:underline"
                >
                    Trang chủ
                </a>{" "}
                / Chính sách Vận chuyển giao nhận /
            </div>
            <div className="px-4 py-8">
                <a href="/pages/chinh-sach-van-chuyen-giao-nhan">
                    <h1 className="text-2xl font-bold mb-8">Chính sách Vận chuyển giao nhận</h1>
                </a>

                <h2 className="font-bold mb-4">Shop Dược Mỹ Phẩm hỗ trợ các cách vận chuyển và giao nhận sau:</h2>
                <ul className="list-disc pl-5 space-y-2 pl-10">
                    <li>
                        <span>Giao nhận tại Shop Dược Mỹ Phẩm</span><br></br>
                        <span>Bạn có thể đến tham quan và mua hàng tại Kho hàng của chúng tôi</span><br></br>
                        <span className="italic">540/20/9 Cách Mạng Tháng Tám, Phường 11, Quận 3, TP HCM</span><br></br>
                        <span>Bạn sẽ được tư vấn về sản phẩm, lựa chọn mua sản phẩm phù hợp, thanh toán và nhận hàng.</span><br></br>
                    </li>
                    <li>
                        Giao hàng tận nơi bằng dịch vụ Bưu Điện VNPost, GHTK
                    </li>
                </ul>

                {/* Cách thức đổi trả hàng */}
                <h2 className="italic font-bold mt-10 mb-4">Miễn phí giao hàng Khu vực Thành phố Hồ Chí Minh ( áp dụng với những sản phẩm chưa giảm giá)</h2>
                <ul className="list-disc pl-10 space-y-2">
                    <li className="italic font-bold text-base">ĐƠN HÀNG NỘI THÀNH : Phí Ship 15,000 vnd nvd</li>
                    <li className="italic font-bold text-base">ĐƠN HÀNG NGOẠI THÀNH: Phí Ship 30,000 vnd </li>
                </ul>

                {/* Sau khi Shop nhận được sản phẩm */}
                <h2 className="mt-6 mb-2">
                    <span>Shop Dược Mỹ Phẩm thực hiện giao hàng tận nơi Bạn yêu cầu qua dịch vụ giao nhận của Bưu Điện (hoặc Đơn vị Chuyển phát nhanh). 
                    Nhân viên giao hàng sẽ liên lạc với Bạn để hẹn thời gian thuận tiên giao hàng. Bạn vui lòng trực tiếp kiểm tra hàng hóa ngay khi nhận hàng nếu có vấn để 
                    liên quan đến chủng loại, chất lượng, số lượng hàng hóa không đúng như đơn đặt hàng, Bạn vui lòng báo ngay với Shop Dược Mỹ Phẩm (0918 088 123) để phối 
                    hợp với Bưu Điện hoặc Đơn vị chuyển phát nhanh xử lý.</span><br></br>
                    <span>Thời gian giao hàng tùy thuộc vào thời gian giao hàng của Bưu Điện hoặc Đơn vị Chuyển phát nhanh và phụ thuộc vào địa chỉ giao hàng Bạn cung cấp.</span>
                    <br></br>
                </h2>
                <ul className="list-disc pl-10 space-y-2 mb-20">
                    <li>Chúng tôi liên lạc với bạn để thống nhất thời gian giao hàng. Chúng tôi sẽ cố gắng giao hàng trong 1-2 ngày làm việc đối với khu vực Tp. Hồ Chí Minh, trong 
                        2-3 ngày làm việc đối với các tỉnh khác. Tuy nhiên, vẫn có những sự chậm trễ do nguyên nhân khách quan (lễ, tết, địa chỉ nhận hàng khó tìm, sự chậm trễ từ 
                        dịch vụ chuyển phát…), rất mong bạn có thể thông cảm vì những lý do ngoài sự chi phối của chúng tôi.</li>
                    <li>Chúng tôi sẽ báo ngay đến bạn nếu có sự chậm trễ khi giao hàng, nhưng trong phạm vi pháp luật cho phép, chúng tôi sẽ không chịu trách nhiệm cho bất cứ tổn 
                        thất nào, các khoản nợ, thiệt hại hoặc chi phí phát sinh từ việc giao hàng trễ.</li>
                    <li>Khi nhận sản phẩm, Bạn vui lòng kiểm tra kỹ sản phẩm trước khi ký nhận hàng hóa. Bạn nên giữ lại Hóa đơn mua hàng để làm bằng chứng trong trường hợp muốn 
                        liên hệ lại về sản phẩm đã mua.</li>
                </ul>
            </div>
        </div >
    );
};

export default ShippingPolicy;