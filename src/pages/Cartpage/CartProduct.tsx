import React, { useEffect, useState } from "react";
import { Product } from "../../types/ProductTypes";

interface CartItemProps {
  product: Product;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartProduct: React.FC<CartItemProps> = ({
  product,
  onIncrease,
  onDecrease,
  onRemove,
  onUpdateQuantity,
}) => {
  // Trích xuất thông tin từ biến thể đầu tiên
  const variant = product.variants[0]; // Sử dụng biến thể đầu tiên
  const [tempQuantity, setTempQuantity] = useState<string>(
    variant.inventory_quantity.toString()
  );

  useEffect(() => {
    setTempQuantity(variant.inventory_quantity.toString());
  }, [variant.inventory_quantity]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setTempQuantity(value);
    } // Cho phép xóa hoặc nhập lại số
    
  };

  const handleBlurOrEnter = () => {
    const quantity = parseInt(tempQuantity, 10); // Chuyển chuỗi sang số

    if (isNaN(quantity) || quantity <= 0) {
      // Nếu không nhập gì hoặc nhập bé hơn hoặc bằng 0 → Xóa sản phẩm
      onRemove(product.id);
    } else if (variant && quantity > variant.inventory_quantity) {
      // Nếu số lượng lớn hơn tồn kho → Đặt số lượng = tồn kho
      onUpdateQuantity(product.id, variant.inventory_quantity);
    } else {
      // Nếu số hợp lệ (1 → stock) → Cập nhật số lượng
      onUpdateQuantity(product.id, quantity);
    }

    setTempQuantity(""); // Reset giá trị tạm thời
  };

  const totalPrice = variant.price * parseInt(tempQuantity || "0", 10); // Tính tổng giá
  const productImage = product.images[0]?.src || ""; // Lấy ảnh đầu tiên

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-200">
      {/* Nút xóa sản phẩm */}
      <button
        type="button"
        className="text-red-500 text-lg font-bold mr-2"
        onClick={(e) => {
          e.preventDefault();
          onRemove(product.id)
        }}
      >
        ×
      </button>

      {/* Hình ảnh sản phẩm */}
      <img
        src={productImage}
        alt={product.title}
        className="w-16 h-16 object-cover mr-4"
      />

      {/* Thông tin sản phẩm */}
      <div className="flex-grow">
        <div
          className="text-sm font-semibold text-gray-800"
          title={product.title}>{product.title}</div>
        <div className="text-sm text-red-500 font-bold">
          {totalPrice.toLocaleString()}₫ {/* Hiển thị tổng giá */}
        </div>
      </div>

      {/* Điều chỉnh số lượng */}
      <div className="flex items-center space-x-4">
        {/* Nút giảm số lượng */}
        <button
          type="button"
          className={`w-8 h-8 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 flex justify-center items-center 
              ${parseInt(tempQuantity, 10) === 1 
                ? "opacity-50 cursor-not-allowed" 
                : ""
            }`}
          onClick={(e) => {
            e.preventDefault();
            onDecrease(product.id);
          }}
          disabled={parseInt(tempQuantity, 10) === 1}
        >
          −
        </button>

        {/* Số lượng hiển thị*/}
        <input
          type="text"
          id={`quantity-${product.id}`}
          name={`quantity-${product.id}`}
          value={tempQuantity}
          onChange={handleQuantityChange}
          onBlur={handleBlurOrEnter}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleBlurOrEnter();
          }}
          className="text-center w-12 bg-transparent rounded outline-none"
        />

        {/* Nút tăng số lượng */}
        <button
          type="button"
          className={`w-8 h-8 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 flex justify-center items-center ${
            variant && parseInt(tempQuantity, 10) === variant.inventory_quantity
              ? "opacity-50 cursor-not-allowed"
              : ""
            }`}
          onClick={(e) => {
            e.preventDefault();
            onIncrease(product.id);
          }}
          disabled={
            variant &&
            parseInt(tempQuantity, 10) === variant.inventory_quantity
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
