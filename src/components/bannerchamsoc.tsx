import React from "react"
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

const BannerChamSoc = () => {

    return (
        // <Swiper
        //    autoplay={true}
        //    duration={3000}
        //    dots={false}
        //    loop>
        //        <Swiper.Slide>
        //            <img  className={"mx-auto"} src={"https://theme.hstatic.net/1000097940/1000899682/14/banner_coll_1.jpg?v=276"} alt={""}/>
        //        </Swiper.Slide>
        //        <Swiper.Slide>
        //            <img className={""} src={"https://theme.hstatic.net/1000097940/1000899682/14/banner_coll_2.jpg?v=276"} alt={""}/>
        //        </Swiper.Slide>
        //        <Swiper.Slide>
        //            <img className={""} src={"https://theme.hstatic.net/1000097940/1000899682/14/banner_coll_3.jpg?v=276"} alt={""}/>
        //        </Swiper.Slide>
        //    </Swiper>
           <Swiper
            modules={[Autoplay, Mousewheel]}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            mousewheel={true}
           >
            <SwiperSlide>
            <img  className={"mx-auto"} src={"https://theme.hstatic.net/1000097940/1000899682/14/banner_coll_1.jpg?v=276"} alt={""}/>
            </SwiperSlide>
            <SwiperSlide>
            <img className={""} src={"https://theme.hstatic.net/1000097940/1000899682/14/banner_coll_2.jpg?v=276"} alt={""}/>
            </SwiperSlide>
            <SwiperSlide>
            <img className={""} src={"https://theme.hstatic.net/1000097940/1000899682/14/banner_coll_3.jpg?v=276"} alt={""}/>
            </SwiperSlide>
           </Swiper>

    )
}
export default BannerChamSoc;