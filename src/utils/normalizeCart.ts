interface CartItem {
    id: number;
    title: string;
    price: number;
    line_price: number,
    quantity: number;
    image?: string;
    handle: string;
    url?: string;
  }
  
  interface CartData {
    attributes: Record<string, any>;
    token: string | null;
    item_count: number;
    items: CartItem[];
    total_price: number;
    requires_shipping: boolean;
  }
  
  export const normalizeCartData = (cart: Partial<CartData>): CartData => {
    return {
      attributes: cart.attributes || {},
      token: cart.token || null,
      item_count: cart.item_count || 0,
      items: cart.items? cart.items.map((item) => ({
        id: item.id || 0,
        title: item.title || "Sản phẩm không tên",
        price: item.price || 0,
        line_price: item.line_price || 0,
        quantity: item.quantity || 0,
        image: item.image || "https://via.placeholder.com/150",
        handle: item.handle || "#",
        url: item.url || "#"
      })) : [],
      total_price: cart.total_price || 0,
      requires_shipping: cart.requires_shipping || false
    };
  };