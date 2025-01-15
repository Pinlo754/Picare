import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header";
import CartProduct from "../../components/CartProduct";
import { Product } from "../../types/Product";

const Cart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([
    {
      id: "1",
      name: "Sản phẩm 1",
      price: 100000,
      quantity: 1,
      stock: 10,
      image: "",
    },
    {
      id: "2",
      name: "Sản phẩm 2",
      price: 150000,
      quantity: 1,
      stock: 5,
      image: "",
    },
  ]);

  const [note, setNote] = useState<string>(""); // Ghi chú đơn hàng
  const [isInvoiceRequested, setIsInvoiceRequested] = useState(false); // Trạng thái checkbox xuất hóa đơn
  const [invoiceInfo, setInvoiceInfo] = useState({
    companyName: "",
    taxCode: "",
    address: "",
    email: "",
  });

  // Tính tổng giá trị của giỏ hàng
  const totalCartPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Xử lý tăng số lượng sản phẩm
  const handleIncrease = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
          : item
      )
    );
  };

  // Xử lý giảm số lượng sản phẩm
  const handleDecrease = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  // Xử lý xóa sản phẩm khỏi giỏ hàng
  const handleRemove = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Xử lý thay đổi thông tin xuất hóa đơn
  const handleInvoiceInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInvoiceInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Gửi đơn hàng đến Haravan API
  const handleSubmitOrder = async () => {
    try {
      // Tạo dữ liệu đơn hàng
      const orderData = {
        order: {
          line_items: cart.map((item) => ({
            product_id: item.id, // ID sản phẩm
            quantity: item.quantity, // Số lượng
            price: item.price, // Giá sản phẩm
          })),
          note: note, // Ghi chú đơn hàng
          billing_address: {
            company: invoiceInfo.companyName,
            tax_code: invoiceInfo.taxCode,
            address: invoiceInfo.address,
            email: invoiceInfo.email,
          },
        },
      };

      // Gửi yêu cầu POST đến Haravan API
      const response = await axios.post(
        "https://apis.haravan.com/com/orders.json",
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_ACCESS_TOKEN", // Thay YOUR_ACCESS_TOKEN bằng Access Token của bạn
          },
        }
      );

      // Xử lý phản hồi từ API
      console.log("Order created successfully:", response.data);
      alert("Đơn hàng đã được tạo thành công!");
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Đã xảy ra lỗi khi tạo đơn hàng.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />


      <div className="bg-gray-100 px-4 py-2 text-sm text-gray-600 mb-4">
        <a
          href="/"
          className="text-black font-semibold hover:underline"
        >
          Trang chủ
        </a>{" "}
        / Giỏ hàng ({totalItems})
      </div>


      <div className="p-4">
        {cart.length === 0 ? (
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
        ) : (
          <>
            <form action="/cart" method="post">
              {/* Danh sách sản phẩm */}
              <div className="mb-4">
                {cart.map((product) => (
                  <CartProduct
                    key={product.id}
                    product={product}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onRemove={handleRemove}
                  />
                ))}
              </div>

              {/* Ghi chú đơn hàng */}
              <textarea
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Ghi chú đơn hàng"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>

              {/* Xuất hóa đơn */}
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="invoice"
                  className="mr-2"
                  checked={isInvoiceRequested}
                  onChange={(e) => setIsInvoiceRequested(e.target.checked)}
                />
                <label htmlFor="invoice" className="text-sm">
                  Xuất hóa đơn công ty
                </label>
              </div>

              {/* Form xuất hóa đơn */}

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isInvoiceRequested ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                } space-y-4 mb-4`}>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Tên công ty
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Tên công ty"
                    value={invoiceInfo.companyName}
                    onChange={handleInvoiceInfoChange}
                  />
                </div>

                <div>
                  <label htmlFor="taxCode" className="block text-sm font-medium text-gray-700">
                    Mã số thuế
                  </label>
                  <input
                    type="text"
                    id="taxCode"
                    name="taxCode"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Mã số thuế"
                    value={invoiceInfo.taxCode}
                    onChange={handleInvoiceInfoChange}
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Địa chỉ công ty
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Nhập địa chỉ công ty (bao gồm Phường/Xã, Quận/Huyện, Tỉnh/Thành phố nếu có)"
                    value={invoiceInfo.address}
                    onChange={handleInvoiceInfoChange}
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email nhận hóa đơn
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Email nhận hóa đơn"
                    value={invoiceInfo.email}
                    onChange={handleInvoiceInfoChange}
                  />
                </div>
              </div>

              {/* Nút thanh toán */}
              <button
                type="button"
                className="w-full bg-red-500 text-white py-2 rounded"
                onClick={handleSubmitOrder}
              >
                Thanh Toán
              </button>

              {/* Phương thức thanh toán */}
              <div className="justify-center space-x-4 mb-20">
                <h3 className="text-lg font-bold mb-2">Phương thức thanh toán</h3>
                <a href="/">
                  <img
                    src="//theme.hstatic.net/1000097940/1000899682/14/footer_trustbadge.jpg?v=276"
                    alt="Paid methods"
                    className="w-245 h-53"
                  />
                </a>
              </div>

            </form>
            {/* Thanh navbar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 flex justify-between items-center">
              <div>
                <button
                  className="bg-red-500 text-white px-6 py-2 rounded-full text-lg flex"
                  onClick={handleSubmitOrder} // Gọi API khi nhấn
                >
                  Thanh Toán
                  <span className="ml-1 text-lg font-semibold text-white-800">
                    {totalCartPrice.toLocaleString()}₫
                  </span>
                </button>
                <span className="text-sm text-gray-500 italic mt-1 justify-center">
                  (Đã bao gồm VAT nếu có)
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
