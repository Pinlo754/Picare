import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
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
    return (
        <div className={"w-full max-w-4xl mx-auto"}>
            <h2 className="text-2xl font-bold text-center mb-6">DANH MỤC NỔI BẬT</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={25}
                slidesPerView={4}
                className={"category-slider"}
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index}>
                        <div className={"flex flex-col items-center"}>
                            <img
                                src={category.url}
                                alt={category.name}
                                className={"w-24 h-24 object-contain rounded-full p-2"}
                            />
                            <span className={"text-center text-sm font-medium mt-2"}>
                                {category.name}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default CategorySlide;