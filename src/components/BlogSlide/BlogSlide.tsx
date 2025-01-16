import Blog from "../Blog/Blog";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Mousewheel} from "swiper/modules";
import blogs from "./blogs.json"
import React from "react";
import {ArrowForwardIos} from "@mui/icons-material";
const BlogSlide = () => {

    return (
        <div className={"place-items-center"}>
            <h2 className="text-2xl font-bold text-center mb-6">TIN TỨC LÀM ĐẸP</h2>
            <Swiper
                modules={[Autoplay, Mousewheel]}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                mousewheel
            >
                {blogs.map((blog) => (
                    <SwiperSlide>
                        <Blog image={blog.image} title={blog.title} author={blog.author} date={blog.date}
                              description={blog.description}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className={"px-4 py-2 rounded-2xl font-bold text-base bg-green-500 text-white mt-4"}>
                Xem tất cả
                <ArrowForwardIos/>
            </button>
        </div>
    );
}
export default BlogSlide;