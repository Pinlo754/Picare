import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Mousewheel} from "swiper/modules";

const CareBanner = () => {
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
                        <img src={"https://theme.hstatic.net/1000097940/1000899682/14/banner_coll_1.jpg?v=276"}
                             alt={"1"}
                             className="mx-auto "/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={"https://theme.hstatic.net/1000097940/1000899682/14/banner_coll_2.jpg?v=276"}
                             alt={"1"}
                             className="mx-auto"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={"https://theme.hstatic.net/1000097940/1000899682/14/banner_coll_3.jpg?v=276"}
                             alt={"1"}
                             className="mx-auto"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default CareBanner;