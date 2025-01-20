import AddIcon from '@mui/icons-material/Add';


const Product = (props: any) => {
    let brand: string = props.brand;
    let title: string = props.title;
    let discount: number = props.discount;
    let price: number = props.price;
    let newPrice: number = price * (1 - discount / 100);
    let image: string = props.image;

    return (
        <>
            {/* Card sản phẩm */}
            <div className="relative  p-4 pb-0 bg-white ">
                {/* Ảnh */}
                <img src={image} alt="Ảnh sản phẩm" className={"w-full h-40 object-contain mb-4"}/>
                {/* Thương hiệu */}
                <div className={"text-gray-500 text-sm uppercase mb-1"}>{brand}</div>
                {/* Tên sản phẩm */}
                <div className={"text-gray-800 text-base font-semibold mb-2 line-clamp-2"}>{title}</div>
                {/* Giá */}
                <div className={"grid items-center mb-4"}>
                    <span className={"text-red-500 text-lg font-bold"}>{newPrice.toLocaleString("vi-VN")}đ</span>
                    <div className={"flex items-center space-x-2 "}>
                        <span
                            className={"text-gray-400 text-sm line-through"}>{price.toLocaleString("vi-VN")}đ</span>
                        {/* Badge discount */}
                        <div
                            className={" bg-red-400 text-white text-xs font-bold py-1 px-2 rounded-2xl"}>-{discount}%
                        </div>
                    </div>
                </div>
                <button
                    className={"absolute left-3/4 bottom-5 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-lg font-bold"}>
                    <AddIcon/>
                </button>
            </div>
        </>
    );
};
export default Product;