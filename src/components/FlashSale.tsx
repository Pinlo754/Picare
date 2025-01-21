import React from "react";
import { useState, useEffect } from "react";
import { Box } from "zmp-ui";
import Product from "./Product";
import ProcessBar from "./ProcessBar";

const FlashSale = () => {
    const time: number = 24 * 60 * 60;
    const [timeLeft, setTimeLeft] = useState(time);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    const formatTime = (time: number) => ({
        hours: Math.floor(time / 3600),
        minutes: Math.floor((time % 3600) / 60),
        seconds: time % 60,
    });
    const { hours, minutes, seconds } = formatTime(timeLeft);
    return (
        <Box>
            <div className="bg-lime-300 rounded-lg" style={{ padding: "0.1px" }}>
                <div
                    className={
                        "grid place-items-center bg-white border-1 rounded-2xl m-4 "
                    }
                >
                    <h2 className={"text-2xl text-center mb-1 mt-5 font-title"}>
                        FLASH SALE
                    </h2>
                    <p className={"text-gray-500"}>
                        Sản phẩm sẽ trở về giá gốc khi hết giờ
                    </p>
                    <div className={"flex justify-center space-x-4 mt-2"}>
                        <div
                            className={
                                "flex flex-col items-center justify-center w-16 h-16 border-2 border-green-500 rounded-full"
                            }
                        >
              <span className={"text-2xl text-green-600"}>
                {hours.toString().padStart(2, "0")}
              </span>
                            <span className={"text-sm text-green-600"}>Giờ</span>
                        </div>
                        <div
                            className={
                                "flex flex-col items-center justify-center w-16 h-16 border-2 border-green-500 rounded-full"
                            }
                        >
                            <div className={"text-2xl text-green-600"}>
                                {minutes.toString().padStart(2, "0")}
                            </div>
                            <p className={"text-sm text-green-600"}>Phút</p>
                        </div>
                        <div
                            className={
                                "flex flex-col items-center justify-center w-16 h-16 border-2 border-green-500 rounded-full"
                            }
                        >
                            <div className={"text-2xl text-green-600"}>
                                {seconds.toString().padStart(2, "0")}
                            </div>
                            <p className={"text-sm text-green-600"}>Giây</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 p-4">
                        <div>
                            <Product
                                brand={"CANOVA"}
                                title={"Dầu Gội Canova Làm Dịu Da Ngừa Tiết Bã Nhờn Dành Cho Da Gàu Kích Ứng Rivescal DS Soothing ShampooI 200ml"}
                                price={535000}
                                discount={10}
                                image={"https://product.hstatic.net/1000097940/product/30_31423e0dd7ee4049829304085b31358f_grande.png"}
                            />
                            <ProcessBar amount={219} percent={60}/>
                        </div>

                        <div>
                            <Product
                                brand={"CANOVA"}
                                title={"Dầu Gội Canova Làm Dịu Da Ngừa Tiết Bã Nhờn Dành Cho Da Gàu Kích Ứng Rivescal DS Soothing ShampooI 200ml"}
                                price={535000}
                                discount={10}
                                image={"https://product.hstatic.net/1000097940/product/30_31423e0dd7ee4049829304085b31358f_grande.png"}
                            />
                            <ProcessBar amount={180} percent={40}/>
                        </div>

                        <div>
                            <Product
                                brand={"CANOVA"}
                                title={"Dầu Gội Canova Làm Dịu Da Ngừa Tiết Bã Nhờn Dành Cho Da Gàu Kích Ứng Rivescal DS Soothing ShampooI 200ml"}
                                price={535000}
                                discount={10}
                                image={"https://product.hstatic.net/1000097940/product/30_31423e0dd7ee4049829304085b31358f_grande.png"}
                            />
                            <ProcessBar isOut/>
                        </div>

                        <div>
                            <Product
                                brand={"CANOVA"}
                                title={"Dầu Gội Canova Làm Dịu Da Ngừa Tiết Bã Nhờn Dành Cho Da Gàu Kích Ứng Rivescal DS Soothing ShampooI 200ml"}
                                price={535000}
                                discount={10}
                                image={"https://product.hstatic.net/1000097940/product/30_31423e0dd7ee4049829304085b31358f_grande.png"}
                            />
                            <ProcessBar isNear/>
                        </div>

                    </div>
                </div>
            </div>
        </Box>
    );
};
export default FlashSale;
