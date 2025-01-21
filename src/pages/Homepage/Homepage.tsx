import React from "react";
import Product from "../../components/Product";
import CategorySlide from "../../components/CategorySlide";
import Banner from "../../components/Banner";
import {ArrowForwardIos} from "@mui/icons-material";
import Header from "../../components/header";
import BannerChamSoc from "../../components/bannerchamsoc";
import BlogSlide from "../../components/BlogSlide";
import FlashSale from "../../components/FlashSale";
import ChamSocChuanSalon from "../../components/chamsocchuansalon";
import SanPhamNoiBat from "../../components/sanphamnoibat";
import SanPhamDocQuyen from "../../components/sanphamdocquyen";

const Homepage = () => {

    return (
        <>
            <Header/>
            <Banner/>
            {/*Danh mục nổi bật*/}
            <CategorySlide/>
            {/*Flash Sale*/}
            <FlashSale/>
            <ChamSocChuanSalon/>
            <SanPhamNoiBat/>
            <SanPhamDocQuyen/>
            <BannerChamSoc/>
            <BlogSlide/>

        </>
    )
};
export default Homepage;
