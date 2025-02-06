import React from "react";

const InformationSecurityPolicy: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-normal text-gray-800 mx-auto">
            <div className="bg-gray-100 px-4 py-2 text-sm text-gray-400 my-1">
                <a
                    href="/"
                    className="text-black font-semibold hover:underline"
                >
                    Trang chủ
                </a>{" "}
                / Chính sách bảo mật thông tin /
            </div>
            <div className="px-4 py-8">
                <a href="/pages/chinh-sach-bao-mat-thong-tin">
                    <h1 className="text-2xl font-bold mb-8">Chính sách bảo mật thông tin</h1>
                </a>

                <div className="py-4">
                    <p className="font-bold mb-4">Chính sách bảo mật thông tin</p>
                    <p className="mb-4">
                        <span className="font-bold mb-4">Mục đích và phạm vi thu thập thông tin cá nhân</span>
                        <br></br>
                        <span>Shop Dược Mỹ Phẩm cam kết không cung cấp hay chia sẻ bất cứ thông tin cá nhân nào của khách hàng cho bên thứ ba. Trong quá trình bán hàng, Shop Dược 
                            Mỹ Phẩm thực hiện thu nhập thông tin cá nhân để:</span>
                    </p>
                    <ul className="list-disc pl-10 mb-4">
                            <li>Xác nhận đơn hàng và giao hàng cho Bạn khi mua hàng tại Shop Dược Mỹ Phẩm.</li>
                            <li>Hỗ trợ khách hàng trong suốt quá trình mua hàng và sử dụng dịch vụ tại Shop Dược Mỹ Phẩm.</li>
                            <li>Cung cấp thông tin hữu ích về sản phẩm và các Chương trình khuyến mãi.</li>
                            <li>Shop Dược Mỹ Phẩm có thể chia sẻ tên và địa chỉ của Bạn cho dịch vụ chuyển phát nhanh để có thể giao hàng cho Bạn.</li>
                    </ul>

                    <p className="mb-4">
                        <span className="font-bold mb-4">Thông tin cá nhân thu thập</span>
                        <br></br>
                        <span>Khi bạn đăng ký tài khoản với Shop Dược Mỹ Phẩm, thông tin cá nhân mà chúng tôi thu thập bao gồm: Họ và tên, email; khi Bạn đặt hàng chúng tôi thu thập 
                            thêm thông tin về số điện thoại, địa chỉ, địa chỉ giao hàng. Shop Dược Mỹ Phẩm không thu thập thông tin về thẻ thanh toán, về tài khoản ngân hàng, tài khoản 
                            ví của Bạn cho dù Bạn thực hiện thanh toán online; khi Bạn thực hiện thanh toán Online thì giao dịch sẽ diễn ra giữa Bạn và trang web của Ngân hàng hay Nhà 
                            cung cấp dịch vụ thanh toán.</span>
                    </p>
                    <p className="mb-4">
                        <span className="font-bold mb-4">Cập nhật thông tin cá nhân</span>
                        <br></br>
                        <span>Bạn có thể cập nhật thông tin cá nhân của mình bất kỳ lúc nào bằng cách đăng nhập vào trang web Shop Dược Mỹ Phẩm.</span>
                    </p>
                    <p className="mb-4">
                        <span className="font-bold mb-4">Bảo mật thông tin cá nhân</span>
                        <br></br>
                        <span>Shop Dược Mỹ Phẩm đảm bảo rằng mọi thông tin thu thập được sẽ được lưu giữ an toàn. Các thông tin cá nhân của khách hàng sẽ được chúng tôi sử dụng đúng mục đích.</span>
                        <span>Mọi thắc mắc hay khiếu nại liên quan tới chính sách bảo mật, xin vui lòng liên hệ với chúng tôi qua số điện thoại 0918 088 123 hay email myphameucerin@gmail.com</span>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default InformationSecurityPolicy;