import React from "react";

const ReturnPolicy: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-normal text-gray-800 mx-auto">
            <div className="bg-gray-100 px-4 py-2 text-sm text-gray-400 my-1">
                <a
                    href="/"
                    className="text-black font-semibold hover:underline"
                >
                    Trang chủ
                </a>{" "}
                / Chính sách đổi trả /
            </div>
            <div className="px-4 py-8">
                <a href="/pages/chinh-sach-doi-tra">
                    <h1 className="text-2xl font-bold mb-8">Chính sách đổi trả</h1>
                </a>

                <p className="mb-4">
                    Shop Dược Mỹ Phẩm cam kết cung cấp sản phẩm Chính hãng.
                </p>
                <p className="mb-4">
                    Shop Dược Mỹ Phẩm đảm bảo chính sách đổi trả hàng trong vòng 7 ngày kể từ ngày Bạn nhận được hàng và theo những điều khoản và điều kiện sau đây:
                </p>

                {/* Điều kiện đổi trả sản phẩm */}
                <p className="pl-10">
                    <h2 className="italic text-lg font-semibold mb-2">Điều kiện đổi trả sản phẩm</h2>
                    <ul className="list-disc pl-10 space-y-2">
                        <li>
                            Thực hiện đổi trả trong vòng 7 ngày kể từ ngày nhận hàng, tính theo thời gian gửi trả hàng trên phiếu gửi trả hàng của Bưu điện.
                        </li>
                        <li>
                            Shop Dược Mỹ Phẩm chỉ chấp nhận các lý do đổi trả sau:
                            <ul className="list-square pl-5 space-y-1 mt-2">
                                <li>Sản phẩm giao không đúng như đơn hàng của Bạn.</li>
                                <li>Sản phẩm bị bể vỡ, hư hỏng.</li>
                                <li>Sản phẩm khác với trên website, nghi ngờ không chính hãng.</li>
                            </ul>
                        </li>
                        <li>
                            Ngoài ra, sản phẩm phải thỏa các điều kiện sau:
                            <ul className="list-square pl-5 space-y-1 mt-2">
                                <li>Còn Hóa đơn bán hàng.</li>
                                <li>Còn nguyên vẹn (trừ trường hợp bị bể vỡ).</li>
                                <li>Còn tem mạc.</li>
                                <li>Còn đầy đủ các quà tặng kèm (nếu có).</li>
                            </ul>
                        </li>
                    </ul>

                    {/* Cách thức đổi trả hàng */}
                    <h2 className="italic text-lg font-semibold mt-6 mb-2">Cách thức đổi trả hàng</h2>
                    <ul className="list-disc pl-10 space-y-2">
                        <li>Bạn vui lòng điền vào “Phiếu hoàn trả sản phẩm" (có trong gói hàng).</li>
                        <li>Đóng gói sản phẩm + Hóa đơn bán hàng + Phiếu hoàn trả sản phẩm.</li>
                        <li>Gửi về địa chỉ: <em className="italic">540/20/9 Cách Mạng Tháng Tám, Phường 11, Quận 3, TP HCM</em>
                        {" "}(Bạn phải chịu khoản phí gửi hàng này).</li>
                    </ul>

                    {/* Sau khi Shop nhận được sản phẩm */}
                    <h2 className="text-lg font-semibold mt-6 mb-2">Sau khi nhận được sản phẩm hoàn trả, nếu mọi thông tin đều
                        chính xác, chúng tôi sẽ thực hiện đổi trả cho Bạn trong vòng 7 ngày theo một trong các phương thức sau:</h2>
                    <ul className="list-disc pl-10 space-y-2">
                        <li>Gửi cho Bạn sản phẩm theo như đơn hàng của Bạn.</li>
                        <li>Gửi cho Bạn sản phẩm tương đương theo như yêu cầu của Bạn trong Phiếu hoàn trả sản phẩm (Bạn phải thanh
                            toán thêm khoản chênh lệch nếu có).</li>
                        <li>Hoàn tiền vào tài khoản của Bạn (thông tin tài khoản trong Phiếu hoàn trả sản phẩm).</li>
                    </ul>
                </p>
                <p className="mt-4">
                    Shop Dược Mỹ Phẩm <a href="/" className="text-blue-700">http://shopduocmypham.com</a>
                </p>
                <p>
                    Kho hàng: <em className="italic">68/104A đường Đồng Nai, Phường 15, Quận 10, TP HCM</em>
                </p>
                <p className="pb-10">Điện thoại: 0918 088 123</p>
            </div>
        </div >
    );
};

export default ReturnPolicy;