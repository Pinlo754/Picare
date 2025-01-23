import React from "react";
import Product from "../../components/Product";
import CategorySlide from "../../components/CategorySlide";
import Banner from "../../components/Banner";
import { ArrowForwardIos } from "@mui/icons-material";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import FlashSale from "components/flashsale";
import ChamSocChuanSalon from "components/chamsocchuansalon";
import SanPhamNoiBat from "components/sanphamnoibat";
import SanPhamDocQuyen from "components/sanphamdocquyen";
import BannerChamSoc from "components/bannerchamsoc";
import BannerBlog from "components/bannerblog";
const Homepage = () => {
  return (
    <main className="bg-white">
      <Header />
      <Banner />
      <CategorySlide />
      <FlashSale/>
      <ChamSocChuanSalon/>
      <SanPhamNoiBat/>
      <SanPhamDocQuyen/>
      <BannerChamSoc/>
      <BannerBlog/>
      <Footer />
    </main>
  );
};
export default Homepage;
