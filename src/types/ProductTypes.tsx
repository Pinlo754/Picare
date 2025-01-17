// Mô tả một biến thể của sản phẩm
export interface ProductVariant {
    id: string; // ID của biến thể
    title: string; // Tên biến thể (ví dụ: "Màu đỏ", "Size M")
    price: number; // Giá của biến thể
    compare_at_price?: number; // Giá trước giảm
    sku: string; // Mã SKU của biến thể
    barcode: string; // Mã barcode
    inventory_quantity: number; // Số lượng tồn kho
    inventory_policy: string; // Chính sách tồn kho ("deny" hoặc "continue")
    fulfillment_service?: string; // Dịch vụ thực hiện (nếu có)
    requires_shipping: boolean; // Biến thể có yêu cầu giao hàng không
    taxable: boolean; // Biến thể có chịu thuế không
    option1?: string; // Tùy chọn 1 (ví dụ: màu sắc)
    option2?: string; // Tùy chọn 2 (ví dụ: kích thước)
    option3?: string; // Tùy chọn 3
    total_discount?: number; // Tổng giảm giá áp dụng cho biến thể (nếu có)
    applied_discounts?: AppliedDiscount[]; // Danh sách các giảm giá áp dụng
    properties?: Property[]; // Các thuộc tính bổ sung cho biến thể (nếu có)
  }
  
  // Mô tả giảm giá áp dụng cho sản phẩm hoặc biến thể
  export interface AppliedDiscount {
    description: string; // Mô tả giảm giá (ví dụ: "Khuyến mãi mùa hè")
    amount: number; // Số tiền giảm giá
  }
  
  // Mô tả các thuộc tính bổ sung của sản phẩm hoặc biến thể
  export interface Property {
    name: string; // Tên thuộc tính (ví dụ: "Ghi chú sản phẩm")
    value: string; // Giá trị thuộc tính (ví dụ: "Xuất xứ Vietnam")
  }
  
  // Mô tả một sản phẩm
  export interface Product {
    id: string; // ID của sản phẩm
    title: string; // Tên sản phẩm
    handle: string; // Handle (URL thân thiện của sản phẩm)
    product_type: string; // Loại sản phẩm (ví dụ: "Điện thoại")
    tags: string; // Tags của sản phẩm
    variants: ProductVariant[]; // Danh sách các biến thể của sản phẩm
    images: { src: string }[]; // Danh sách ảnh sản phẩm
    description?: string; // Mô tả sản phẩm (HTML hoặc plain text)
    vendor?: string; // Nhà cung cấp sản phẩm
    published_at?: string; // Ngày sản phẩm được công bố
    updated_at?: string; // Ngày sản phẩm được cập nhật
    total_stock?: number; // Tổng tồn kho của sản phẩm
  }
  
