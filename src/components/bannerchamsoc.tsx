import React from "react"
import { Swiper } from "zmp-ui";

const BannerChamSoc = () => {

    return (
        <Swiper
            autoplay={true}
            duration={3000}
            dots={false}
            loop>
            <Swiper.Slide>
                <img  className={"mx-auto"} src={"https://theme.hstatic.net/1000097940/1000899682/14/banner_coll_1.jpg?v=276"} alt={""}/>
            </Swiper.Slide>
            <Swiper.Slide>
                <img className={""} src={"https://theme.hstatic.net/1000097940/1000899682/14/banner_coll_2.jpg?v=276"} alt={""}/>
            </Swiper.Slide>
            <Swiper.Slide>
                <img className={""} src={"https://theme.hstatic.net/1000097940/1000899682/14/banner_coll_3.jpg?v=276"} alt={""}/>
            </Swiper.Slide>
        </Swiper>
    )
}
export default BannerChamSoc;