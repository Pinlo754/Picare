import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

const Banner = function() {
    return (
        React.createElement("div", null,
            React.createElement("div", { className: "p-1.5" },
                React.createElement(Swiper, {
                    modules: [Autoplay, Mousewheel],
                    slidesPerView: 1,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    mousewheel: true
                },
                    React.createElement(SwiperSlide, null,
                        React.createElement("img", {
                            src: "//theme.hstatic.net/1000097940/1000899682/14/slider_1.jpg?v=276",
                            alt: "1",
                            className: "mx-auto"
                        })
                    ),
                    React.createElement(SwiperSlide, null,
                        React.createElement("img", {
                            src: "//theme.hstatic.net/1000097940/1000899682/14/slider_2.jpg?v=276",
                            alt: "1",
                            className: "mx-auto"
                        })
                    ),
                    React.createElement(SwiperSlide, null,
                        React.createElement("img", {
                            src: "//theme.hstatic.net/1000097940/1000899682/14/slider_3.jpg?v=276",
                            alt: "1",
                            className: "mx-auto"
                        })
                    )
                )
            ),
            React.createElement("div", { className: "grid grid-cols-2 gap-2 p-1.5" },
                React.createElement("img", {
                    src: "//theme.hstatic.net/1000097940/1000899682/14/right_banner_1.jpg?v=276",
                    alt: "",
                    className: "w-258 h-193"
                }),
                React.createElement("img", {
                    src: "//theme.hstatic.net/1000097940/1000899682/14/right_banner_2.jpg?v=276",
                    alt: "",
                    className: "w-258 h-193"
                })
            )
        )
    );
};

export default Banner;
