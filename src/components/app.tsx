import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "pages/Homepage/Homepage";
import CartPage from "pages/Cartpage/CartPage";
import BuyingGuild from "pages/CustomerSupportPageList/BuyingGuild";
import Disclaimer from "pages/CustomerSupportPageList/Disclaimer";
import InformationSecurityPolicy from "pages/CustomerSupportPageList/InformationSecurityPolicy";
import ShippingPolicy from "pages/CustomerSupportPageList/ShippingPolicy";
import ReturnPolicy from "pages/CustomerSupportPageList/ReturnPolicy";
import PaymentMethod from "pages/CustomerSupportPageList/PaymentMethod";
import Layout from "./Layout";
const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />}></Route>
              <Route path="/cart" element={<CartPage/>}/>
              <Route path="/pages/chinh-sach-doi-tra" element={<ReturnPolicy/>}/>
              <Route path="/pages/chinh-sach-van-chuyen-giao-nhan" element={<ShippingPolicy/>}/>
              <Route path="/pages/chinh-sach-bao-mat-thong-tin" element={<InformationSecurityPolicy/>}/>
              <Route path="/pages/huong-dan-mua-hang" element={<BuyingGuild/>}/>
              <Route path="/pages/hinh-thuc-thanh-toan" element={<PaymentMethod/>}/>
              <Route path="/pages/tuyen-bo-mien-tru-trach-nhiem" element={<Disclaimer/>}/>
              </Route>
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
