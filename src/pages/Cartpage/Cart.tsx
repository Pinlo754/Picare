import React, { useState } from "react";
import Header from "../../components/header";
import CartProduct from "./CartProduct";
import { Footer } from "../../components/Footer";
import { Product } from "../../types/ProductTypes";

const Cart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([
    {
      id: "1",
      title: "Sản phẩm 1",
      handle: "san-pham-1",
      product_type: "Điện thoại",
      tags: "tag1,tag2",
      variants: [
        {
          id: "101",
          title: "Biến thể 1",
          price: 100000,
          compare_at_price: 120000,
          sku: "SKU-001",
          barcode: "123456789",
          inventory_quantity: 10,
          inventory_policy: "deny",
          requires_shipping: true,
          taxable: true,
        },
      ],
      images: [{ src: "" }],
      description: "Mô tả sản phẩm 1",
    },
    {
      id: "2",
      title: "Sản phẩm 2",
      handle: "san-pham-2",
      product_type: "Điện thoại",
      tags: "tag3,tag4",
      variants: [
        {
          id: "102",
          title: "Biến thể 1",
          price: 150000,
          compare_at_price: 180000,
          sku: "SKU-002",
          barcode: "987654321",
          inventory_quantity: 5,
          inventory_policy: "deny",
          requires_shipping: true,
          taxable: true,
        },
      ],
      images: [{ src: "" }],
      description: "Mô tả sản phẩm 2",
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
    (total, item) => total + (item.variants[0]?.price || 0) * (item.variants[0]?.inventory_quantity || 0),
    0
  );

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const totalItems = cart.reduce(
    (total, item) => total + (item.variants[0]?.inventory_quantity || 0),
    0
  );

  // Xử lý tăng số lượng sản phẩm
  const handleIncrease = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
            ...item,
            variants: item.variants.map((variant) => ({
              ...variant,
              inventory_quantity: Math.min(variant.inventory_quantity + 1, 10),
            })),
          }
          : item
      )
    );
  };

  // Xử lý giảm số lượng sản phẩm
  const handleDecrease = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
            ...item,
            variants: item.variants.map((variant) => ({
              ...variant,
              inventory_quantity: Math.max(variant.inventory_quantity - 1, 1),
            })),
          }
          : item
      )
    );
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
            ...item,
            variants: item.variants.map((variant) => ({
              ...variant,
              inventory_quantity: quantity,
            })),
          }
          : item
      )
    );
  };

  // Xử lý xóa sản phẩm khỏi giỏ hàng
  const handleRemove = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Xử lý thay đổi thông tin xuất hóa đơn
  const handleInvoiceInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInvoiceInfo((prev) => ({ ...prev, [name]: value }));

    // Kiểm tra lỗi
    if (isInvoiceRequested) {
      setInvoiceErrors((prev) => ({
        ...prev,
        [name]: validateInvoiceField(name, value),
      }));
    }
  };

  // lưu các thông báo lỗi cho từng trường trong form xuất hóa đơn công ty
  const [invoiceErrors, setInvoiceErrors] = useState({
    companyName: "",
    taxCode: "",
    address: "",
    email: "",
  });

  // kiểm tra lỗi khi nhập liệu và khi gửi form xuất hóa đơn công ty
  const validateInvoiceField = (name: string, value: string) => {
    if (!value.trim()) {
      return "Bạn không được để trống trường này";
    }
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      return "Email không hợp lệ";
    }
    return "";
  };

  // kiểm tra toàn bộ form xuất hóa đơn công ty
  const validateInvoiceInfo = () => {
    const errors: typeof invoiceErrors = {
      companyName: "",
      taxCode: "",
      address: "",
      email: "",
    };

    if (isInvoiceRequested) {
      for (const [name, value] of Object.entries(invoiceInfo)) {
        errors[name as keyof typeof invoiceErrors] = validateInvoiceField(name, value);
      }
    }

    setInvoiceErrors(errors);

    return Object.values(errors).every((error) => !error); // Trả về true nếu không có lỗi
  };

  // Gửi đơn hàng đến trang checkout
  const handleSubmitOrder = async () => {
    if (validateInvoiceInfo()) {
      alert("Đến trang checkout.");
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
            <form action="/checkout" method="post">
              {/* Danh sách sản phẩm */}
              <div className="mb-4">
                {cart.map((product) => (
                  <CartProduct
                    key={product.id}
                    product={product}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onRemove={handleRemove}
                    onUpdateQuantity={handleUpdateQuantity}
                  />
                ))}
              </div>

              {/* Ghi chú đơn hàng */}
              <textarea
                id="order-note"
                name="orderNote"
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
                  name="invoice"
                  className="mr-2"
                  checked={isInvoiceRequested}
                  onChange={(e) => setIsInvoiceRequested(e.target.checked)}
                />
                <label htmlFor="invoice" className="text-sm">
                  Xuất hóa đơn công ty
                </label>
              </div>

              {/* Form xuất hóa đơn */}

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isInvoiceRequested ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} space-y-4 mb-4`}>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Tên công ty
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    autoComplete="organization"
                    className="w-full p-2 bg-transparent border border-gray-300 rounded outline-none"
                    placeholder="Tên công ty"
                    value={invoiceInfo.companyName}
                    onChange={handleInvoiceInfoChange}
                  />
                  {invoiceErrors.companyName && (
                    <p className="text-red-500 text-sm mt-1">{invoiceErrors.companyName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="taxCode" className="block text-sm font-medium text-gray-700">
                    Mã số thuế
                  </label>
                  <input
                    type="text"
                    id="taxCode"
                    name="taxCode"
                    autoComplete="tax-id"
                    className="w-full p-2 bg-transparent border border-gray-300 rounded outline-none"
                    placeholder="Mã số thuế"
                    value={invoiceInfo.taxCode}
                    onChange={handleInvoiceInfoChange}
                  />
                  {invoiceErrors.taxCode && (
                    <p className="text-red-500 text-sm mt-1">{invoiceErrors.taxCode}</p>
                  )}
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
                    onChange={handleInvoiceInfoChange}
                  ></textarea>
                  {invoiceErrors.address && (
                    <p className="text-red-500 text-sm mt-1">{invoiceErrors.address}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email nhận hóa đơn
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="w-full p-2 bg-transparent border border-gray-300 rounded outline-none"
                    placeholder="Email nhận hóa đơn"
                    value={invoiceInfo.email}
                    onChange={handleInvoiceInfoChange}
                  />
                  {invoiceErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{invoiceErrors.email}</p>
                  )}
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
                <span className="text-sm text-gray-500 italic mt-1 center">
                  (Đã bao gồm VAT nếu có)
                </span>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
