import React from 'react';
import CartItem from 'components/cart/CartItem';
import InvoiceForm from 'components/cart/InvoiceForm';
import { useCart } from '../../hooks/useCart';

// Component hiển thị giỏ hàng
const CartPage: React.FC = () => {
    const {
        cartData,
        error,
        isInvoiceChecked,
        isConfirmPopupVisible,
        invoiceInfo,
        handleQuantityChange,
        handleCheckboxChange,
        handleInputChange,
        handlePaymentClick,
        handleClosePopup,
        handleSubmit,
    } = useCart();

    if (error)
        return (
            <div className="bg-white min-h-screen text-gray-800 mx-auto">
                <div className="text-center pt-10 h-40">
                    <p className="text-red-500 mb-4">{error}</p>
                    <a
                        href="/"
                        className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg hover:bg-green-600 transition"
                    >
                        Quay lại trang chủ
                    </a>
                </div>
            </div>
        );

    return (
        <div className="bg-white min-h-screen text-gray-800 mx-auto">
            <div className="bg-gray-100 px-4 py-2 text-sm text-gray-600 mb-4">
                <a
                    href="/"
                    className="text-black font-semibold hover:underline"
                >
                    Trang chủ
                </a>{" "}
                / Giỏ hàng ({cartData ? cartData.item_count : 0})
            </div>

            <ul>
                {cartData && cartData.item_count > 0 ? (
                    <form className="px-4">
                        {cartData.items.map((product: any) => (
                            <CartItem
                                key={product.id}
                                product={product}
                                updateQuantity={handleQuantityChange}
                                handleQuantityChange={handleQuantityChange}
                            />
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
                        <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isInvoiceChecked ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} space-y-4 mb-4`}>
                            <InvoiceForm invoiceInfo={invoiceInfo} handleInputChange={handleInputChange} />
                        </div>
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
        </div>
    );
};

export default CartPage;
