import Footer from "components/Footer";
import Header from "components/header";
import React from "react";
import { Page } from "zmp-ui";
const ContactPage = () => {

    return(
        <Page>
            <Header/>
            <span className="font-bold text-2xl">Công ty TNHH Picare Việt Nam</span>
            <img src="//file.hstatic.net/1000097940/file/logo_grande.jpg" alt="logo" />
            <span className="font-bold text-xl">Địa chỉ liên hệ của Picare Việt Nam</span>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li >Địa chỉ: 38/11 Đường Nguyễn Giản Thanh, Phường 15, Quận 10</li>
                <li>Mã số thuế: 0315127257</li>
                <li>Ngày cấp: 22/06/2018</li>
                <li>Nơi cấp: Chi cục thuế Quận 10</li>
            </ul>
            <span className="font-bold text-xl">Thông tin liên hệ</span>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>Hotline 1: <a href="tel:0918088123">0918.088.123</a></li>
                <li>Hotline 2: <a href="tel:0918088223">0918.088.223</a></li>
                <li>Email: <a href="mailto:cskh@picare.vn">cskh@picare.vn</a></li>
                <li>Website: <a href="http://shopduocmypham.com/">Picare Việt Nam</a></li>
            </ul>
            <Footer/>
        </Page>
    )
};
export default ContactPage;