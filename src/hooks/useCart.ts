import { useEffect, useState } from 'react';
import { normalizeCartData } from 'utils/normalizeCart';
import { fetchCartData, updateQuantity, checkout } from 'services/cartService'
import { mockCartData } from 'mockData';
// Định nghĩa kiểu dữ liệu cho thông tin hóa đơn
interface InvoiceInfo {
    companyName: string;
    taxCode: string;
    address: string;
    email: string;
}

export const useCart = () => {
    const [cartData, setCartData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [isInvoiceChecked, setIsInvoiceChecked] = useState<boolean>(false);
    const [isConfirmPopupVisible, setIsConfirmPopupVisible] = useState<boolean>(false);
    const [invoiceInfo, setInvoiceInfo] = useState<InvoiceInfo>({
        companyName: "",
        taxCode: "",
        address: "",
        email: "",
    });

    useEffect(() => {
        fetchCartData()
            .then(data => setCartData(normalizeCartData(data)))
            .catch(() =>
                setError('Không thể tải dữ liệu giỏ hàng, vui lòng tải lại trang hoặc liên hệ để được hỗ trợ.')
            );
    }, []);

    const handleQuantityChange = (product_id: number, newQuantity: number) => {
        if (newQuantity < 1) newQuantity = 1;
        updateQuantity(product_id, newQuantity)
            .then(data => setCartData(normalizeCartData(data)))
            .catch(error => console.error('Lỗi cập nhật giỏ hàng:', error));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsInvoiceChecked(e.target.checked);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInvoiceInfo({ ...invoiceInfo, [name]: value });
    };

    const validateInvoiceInfo = (): boolean => {
        if (!invoiceInfo.companyName || !invoiceInfo.taxCode || !invoiceInfo.address || !invoiceInfo.email) {
            alert("Vui lòng điền đầy đủ thông tin hóa đơn.");
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(invoiceInfo.email)) {
            alert("Email không hợp lệ!");
            return false;
        }
        if (invoiceInfo.taxCode.length < 10) {
            alert("Mã số thuế phải có ít nhất 10 chữ số.");
            return false;
        }
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        checkout(cartData, invoiceInfo, isInvoiceChecked)
        .then(checkoutSessionId => {
            window.location.href = 'https://shopduocmypham.com/checkouts/' + checkoutSessionId;
        })
        .catch(error => {
            alert("Chuyển trang thất bại. Vui lòng thử lại.");
        });
    };

    const handlePaymentClick = (e: React.FormEvent) => {
        e.preventDefault();
        if (isInvoiceChecked) {
            if (!validateInvoiceInfo()) return;
            setIsConfirmPopupVisible(true);
        } else {
            handleSubmit(e);
        }
    };

    const handleClosePopup = () => {
        setIsConfirmPopupVisible(false);
    };

    return {
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
    };
};