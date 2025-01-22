import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import { normalizeCartData } from '../../utils/normalizeCart';
import { Footer } from '../../components/Footer';
import { getAccessToken } from 'zmp-sdk';

// Định nghĩa kiểu dữ liệu cho thông tin hóa đơn
interface InvoiceInfo {
    companyName: string;
    taxCode: string;
    address: string;
    email: string;
}

// Component hiển thị giỏ hàng
const CartPage: React.FC = () => {
    const [cartData, setCartData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    // Trạng thái checkbox "Xuất hóa đơn"
    const [isInvoiceChecked, setIsInvoiceChecked] = useState<boolean>(false);

    // Trạng thái dữ liệu hóa đơn
    const [invoiceInfo, setInvoiceInfo] = useState<InvoiceInfo>({
        companyName: "",
        taxCode: "",
        address: "",
        email: "",
    });

    const [isConfirmPopupVisible, setIsConfirmPopupVisible] = useState<boolean>(false);

    // Hiển thị popup khi bấm nút Thanh toán
    function handlePaymentClick(e: React.FormEvent) {
        e.preventDefault();
        if (isInvoiceChecked) {
            if (!validateInvoiceInfo()) return;
            setIsConfirmPopupVisible(true);
        } else {
            handleSubmit(e);
        }
    }

    // Đóng popup khi bấm "Kiểm tra lại"
    function handleClosePopup() {
        setIsConfirmPopupVisible(false);
    }

    useEffect(() => {
        // Hàm gọi API lấy dữ liệu giỏ hàng
        function fetchCartData() {
            getAccessToken().then(accessToken => {
                fetch('https://shopduocmypham.com/cart.js', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'zalo-access-token': `Bearer ${accessToken}`,
                    },
                    credentials: 'include'  // Giữ đăng nhập session khi gọi API
                })
                    .then(function (response) {
                        if (!response.ok) {
                            throw new Error('Lỗi khi lấy dữ liệu từ API');
                        }
                        return response.json();
                    })
                    .then(function (data) {
                        setCartData(normalizeCartData(data));
                    })
                    .then(function () {
                        setLoading(false);
                    })
                    .catch(function (error) {
                        setError('Không thể tải dữ liệu giỏ hàng.'); console.error('Lỗi:', error);
                    })
            }).catch((error) => {
                console.error('Lỗi khi lấy access token:', error);
            });
        }
        fetchCartData();
    }, []);

    if (loading) return <p>Đang tải dữ liệu...</p>;
    if (error) return <p>{error}</p>;

    const updateQuantity = function (product_id: number, quantity: number) {
        getAccessToken().then(accessToken => {
            fetch('https://shopduocmypham.com/cart/change.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'zalo-access-token': `Bearer ${accessToken}`,
                },
                credentials: 'include',
                body: JSON.stringify({ id: product_id, quantity })
            })
                .then(function () {
                    return fetch('https://shopduocmypham.com/cart.js');
                })
                .then(function (updatedCart) {
                    return updatedCart.json();
                })
                .then(function (data) {
                    setCartData(normalizeCartData(data));
                })
                .catch(function (error) {
                    console.error('Lỗi cập nhật giỏ hàng:', error);
                });
        });
    };

    const handleQuantityChange = function (product_id: number, newQuantity: number) {
        if (newQuantity < 1) {
            newQuantity = 1;
        }
        updateQuantity(product_id, newQuantity);
    };

    // Xử lý thay đổi checkbox "Xuất hóa đơn"
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsInvoiceChecked(e.target.checked);
    };

    // Xử lý nhập liệu vào form hóa đơn
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInvoiceInfo({ ...invoiceInfo, [name]: value });
    };

    const validateInvoiceInfo = (): boolean => {
        if (!invoiceInfo.companyName || !invoiceInfo.taxCode || !invoiceInfo.address || !invoiceInfo.email) {
            alert("Vui lòng điền đầy đủ thông tin hóa đơn.");
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(invoiceInfo.email)) {
            alert("Email không hợp lệ!");
            return false;
        }
        return true;
    };

    const handleSubmit = function (e: React.FormEvent) {
        e.preventDefault();

        if (isInvoiceChecked && !validateInvoiceInfo()) return;

        interface CartItem {
            id: number;
            title: string;
            price: number;
            line_price: number,
            quantity: number;
            image?: string;
            url?: string;
        }

        getAccessToken().then(function (accessToken) {
            var checkoutData = {
                ...cartData,
                total_price: cartData.total_price / 100,
                attributes: isInvoiceChecked
                    ? {
                        "Xuất hóa đơn": "có",
                        "Tên công ty": invoiceInfo.companyName,
                        "Mã số thuế": invoiceInfo.taxCode,
                        "Địa chỉ công ty": invoiceInfo.address,
                        "Email nhận hóa đơn": invoiceInfo.email
                    }
                    : null,
                items: cartData.items.map(function (item: CartItem) {
                    return {
                        id: item.id,
                        title: item.title,
                        price: item.price / 100,
                        line_price: item.line_price / 100,
                        quantity: item.quantity
                    };
                })
            };

            fetch("https://shopduocmypham.com/checkouts.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "zalo-access-token": "Bearer " + accessToken
                },
                credentials: 'include',
                body: JSON.stringify(checkoutData)
            })
                .then(function (response) {
                    if (!response.ok) throw new Error("Lỗi khi gửi dữ liệu giỏ hàng.");
                    return response.json();
                })
                .then(function (result) {
                    window.location.href = `https://shopduocmypham.com/checkouts/${result.checkout_session_id}`;
                })
                .catch(function (error) {
                    alert("Chuyển trang thất bại. Vui lòng thử lại.");
                    console.error("Lỗi:", error);
                });
        }).catch(function (error) {
            alert("Không thể lấy access token. Vui lòng thử lại.");
            console.error("Lỗi:", error);
        });
    };

    return (
        <div className="bg-white min-h-screen">
            <Header />

            <div className="bg-gray-100 px-4 py-2 text-sm text-gray-600 mb-4">
                <a
                    href="/"
                    className="text-black font-semibold hover:underline"
                >
                    Trang chủ
                </a>{" "}
                / Giỏ hàng ({cartData.item_count})
            </div>
            <ul>
                {cartData && cartData.item_count > 0 ? (
                    <form className="px-4">
                        {cartData.items.map((product: any) => (
                            <li key={product.id} style={{ marginBottom: '20px' }}>
                                <div className="flex items-center justify-between py-2 border-b border-gray-200 block">
                                    {/* Nút xóa sản phẩm */}
                                    <button
                                        type="button"
                                        className="text-gray-500 text-lg font-bold mr-2 place-items-start"
                                        onClick={() => updateQuantity(product.product_id, 0)}
                                    >
                                        ×
                                    </button>

                                    {/* Hình ảnh sản phẩm */}
                                    <div className="w-1/4 flex-grow block">
                                        <div>
                                            <a href={`/products/${product.handle}`}>
                                                <img src={product.image} alt={product.title} className="w-32 h-auto object-cover block" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Thông tin sản phẩm */}
                                    <div className="w-3/4 flex-grow">
                                        <a href={`/products/${product.handle}`}>
                                            <div
                                                className="text-sm font-semibold text-gray-800 hover:text-green-500"
                                                title={product.title}>{product.title}</div>
                                        </a>
                                        <div className="flex">
                                            {/* Tỏng giá của biến thể sản phẩm */}
                                            <div className="w-1/2 text-sm text-red-500 font-bold">
                                                {(product.line_price / 100).toLocaleString()} VND
                                            </div>

                                            {/* Điều chỉnh số lượng */}
                                            <div className="w-1/2 flex justify-end items-center space-x-2">
                                                {/* Nút giảm số lượng */}
                                                <button
                                                    type="button"
                                                    className={`w-8 h-8 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 flex justify-center items-center`}
                                                    onClick={() => handleQuantityChange(product.product_id, product.quantity - 1)}
                                                >
                                                    −
                                                </button>

                                                {/* Số lượng hiển thị*/}
                                                <input
                                                    type="number"
                                                    value={product.quantity}
                                                    min={1}
                                                    className="w-12 text-center border-gray-300 rounded"
                                                    onChange={(e) => handleQuantityChange(product.product_id, parseInt(e.target.value) || 0)}
                                                />

                                                {/* Nút tăng số lượng */}
                                                <button
                                                    type="button"
                                                    className={`w-8 h-8 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 flex justify-center items-center`}
                                                    onClick={() => handleQuantityChange(product.product_id, product.quantity + 1)}

                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}

                        <label htmlFor="invoice-checkbox" className="flex items-center mt-4">
                            {/* Checkbox ẩn đi, sử dụng peer để áp dụng hiệu ứng khi tick */}
                            <input
                                id="invoice-checkbox"
                                type="checkbox"
                                className="peer hidden"
                                checked={isInvoiceChecked}
                                onChange={handleCheckboxChange}
                            />

                            {/* Ô checkbox tùy chỉnh */}
                            <div className="w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center peer-checked:border-red-500 peer-checked:bg-red-500 transition">
                                {isInvoiceChecked && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-white"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M20.707 5.293a1 1 0 0 1 0 1.414L10 17.414l-5.707-5.707a1 1 0 0 1 1.414-1.414L10 14.586l9.293-9.293a1 1 0 0 1 1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </div>

                            <span className="ml-2 text-gray-800">Xuất hóa đơn công ty</span>
                        </label>

                        {
                            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isInvoiceChecked ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} space-y-4 mb-4`}>
                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                                        Tên công ty
                                    </label>
                                    <input
                                        id="companyName"
                                        type="text"
                                        name="companyName"
                                        autoComplete="organization"
                                        className="w-full p-2 bg-transparent border border-gray-300 rounded outline-none"
                                        placeholder="Tên công ty"
                                        value={invoiceInfo.companyName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="taxCode" className="block text-sm font-medium text-gray-700">
                                        Mã số thuế
                                    </label>
                                    <input
                                        id="taxCode"
                                        type="text"
                                        name="taxCode"
                                        autoComplete="tax-id"
                                        className="w-full p-2 bg-transparent border border-gray-300 rounded outline-none"
                                        placeholder="Mã số thuế"
                                        value={invoiceInfo.taxCode}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                        Địa chỉ công ty
                                    </label>
                                    <textarea
                                        id="address"
                                        name="address"
                                        autoComplete="address"
                                        className="w-full p-2 bg-transparent border border-gray-300 rounded outline-none"
                                        placeholder="Nhập địa chỉ công ty (bao gồm Phường/Xã, Quận/Huyện, Tỉnh/Thành phố nếu có)"
                                        value={invoiceInfo.address}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email nhận hóa đơn
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        className="w-full p-2 bg-transparent border border-gray-300 rounded outline-none"
                                        placeholder="Email nhận hóa đơn"
                                        value={invoiceInfo.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                        }

                        {/* Nút thanh toán */}
                        <button
                            type="button"
                            className="w-full bg-red-500 text-white py-2 rounded mb-4"
                            onClick={isInvoiceChecked ? handlePaymentClick : handleSubmit}
                        >
                            Thanh Toán
                        </button>



                        {/* Phương thức thanh toán */}
                        <div className="mb-10">
                            <h3 className="text-lg font-bold mb-2">Phương thức thanh toán</h3>
                            <a href="/" className="block">
                                <img
                                    src="//theme.hstatic.net/1000097940/1000899682/14/footer_trustbadge.jpg?v=276"
                                    alt="Paid methods"
                                    className="w-60 h-auto"
                                />
                            </a>
                        </div>

                        {/* Thanh navbar */}
                        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 flex justify-between items-center">
                            <div>
                                <button
                                    className="bg-red-500 text-white px-6 py-2 rounded-full text-lg flex"
                                    onClick={isInvoiceChecked ? handlePaymentClick : handleSubmit}
                                >
                                    Thanh Toán
                                    <span className="ml-1 text-lg font-semibold text-white-800">
                                        {(cartData.total_price / 100).toLocaleString()}₫
                                    </span>
                                </button>
                                <span className="text-sm text-gray-500 italic mt-1 center">
                                    (Đã bao gồm VAT nếu có)
                                </span>
                            </div>
                        </div>
                        {isConfirmPopupVisible && (
                            <div id="confirmPopup" className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h2>Bạn có chắc muốn xuất hóa đơn?</h2>
                                    <p>Hãy kiểm tra lại thông tin hóa đơn của mình thật chính xác!</p>
                                    <button onClick={handleClosePopup} className="bg-gray-300 px-4 py-2 rounded mr-2">Kiểm tra lại</button>
                                    <button onClick={handleSubmit} className="bg-red-500 text-white px-4 py-2 rounded">Có, tiến hành thanh toán</button>
                                </div>
                            </div>
                        )}
                    </form>
                ) : (
                    <div className="flex flex-col items-center justify-center h-screen text-center">
                        <div className="mb-4">
                            <img
                                src="//theme.hstatic.net/1000097940/1000899682/14/cart_empty_background.png?v=276"
                                alt="Empty cart icon"
                                className="w-max h-auto"
                            />
                        </div>
                        <h1 className="text-xl font-semibold mb-2 text-gray-800">
                            “Hổng” có gì trong giỏ hết
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!
                        </p>
                        <a
                            href="/"
                            className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg hover:bg-green-600 transition"
                        >
                            Mua sắm ngay
                        </a>
                    </div>
                )}
            </ul>
            <Footer />
        </div>
    );
};

export default CartPage;
