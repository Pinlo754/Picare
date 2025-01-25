import React from 'react';

interface CartItemProps {
    product: {
        id: number;
        product_id: number;
        title: string;
        line_price: number;
        quantity: number;
        image: string;
        handle: string;
    };
    updateQuantity: (product_id: number, quantity: number) => void;
    handleQuantityChange: (product_id: number, newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, updateQuantity, handleQuantityChange }) => {
    return (
        <li key={product.id} style={{ marginBottom: '20px' }}>
            <div className="flex items-center justify-between py-2 border-b border-gray-200 block">
                <button
                    type="button"
                    className="text-gray-500 text-lg font-bold mr-2 place-items-start"
                    onClick={() => updateQuantity(product.product_id, 0)}
                >
                    ×
                </button>

                <div className="w-1/4 flex-grow block">
                    <a href={`/products/${product.handle}`}>
                        <img src={product.image} alt={product.title} className="w-32 h-auto object-cover block" />
                    </a>
                </div>

                <div className="w-3/4 flex-grow">
                    <a href={`/products/${product.handle}`}>
                        <div className="text-sm font-semibold text-gray-800 hover:text-green-500" title={product.title}>
                            {product.title}
                        </div>
                    </a>
                    <div className="flex">
                        <div className="w-1/2 text-sm text-red-500 font-bold">
                            {(product.line_price / 100).toLocaleString()} VND
                        </div>

                        <div className="w-1/2 flex justify-end items-center space-x-2">
                            <button
                                type="button"
                                className="w-8 h-8 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 flex justify-center items-center"
                                onClick={() => handleQuantityChange(product.product_id, product.quantity - 1)}
                            >
                                −
                            </button>

                            <input
                                type="number"
                                value={product.quantity}
                                min={1}
                                className="bg-white w-12 text-center border-gray-300 rounded"
                                onChange={(e) => handleQuantityChange(product.product_id, parseInt(e.target.value) || 0)}
                            />

                            <button
                                type="button"
                                className="w-8 h-8 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 flex justify-center items-center"
                                onClick={() => handleQuantityChange(product.product_id, product.quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartItem;