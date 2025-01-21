import {Box, Page, Swiper} from "zmp-ui";
import React from "react";
const Banner = () => {
    return (
        <div className={"mt-2"}>
            <Swiper
                autoplay={true}
                duration={3000}
                dots={false}>
                <Swiper.Slide>
                    <img  className={"mx-auto"} src={"//theme.hstatic.net/1000097940/1000899682/14/slider_1.jpg?v=276"} alt={""}/>
                </Swiper.Slide>
                <Swiper.Slide>
                    <img className={""} src={"//theme.hstatic.net/1000097940/1000899682/14/slider_2.jpg?v=276"} alt={""}/>
                </Swiper.Slide>
                <Swiper.Slide>
                    <img className={""} src={"//theme.hstatic.net/1000097940/1000899682/14/slider_3.jpg?v=276"} alt={""}/>
                </Swiper.Slide>
            </Swiper>
            <div className={"grid grid-cols-2 gap-1 pt-1"}>
                <img src={"//theme.hstatic.net/1000097940/1000899682/14/right_banner_1.jpg?v=276"} alt={""} className={"border rounded-xl"}/>
                <img src={"//theme.hstatic.net/1000097940/1000899682/14/right_banner_2.jpg?v=276"} alt={""} className={"border rounded-xl"}/>
            </div>
        </div>
    )
}
export default Banner;