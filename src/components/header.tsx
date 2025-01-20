import React, {useEffect} from "react";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faPhone, faMessage, faSearch} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [placeholder, setPlaceholder] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const placeholders = [
        'Tìm theo tên sản phẩm...',
        'Tìm theo thương hiệu...',
        'Tìm theo màu sắc...',
    ];

    useEffect(() => {
        const handleTypingEffect = () => {
            const currentPlaceholder = placeholders[placeholderIndex];

            if (!isDeleting) {
                if (charIndex < currentPlaceholder.length) {
                    setPlaceholder((prev) => currentPlaceholder.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setIsTypingComplete(true);
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1000);
                }
            } else {
                // Xóa chữ
                if (charIndex > 0) {
                    setPlaceholder((prev) => currentPlaceholder.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setIsTypingComplete(false);
                    setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
                }
            }
        };

        const typingTimeout = setTimeout(handleTypingEffect, 75);

        return () => clearTimeout(typingTimeout);
    }, [charIndex, placeholderIndex, isDeleting]);
    return (
        <header>
            <div className="align-items-center">
                <div className="container">
                    <div>
                        <div className="flex items-center justify-between h-[176px]">
                            <div className="ml-5">
                                <div
                                    className="flex flex-col items-start justify-center gap-1"
                                    onClick={() => setIsMenuOpen(true)}
                                >
                                    <div className="w-6 h-1 bg-[#2D9051] rounded"></div>
                                    <div className="w-5 h-1 bg-[#2D9051] rounded"></div>
                                    <div className="w-6 h-1 bg-[#2D9051] rounded"></div>
                                </div>
                                {isMenuOpen && (
                                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
                                )}
                                <div
                                    className={`${
                                        isMenuOpen
                                            ? "transform translate-x-0"
                                            : "transform -translate-x-full"
                                    } fixed top-0 left-0 w-[80%] h-full text-black transition-transform duration-300 z-20`}
                                >
                                    <div className="flex">
                                        <ul className="w-[80%] bg-white h-screen flex flex-col">
                                            <div className="border flex py-4">
                                                <li className="ml-4 mr-4 mr-md-3 ml-md-3 media d-lg-flex d-none ">
                                                    <FontAwesomeIcon
                                                        icon={faUser}
                                                        className="text-white bg-gray-800 p-2 rounded-full"
                                                    />
                                                </li>
                                                <div className="flex flex-col">
                                                    <a
                                                        rel="nofollow"
                                                        href="/account/login"
                                                        className="d-block"
                                                        title="Tài khoản"
                                                    >
                                                        Tài khoản
                                                    </a>
                                                    <small>
                                                        <a
                                                            href="/account/login"
                                                            title="Đăng nhập"
                                                            className="font-weight: light"
                                                        >
                                                            Đăng nhập
                                                        </a>{" "}
                                                    </small>
                                                </div>
                                            </div>
                                            <li
                                                className="mt-2 px-4 py-2 cursor-pointer"
                                                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                                            >
                                                Mục chính 1
                                                {isSubMenuOpen && (
                                                    <ul className="mt-2 pl-4">
                                                        <li className="px-4 py-2">Mục con 1</li>
                                                        <li className="px-4 py-2">Mục con 2</li>
                                                        <li className="px-4 py-2">Mục con 3</li>
                                                    </ul>
                                                )}
                                            </li>
                                            <li className="px-4 py-2">Mục chính 2</li>
                                            <li className="px-4 pt-2 pb-4 border-b">Mục chính 3</li>

                                            <ul className="shop-policises list-unstyled  d-flex align-items-center flex-wrap m-0 pr-0">
                                                <li>
                                                    <div className="flex gap-4 pt-6 pl-4">
                                                        <div className="">
                                                            <img
                                                                className="img-fluid "
                                                                src="//theme.hstatic.net/1000097940/1000899682/14/policy_header_image_1.png?v=276"
                                                                width="32"
                                                                height="32"
                                                                alt="Sản Phẩm"
                                                            />
                                                        </div>
                                                        <a
                                                            className="link"
                                                            href="https://shopduocmypham.com/collections/all"
                                                            title="Sản Phẩm"
                                                        >
                                                            Sản Phẩm
                                                        </a>
                                                    </div>
                                                </li>
                                                <div className="flex gap-4 pt-6 pl-4">
                                                    <div className="">
                                                        <img
                                                            className="img-fluid "
                                                            src="//theme.hstatic.net/1000097940/1000899682/14/policy_header_image_2.png?v=276"
                                                            width="32"
                                                            height="32"
                                                            alt="Liên hệ "
                                                        />
                                                    </div>
                                                    <a
                                                        className="link"
                                                        href="https://shopduocmypham.com/pages/cong-ty-tnhh-picare-viet-nam"
                                                        title="Liên hệ "
                                                    >
                                                        Liên hệ{" "}
                                                    </a>
                                                </div>
                                                <div className="flex gap-4 pt-6 pl-4 pb-4">
                                                    <div className="">
                                                        <img
                                                            className="img-fluid "
                                                            src="//theme.hstatic.net/1000097940/1000899682/14/policy_header_image_3.png?v=276"
                                                            width="32"
                                                            height="32"
                                                            alt="Thương hiệu"
                                                        />
                                                    </div>
                                                    <a
                                                        className="link"
                                                        href="https://shopduocmypham.com/pages/trang-thuong-hieu"
                                                        title="Thương hiệu"
                                                    >
                                                        Thương hiệu
                                                    </a>
                                                </div>
                                            </ul>
                                            <div className="flex-grow"></div>
                                            <div className="flex">
                                                <div
                                                    className="w-[50%] bg-[#f4f4f4] h-10 flex items-center justify-center gap-2 border">
                                                    <a href="tel:0918088123" title="0918088123 ">
                                                        Gọi điện
                                                    </a>
                                                    <FontAwesomeIcon icon={faPhone}/>
                                                </div>
                                                <div
                                                    className="w-[50%] bg-[#f4f4f4] h-10 flex items-center justify-center gap-2 border">
                                                    <a
                                                        href="https://www.facebook.com/PiCareShopDuocMyPhamCaoCap"
                                                        title="https://www.facebook.com/PiCareShopDuocMyPhamCaoCap"
                                                    >
                                                        Nhắn tin
                                                    </a>
                                                    <FontAwesomeIcon icon={faMessage}/>
                                                </div>
                                            </div>
                                        </ul>
                                        <div
                                            className="w-[12%] p-2 h-10 bg-white "
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            ❌
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Menu*/}
                            <div className="w-[60%] px-[15px] flex justify-center">
                                <a href="/">
                                    <img
                                        className="img-fluid"
                                        src="//theme.hstatic.net/1000097940/1000899682/14/logo.png?v=276"
                                        alt="logo CÔNG TY TNHH PICARE VIỆT NAM"
                                        width="248"
                                        height="53"
                                    />
                                </a>
                            </div>
                            {/*Logo*/}
                            <div className="relative mr-5 z-0">
                                <a href="/cart" title="Giỏ hàng" className="flex items-center">
                                    <img
                                        src="//theme.hstatic.net/1000097940/1000899682/14/cart-icon.png?v=276"
                                        width="24"
                                        height="24"
                                        alt="cart-icon"
                                        className="z-10"
                                    />
                                </a>
                                <span
                                    className="absolute rounded bottom-4 left-4 text-xs bg-green-500 text-white w-4 h-4 flex items-center justify-center z-10">
                  1
                </span>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-4 col-12 mx-4 h-6"
                        >
                            <form
                                action="/search"
                                method="get"
                                className="flex items-center "
                                role="search"
                            >
                                <input
                                    type="text"
                                    name="q"
                                    value=""
                                    className="flex-1 px-4 py-2 border rounded-tl-[24px] rounded-bl-[24px] focus:outline-none bg-[#f1f1f1]"
                                    required
                                    placeholder={placeholder}
                                />
                                <input type="hidden" name="type" value="product"/>
                                <button
                                    type="submit"
                                    aria-label="search"
                                    className="bg-green-500 text-white h-[41.6px] w-[41px] flex items-center justify-center rounded-tr-[24px] rounded-br-[24px]"
                                >
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className="text-white p-2 rounded-full"
                                    />
                                </button>
                            </form>
                            <div className="flex pt-2">
                                <ul className="flex list-unstyled mb-0   flex-wrap text-[12px] text-[#6c757d]">
                                    <li className="mr-2">
                                        <a
                                            id="filter-search-xit-khoang"
                                            href="/search?q=filter=(tag:product=Xịt+khoáng)"
                                        >
                                            Xịt khoáng
                                        </a>
                                    </li>
                                    <li className="mr-2">
                                        <a
                                            id="filter-search-trang-diem"
                                            href="/search?q=filter=(tag:product=Trang+điểm)"
                                        >
                                            {" "}
                                            Trang điểm
                                        </a>
                                    </li>
                                    <li className="mr-2">
                                        <a
                                            id="filter-search-sua-rua-mat"
                                            href="/search?q=filter=(tag:product=Sữa+rửa+mặt)"
                                        >
                                            {" "}
                                            Sữa rửa mặt
                                        </a>
                                    </li>
                                    <li className="mr-2">
                                        <a
                                            id="filter-search-duong-am"
                                            href="/search?q=filter=(tag:product=Dưỡng+ẩm)"
                                        >
                                            {" "}
                                            Dưỡng ẩm
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {" "}
                            {/* menu phía dưới thanh tìm kiếm*/}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
