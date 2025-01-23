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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.485428579429!2d106.66336862140763!3d10.781129530531969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ecd9b8e9949%3A0xfa29ef4fdfddb96d!2zUGlDYXJlIC0gU2hvcCBExrDhu6NjIE3hu7kgUGjhuqltIE5o4bqtcCBLaOG6qXUgVOG7qyBDaMOidSDDgnU!5e0!3m2!1svi!2s!4v1735893811845!5m2!1svi!2s"
            className="w-full h-1/2 p-2"/>
            <Footer/>
        </Page>
    )
};
export default ContactPage;