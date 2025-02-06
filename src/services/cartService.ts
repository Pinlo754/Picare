import { getAccessToken } from 'zmp-sdk';

const API_BASE_URL = 'https://shopduocmypham.com';

export function fetchCartData() {
    return getAccessToken()
        .then(accessToken => {
            return fetch(`${API_BASE_URL}/cart.js`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'zalo-access-token': `Bearer ${accessToken}`,
                },
                credentials: 'include'
            });
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Lỗi khi lấy dữ liệu từ API');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Lỗi:', error);
            throw new Error('Không thể tải dữ liệu giỏ hàng, vui lòng thử lại sau.');
        });
}

export function updateQuantity(productId, quantity) {
    return getAccessToken()
        .then(accessToken => {
            return fetch(`${API_BASE_URL}/cart/change.js`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'zalo-access-token': `Bearer ${accessToken}`,
                },
                credentials: 'include',
                body: JSON.stringify({ id: productId, quantity })
            });
        })
        .then(() => fetchCartData())
        .catch(error => {
            console.error('Lỗi cập nhật giỏ hàng:', error);
            throw new Error('Không thể cập nhật số lượng sản phẩm.');
        });
}

export function checkout(cartData, invoiceInfo, isInvoiceChecked) {
    return getAccessToken()
        .then(accessToken => {
            var checkoutData = {
                ...cartData,
                total_price: cartData.total_price / 100,
                attributes: isInvoiceChecked ? {
                    'Xuất hóa đơn': 'có',
                    'Tên công ty': invoiceInfo.companyName,
                    'Mã số thuế': invoiceInfo.taxCode,
                    'Địa chỉ công ty': invoiceInfo.address,
                    'Email nhận hóa đơn': invoiceInfo.email
                } : null,
                items: cartData.items.map(function(item) {
                    return {
                        id: item.id,
                        title: item.title,
                        price: item.price / 100,
                        line_price: item.line_price / 100,
                        quantity: item.quantity
                    };
                })
            };

            return fetch(`${API_BASE_URL}/checkouts.js`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'zalo-access-token': `Bearer ${accessToken}`,
                },
                credentials: 'include',
                body: JSON.stringify(checkoutData)
            });
        })
        .then(response => {
            if (!response.ok) throw new Error('Lỗi khi gửi dữ liệu giỏ hàng.');
            return response.json();
        })
        .then(result => result.checkout_session_id)
        .catch(error => {
            console.error('Lỗi khi thanh toán:', error);
            throw new Error('Chuyển trang thất bại. Vui lòng thử lại.');
        });
}
