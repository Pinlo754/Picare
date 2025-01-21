import { Swiper } from "zmp-ui"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";


import React from "react"
const categories = [
    {name: "Sữa Rửa Mặt", url: "//theme.hstatic.net/1000097940/1000899682/14/coll_1.jpg?v=276"},
    {name: "Tẩy Trang", url: "//theme.hstatic.net/1000097940/1000899682/14/coll_2.jpg?v=276"},
    {name: "Chống Nắng", url: "//theme.hstatic.net/1000097940/1000899682/14/coll_3.jpg?v=276"},
    {name: "Chăm Sóc Da Dầu Mụn", url: "//theme.hstatic.net/1000097940/1000899682/14/coll_4.jpg?v=276"},
    {name: "Trắng Da - Thâm Nám", url: "//theme.hstatic.net/1000097940/1000899682/14/coll_5.jpg?v=276"},
    {name: "Dưỡng ẩm", url: "//theme.hstatic.net/1000097940/1000899682/14/coll_6.jpg?v=276"},
    {name: "Dầu gội", url: "//theme.hstatic.net/1000097940/1000899682/14/coll_7.jpg?v=276"},
    {name: "Thiết bị làm đẹp ", url: "//theme.hstatic.net/1000097940/1000899682/14/coll_8.jpg?v=276"},
    {name: "Tẩy tế bào chết", url: "//theme.hstatic.net/1000097940/1000899682/14/coll_9.jpg?v=276"},
    {name: "Dưỡng trắng", url: "//theme.hstatic.net/1000097940/1000899682/14/coll_10.jpg?v=276"}
]
const CategorySlide = () => {
    const settings = {
        dots: false, // Hiển thị các chấm điều hướng
        infinite: true, // Vòng lặp vô hạn
        speed: 500, // Thời gian chuyển slide
        slidesToShow: 4, // Số slide hiển thị cùng lúc
        slidesToScroll: 1, // Số slide cuộn khi lướt
        autoplay: true, // Tự động chuyển slide
        autoplaySpeed: 3000, // Tốc độ chuyển slide (ms)
        arrows: false, // Ẩn nút điều hướng
    }

    return (
        <div className={"mt-2 w-full m-auto"}>
            <Slider {...settings}>
                {categories.map((category, index) => (
                    <div key={index} className={"flex flex-col items-center"}>
                        <img src={category.url} alt={category.name} className={"w-1/2"}/>
                        <span className={"text-center text-sm font-xl mt-3"}>{category.name}</span>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
export default CategorySlide;