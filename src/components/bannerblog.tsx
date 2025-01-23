import React, { useRef } from "react";
import blogs from "./blogs.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Blog from "./blog";
import { Autoplay, Mousewheel } from "swiper/modules";
const BannerBlog = () => {
    let ref = useRef(null);
    return (
      <div className="place-items-center">
      <h2 className="text-2xl font-title font-bold text-center m-6">TIN TỨC LÀM ĐẸP</h2>
        <Swiper
        modules={[Autoplay, Mousewheel]}
        slidesPerView={1}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        mousewheel={true}
        >
            {blogs.map((blog, index) => (
            <SwiperSlide>
                <Blog image={blog.image} title={blog.title} author={blog.author} date={blog.date}
                              description={blog.description}/>
            </SwiperSlide>
            ))}
          
        </Swiper>
      </div>
  );
};
export default BannerBlog;
