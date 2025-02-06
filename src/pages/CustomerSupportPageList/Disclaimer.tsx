import React from "react";

const Disclaimer: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-normal text-gray-800 mx-auto">
            <div className="bg-gray-100 px-4 py-2 text-sm text-gray-400 my-1">
                <a
                    href="/"
                    className="text-black font-semibold hover:underline"
                >
                    Trang chủ
                </a>{" "}
                / Tuyên bố miễn trừ trách nhiệm /
            </div>
            <div className="px-4 py-8">
                <a href="/pages/tuyen-bo-mien-tru-trach-nhiem">
                    <h1 className="text-2xl font-bold mb-8">Tuyên bố miễn trừ trách nhiệm</h1>
                </a>
                <p className="font-bold mb-4">Tuyên bố miễn trừ trách nhiệm</p>
                <p className="mb-4">Shop Dược Mỹ Phẩm cam kết cung cấp sản phẩm chính hãng và cung cấp thông tin trung thực về sản phẩm theo như thông tin của Nhà sản
                    xuất sản phẩm. Shop Dược Mỹ Phẩm Không chịu trách nhiệm với các trường hợp sau đây:</p>
                <ul className="list-disc pl-10 mb-4">
                    <li>Các sản phẩm có công dụng đặc trị cụ thể như: kem dưỡng, tinh chất,... sẽ cho ra các kết quả khác nhau tùy thuộc vào cơ địa của từng người khác 
                        nhau. Vì vậy, Shop Dược Mỹ Phẩm không cam kết một kết quả cụ thể nào đối với những sản phẩm này. Khách hàng có thể tham khảo các tư vấn của Shop 
                        Dược Mỹ Phẩm trước khi quyết định chọn mua sản phẩm phù hợp với khách hàng.</li>
                    <li>Đối với các hình ảnh minh họa "Trước khi dùng - Sau khi dùng", khách hàng lưu ý đây là những hình ảnh dựa trên số đông người dùng có các cơ địa 
                        hoàn toàn khác nhau, bên cạnh đó, phải kết hợp với việc sử dụng đúng cách. Vì vậy, Shop Dược Mỹ Phẩm không cam kết một kết quả cụ thể như hình ảnh 
                        "Trước - Sau", mà thay vào đó chỉ dùng để tham khảo.</li>
                    <li>Các sản phẩm có nội dung chống chỉ định đi kèm như: không dùng cho phụ nữ mang thai, trẻ em dưới 3 tháng tuổi, người quá mẫn cảm với thành phần xyz,.... 
                        khách hàng vui lòng đọc kỹ trong nội dung bài viết. Shop Dược Mỹ Phẩm không chịu trách nhiệm trong trường hợp khách hàng không làm theo yêu cầu hướng 
                        dẫn của nhà sản xuất chỉ định.</li>
                </ul>
            </div>
        </div >
    );
};

export default Disclaimer;