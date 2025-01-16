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
  const [tempQuantity, setTempQuantity] = useState<string>(product.quantity.toString()); // Lưu giá trị nhập liệu dạng chuỗi

  useEffect(() => {
    setTempQuantity(product.quantity.toString());
  }, [product.quantity]);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempQuantity(e.target.value); // Cho phép xóa hoặc nhập lại số
  };

  const handleBlurOrEnter = () => {
    const quantity = parseInt(tempQuantity, 10); // Chuyển chuỗi sang số

    if (isNaN(quantity) || quantity === 0) {
      // Nếu không nhập gì hoặc nhập 0 → Xóa sản phẩm
      onRemove(product.id);
    } else if (quantity > product.stock) {
      // Nếu số lượng lớn hơn tồn kho → Đặt số lượng = tồn kho
      onUpdateQuantity(product.id, product.stock);
    } else {
      // Nếu số hợp lệ (1 → stock) → Cập nhật số lượng
      onUpdateQuantity(product.id, quantity);
    }

    setTempQuantity(""); // Reset giá trị tạm thời
  };

  const totalPrice = product.price * product.quantity; // Tính tổng giá

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
        src={product.image}
        alt={product.title}
        className="w-16 h-16 object-cover mr-4"
      />

      {/* Thông tin sản phẩm */}
      <div className="flex-grow">
        <div 
          className="text-sm font-semibold text-gray-800"
          title="{product.name}">{product.title}</div>
        <div className="text-sm text-red-500 font-bold">
          {totalPrice.toLocaleString()}₫ {/* Hiển thị tổng giá */}
        </div>
      </div>

      {/* Điều chỉnh số lượng */}
      <div className="flex items-center space-x-4">
        {/* Nút giảm số lượng */}
        <button
          type="button"
          className={`w-8 h-8 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 flex justify-center items-center ${
            product.quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onDecrease(product.id);
          }}
          disabled={product.quantity === 1}
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
            product.quantity === product.stock
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onIncrease(product.id);
          }}
          disabled={product.quantity === product.stock}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
