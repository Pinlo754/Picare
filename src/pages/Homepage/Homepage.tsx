import React from "react";
import Product from "../../components/Product/Product";
import CategorySlide from "../../components/CategorySlider/CategorySlide";
import Banner from "../../components/Banner/Banner";
import {ArrowForwardIos} from "@mui/icons-material";

const Homepage = () => {

    return (
        <>
            <Banner/>
            <CategorySlide/>
            <h2 className={"text-2xl font-bold text-center mb-1 mt-5"}>Chăm sóc chuẩn salon</h2>

            <div className={"grid place-items-center"}>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 p-4">
                <Product
                    brand={"CANOVA"}
                    title={"Dầu Gội Canova Làm Dịu Da Ngừa Tiết Bã Nhờn Dành Cho Da Gàu Kích Ứng Rivescal DS Soothing ShampooI 200ml"}
                    price={535000}
                    discount={10}
                    image={"https://product.hstatic.net/1000097940/product/30_31423e0dd7ee4049829304085b31358f_grande.png"}
                />

                <Product
                    brand={"CANOVA"}
                    title={"Dầu Gội Canova Làm Dịu Da Ngừa Tiết Bã Nhờn Dành Cho Da Gàu Kích Ứng Rivescal DS Soothing ShampooI 200ml"}
                    price={535000}
                    discount={10}
                    image={"https://product.hstatic.net/1000097940/product/30_31423e0dd7ee4049829304085b31358f_grande.png"}
                />

                <Product
                    brand={"CANOVA"}
                    title={"Dầu Gội Canova Làm Dịu Da Ngừa Tiết Bã Nhờn Dành Cho Da Gàu Kích Ứng Rivescal DS Soothing ShampooI 200ml"}
                    price={535000}
                    discount={10}
                    image={"https://product.hstatic.net/1000097940/product/30_31423e0dd7ee4049829304085b31358f_grande.png"}
                />

                <Product
                    brand={"CANOVA"}
                    title={"Dầu Gội Canova Làm Dịu Da Ngừa Tiết Bã Nhờn Dành Cho Da Gàu Kích Ứng Rivescal DS Soothing ShampooI 200ml"}
                    price={535000}
                    discount={10}
                    image={"https://product.hstatic.net/1000097940/product/30_31423e0dd7ee4049829304085b31358f_grande.png"}
                />

                <Product
                    brand={"CANOVA"}
                    title={"Dầu Gội Canova Làm Dịu Da Ngừa Tiết Bã Nhờn Dành Cho Da Gàu Kích Ứng Rivescal DS Soothing ShampooI 200ml"}
                    price={535000}
                    discount={10}
                    image={"https://product.hstatic.net/1000097940/product/30_31423e0dd7ee4049829304085b31358f_grande.png"}
                />

                <Product
                    brand={"CANOVA"}
                    title={"Dầu Gội Canova Làm Dịu Da Ngừa Tiết Bã Nhờn Dành Cho Da Gàu Kích Ứng Rivescal DS Soothing ShampooI 200ml"}
                    price={535000}
                    discount={10}
                    image={"https://product.hstatic.net/1000097940/product/30_31423e0dd7ee4049829304085b31358f_grande.png"}
                />
            </div>
                <button className={"px-4 py-2 rounded-2xl font-bold text-base bg-green-500 text-white "}>
                    Xem tất cả
                <ArrowForwardIos/>
                </button>
            </div>

        </>
    )
};
export default Homepage;
