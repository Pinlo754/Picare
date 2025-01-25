import React from 'react';

interface InvoiceInfo {
    companyName: string;
    taxCode: string;
    address: string;
    email: string;
}

interface InvoiceFormProps {
    invoiceInfo: InvoiceInfo;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ invoiceInfo, handleInputChange }) => {
    return (
        <div className="space-y-4 mb-4">
            <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Tên công ty
                </label>
                <input
                    id="companyName"
                    type="text"
                    name="companyName"
                    autoComplete="organization"
                    className="w-full p-2 bg-transparent border border-gray-300 rounded outline-none"
                    placeholder="Tên công ty"
                    value={invoiceInfo.companyName}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="taxCode" className="block text-sm font-medium text-gray-700">
                    Mã số thuế
                </label>
                <input
                    id="taxCode"
                    type="text"
                    name="taxCode"
                    autoComplete="tax-id"
                    className="w-full p-2 bg-transparent border border-gray-300 rounded outline-none"
                    placeholder="Mã số thuế"
                    value={invoiceInfo.taxCode}
                    onChange={handleInputChange}
                    required
                />
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
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email nhận hóa đơn
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="w-full p-2 bg-transparent border border-gray-300 rounded outline-none"
                    placeholder="Email nhận hóa đơn"
                    value={invoiceInfo.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
        </div>
    );
};

export default InvoiceForm;