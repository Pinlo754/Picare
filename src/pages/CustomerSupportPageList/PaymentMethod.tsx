import React from "react";

const PaymentMethod: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-normal text-gray-800 mx-auto">
            <div className="bg-gray-100 px-4 py-2 text-sm text-gray-400 my-1">
                <a
                    href="/"
                    className="text-black font-semibold hover:underline"
                >
                    Trang chủ
                </a>{" "}
                / Hình thức thanh toán /
            </div>
            <div className="px-4 py-8">
                <a href="/pages/hinh-thuc-thanh-toan">
                    <h1 className="text-2xl font-bold mb-8">Hình thức thanh toán</h1>
                </a>

                <div className="py-4">
                    <p className="font-bold mb-4">Shop Dược Mỹ Phẩm hỗ trợ các hình thức thanh toán sau:</p>
                    <ul className="list-decimal pl-4">
                        <li>Thanh toán bằng tiền mặt khi nhận hàng (COD)</li>
                        <li>Thanh toán bằng chuyển khoản
                        <br></br>
                            Sau khi đặt hàng Bạn thực hiện chuyển khoản với các thông tin sau:
                            <br></br>
                            <br></br>
                            Tên tài khoản cá nhân: <strong>NGUYỄN THÀNH TRUNG</strong>
                            <br></br>
                            <br></br>
                            Tài khoản số: <strong>04301015112349</strong>
                            <br></br>
                            <br></br>
                            Tại <strong>NGÂN HÀNG HÀNG HẢI VIỆT NAM ( MARITIME BANK)</strong>
                            <br></br>
                            <br></br>
                            Nội dung: Thanh toan don hang ###### (với ###### là mã số đơn hàng của Bạn).
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default PaymentMethod;