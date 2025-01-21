import { ArrowForwardIos } from "@mui/icons-material";
import React from "react";
import Product from "./Product";
import { Grid, Box } from "zmp-ui";

const SanPhamNoiBat = () => {
    return (
        <Box>
            <div className={"grid place-items-center"}>
                <h2 className={"text-2xl text-center mb-1 mt-5 font-title"}>
                    Sản Phẩm Nổi Bật
                </h2>
                <Grid rowSpace="3px" columnSpace="3px" columnCount={2}>
                    <Product
                        brand={"CANOVA"}
                        title={
                            "Dầu Gội Canova Làm Dịu Da Ngừa Tiết Bã Nhờn Dành Cho Da Gàu Kích Ứng Rivescal DS Soothing ShampooI 200ml"
                        }
                        price={535000}
                        discount={10}
                        image={
                            "https://product.hstatic.net/1000097940/product/30_31423e0dd7ee4049829304085b31358f_grande.png"
                        }
                    />
                    <Product
                        brand={"CANOVA"}
                        title={
                            "Dầu Gội Canova Làm Dịu Da Ngừa Tiết Bã Nhờn Dành Cho Da Gàu Kích Ứng Rivescal DS Soothing ShampooI 200ml"
                        }
                        price={535000}
                        discount={10}
                        image={
                            "https://product.hstatic.net/1000097940/product/30_31423e0dd7ee4049829304085b31358f_grande.png"
                        }
                    />
                    <Product
                        brand={"CANOVA"}
                        title={
                            "Dầu Gội Canova Làm Dịu Da Ngừa Tiết Bã Nhờn Dành Cho Da Gàu Kích Ứng Rivescal DS Soothing ShampooI 200ml"
                        }
                        price={535000}
                        discount={10}
                        image={
                            "https://product.hstatic.net/1000097940/product/30_31423e0dd7ee4049829304085b31358f_grande.png"
                        }
                    />
                    <Product
                        brand={"CANOVA"}
                        title={
                            "Dầu Gội Canova Làm Dịu Da Ngừa Tiết Bã Nhờn Dành Cho Da Gàu Kích Ứng Rivescal DS Soothing ShampooI 200ml"
                        }
                        price={535000}
                        discount={10}
                        image={
                            "https://product.hstatic.net/1000097940/product/30_31423e0dd7ee4049829304085b31358f_grande.png"
                        }
                    />

                </Grid>
                <button
                    className={
                        "px-4 py-2 rounded-2xl m-3 font-bold text-base bg-green-500 text-white "
                    }
                >
                    Xem tất cả
                    <ArrowForwardIos />
                </button>
            </div>
        </Box>
    );
};
export default SanPhamNoiBat;
