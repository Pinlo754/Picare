import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Mousewheel} from "swiper/modules";
const Banner= () => {
    return (
        <div>
            <div className="p-1.5">
                <Swiper
                    modules={[Autoplay, Mousewheel]}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    mousewheel
                >
                    <SwiperSlide>
                        <img src={"//theme.hstatic.net/1000097940/1000899682/14/slider_1.jpg?v=276"} alt={"1"} className="mx-auto "/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={"//theme.hstatic.net/1000097940/1000899682/14/slider_2.jpg?v=276"} alt={"1"} className="mx-auto"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={"//theme.hstatic.net/1000097940/1000899682/14/slider_3.jpg?v=276"} alt={"1"} className="mx-auto"/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={"grid grid-cols-2 gap-2 p-1.5"}>
                <img src={"//theme.hstatic.net/1000097940/1000899682/14/right_banner_1.jpg?v=276"} alt={""}
                     className={"w-258 h-193"}/>
                <img src={"//theme.hstatic.net/1000097940/1000899682/14/right_banner_2.jpg?v=276"} alt={""}
                     className={"w-258 h-193"}/>
            </div>
        </div>
    )
}
export default Banner;