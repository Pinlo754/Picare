import React, { useRef } from "react";
import { Swiper, Box } from "zmp-ui";
import blogs from "./blogs.json";
import Blog from "./Blog";

const BannerBlog = () => {
    let ref = useRef(null);
    return (
        <Box>
            <div className="place-items-center">
                <h2 className="text-2xl font-title text-center mb-6">TIN TỨC LÀM ĐẸP</h2>
                <Swiper
                    autoplay={true}
                    duration={3000}
                    dots={false}
                >
                    {blogs.map((blog, index) => (
                        <Swiper.Slide>
                            <Blog image={blog.image} title={blog.title} author={blog.author} date={blog.date}
                                  description={blog.description}/>
                        </Swiper.Slide>
                    ))}

                </Swiper>
            </div>
        </Box>
    );
};
export default BannerBlog;
