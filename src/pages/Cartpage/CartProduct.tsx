import React from "react";
import { Product } from "../../types/Product";

interface CartItemProps {
  product: Product;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

const CartProduct: React.FC<CartItemProps> = ({
  product,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const totalPrice = product.price * product.quantity; // Tính tổng giá dựa trên số lượng

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
        alt={product.name}
        className="w-16 h-16 object-cover mr-4"
      />

      {/* Thông tin sản phẩm */}
      <div className="flex-grow">
        <div 
          className="text-sm font-semibold text-gray-800"
          title="{product.name}">{product.name}</div>
        <div className="text-sm text-red-500 font-bold">
          {totalPrice.toLocaleString()}₫ {/* Hiển thị tổng giá */}
        </div>
      </div>

      {/* Điều chỉnh số lượng */}
      <div className="flex items-center">
        <button
          type="button"
          className={`px-2 py-1 border border-gray-300 rounded-l ${
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
        <span className="px-4 py-1 border-t border-b border-gray-300">
          {product.quantity}
        </span>
        <button
          type="button"
          className={`px-2 py-1 border border-gray-300 rounded-r ${
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
