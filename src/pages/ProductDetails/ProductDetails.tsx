import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Mousewheel, Navigation} from "swiper/modules";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
import {ArrowForwardIos} from "@mui/icons-material";
import React, {useState} from "react";

const ProductDetails = (props: any) => {
    let imgs: string[] = props.images;
    let brand: string = props.brand;
    let title: string = props.title;
    let discount: number = props.discount;
    let price: number = props.price;

    brand = "A-Derma"
    title = "Dầu Tắm Chuyên Biệt Cho Da Cơ Địa, Da Khô A-derma Exomega Control Emollient Shower Oil 200ml";
    discount = 10
    price = 461000
    let newPrice: number = price * (1 - discount / 100);


    const images = [
        "https://product.hstatic.net/1000097940/product/z4128695912542_71ed5dce4433338d50f751cebf8f56e4_ac9554ef1739439bace9fa5311ce11ef_medium.jpg",
        "https://product.hstatic.net/1000097940/product/ducray__11__3ab21b2399ef4b6c89d16442604e661b_medium.png",
        "https://product.hstatic.net/1000097940/product/z4128695868252_22f24c39cd0ebc180f8a23ecb6f29e83_222ed1b7a4854e2cb73a0a0ff3b07552_medium.jpg",
        "https://product.hstatic.net/1000097940/product/z4128695883421_d67304abb9d1061714576dd029ebe3da_329b8bbcea9d49e58a5110a961483c86_medium.jpg"
    ]

    const [quantity, setQuantity] = useState(1)

    function increaseQuantity() {
        setQuantity(quantity + 1);
    }
    function decreaseQuantity() {
        setQuantity(quantity - 1);
    }

    return (
        <div className={"flex-col ml-2"}>
            <Swiper
                modules={[Mousewheel, Navigation]}
                slidesPerView={1}
                mousewheel
                navigation
            >
                {images.map((image: any) => (
                    <SwiperSlide>
                        <img src={image} alt={"sản phẩm"} className={"w-4/5 h-auto"}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={"text-gray-500 text-sm uppercase mb-1"}>{brand}</div>
            <div className={"text-gray-800 text-base font-semibold mb-2 line-clamp-2"}>{title}</div>
            <div className={"flex items-center space-x-1 "}>
                <span className={"text-sm"}>Tình trạng: </span>
                <span className={"text-sm font-medium text-green-600"}> Còn hàng</span>
                <span>|</span>
                <span className={"text-sm"}>Mã SKU: </span>
                <span className={"text-sm font-medium text-green-600"}>Đang cập nhật</span>
            </div>
            <div className={"flex space-x-1 mt-3 mb-5"}>
                <span className={"text-red-500 text-lg font-bold"}>{newPrice.toLocaleString("vi-VN")}đ</span>
                <span className={"text-gray-400 text-sm line-through"}>{price.toLocaleString("vi-VN")}đ</span>
                    {/* Badge discount */}
                <div className={" bg-red-400 text-white text-xs font-bold py-1 px-2 rounded-2xl"}>-{discount}%</div>
            </div>
            <div className={"flex space-x-3"}>
                <span>Số lượng:</span>
                <div className={"flex items-center space-x-3"}>
                    <button
                        onClick={increaseQuantity}
                        className={" border border-gray-300 text-gray-500 rounded-full flex  text-lg font-bold"}>
                        <RemoveIcon/>
                    </button>
                    <span>1</span>
                    <button
                        onClick={decreaseQuantity}
                        className={" border border-gray-300 text-gray-500 rounded-full flex  text-lg font-bold"}>
                        <AddIcon/>
                    </button>
                </div>
            </div>
            <div className={"flex pt-3 space-x-3"}>
                <button className={"px-4 py-2 rounded-full font-medium text-base border border-red-600 text-red-600 "}>
                    Mua ngay
                </button>
                <button className={"px-4 py-2 rounded-full font-medium text-base bg-green-700 text-white "}>
                    Thêm vào giỏ
                </button>
            </div>
            <div className={"pt-3 space-x-1"}>
                <span className={"font-bold"}>Phương thức thanh toán</span>
                <img src={"//theme.hstatic.net/1000097940/1000899682/14/footer_trustbadge.jpg?v=276"} className={"w-1/2"}/>
            </div>
            <div className={"grid grid-cols-2 gap-2 p-4"}>
                <div className={"flex flex-row gap-2 "}>
                    <img src={"//theme.hstatic.net/1000097940/1000899682/14/policy_product_image_1.png?v=276"} className={"h-1/2"}/>
                    <span className={"text-sm pt-3"}>Giao hàng toàn quốc</span>
                </div>
                <div className={"flex flex-row gap-2 "}>
                    <img src={"//theme.hstatic.net/1000097940/1000899682/14/policy_product_image_2.png?v=276"} className={"h-1/2"}/>
                    <span className={"text-sm pt-3"}>Tư vấn 24/7 </span>
                </div>
                <div className={"flex flex-row gap-2 "}>
                    <img src={"//theme.hstatic.net/1000097940/1000899682/14/policy_product_image_3.png?v=276"} className={"h-1/2"}/>
                    <span className={"text-sm pt-3"}>Để lại Email cập nhật thông tin khuyến mãi</span>
                </div>
                <div className={"flex flex-row gap-2 "}>
                    <img src={"//theme.hstatic.net/1000097940/1000899682/14/policy_product_image_4.png?v=276"} className={"h-1/2"}/>
                    <span className={"text-sm pt-3"}>Cam kết chính hãng</span>
                </div>
            </div>
            <div>
                <h2 className={"font-bold text-3xl border border-t-white border-b-black mb-3 pb-3"}>Mô tả sản phẩm</h2>
                <span>Dầu Tắm Chuyên Biệt Cho Da Cơ Địa, Da Khô Aderma Exomega Control Emollient Shower Oil 200ml làm sạch nhẹ nhàng, chống kích ứng và làm dịu làn da khô dễ bị kích ứng như da cơ địa. Một sản phẩm làm sạch dịu nhẹ và thực sự quan tâm chăm sóc cho làn da, công thức của nó được phát triển cùng với các hoạt chất được sử dụng trong sản phẩm Exomega Control Cream để giúp tái tạo và phục hồi hàng rào bảo vệ da.– </span>
            </div>
        </div>
    );
}
export default ProductDetails;