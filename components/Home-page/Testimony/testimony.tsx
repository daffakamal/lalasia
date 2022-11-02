import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from 'swiper';
  
// install Swiper modules
SwiperCore.use([Autoplay]);

import person1 from "../../../public/images/Home-page/Ellipse 1.png";
import person2 from "../../../public/images/Home-page/Ellipse 25 (1).svg";
import person3 from "../../../public/images/Home-page/Ellipse 25 (2).svg";

const styleTestimonyText="font-eudoxusRegular text-sm sm:text-base md:text-lg leading-[25px] sm:leading-[32px] text-grey"
const styleContent="flex items-center space-x-5"
const styleImg="w-[28px] sm:w-[40px] md:w-[50px] pointer-events-none"
const styleName="font-eudoxusBold text-black text-sm sm:text-base md:text-lg"

function Testimony () {
    return (
        <div className="w-full h-full grid justify-items-center px-16 xl:px-32 2xl:px-52 pb-32 bg-white">
            <div 
                className="grid justify-items-center space-y-5" 
                data-aos="fade-up" 
                data-aos-duration="1500"
            >
                <h3 className="font-eudoxusBold text-yellow text-sm sm:text-base md:text-lg">
                    Testimonials
                </h3>
                <h2 className="font-eudoxusBold text-black text-[24px] sm:text-[40px] md:text-[44px] leading-[31px] sm:leading-[57px]">
                    What our customer say
                </h2>
                <div className="font-eudoxusRegular text-sm sm:text-base md:text-lg leading-[25px] sm:leading-[32px] text-grey pb-20">
                    <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
                </div>
                <Swiper 
                    data-aos="fade-zoom-in" 
                    data-aos-duration="1500" 
                    data-aos-easing="ease-in"
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{
                        clickable: true
                    }} 
                    grabCursor={true}
                    loop={true}
                    autoplay={{ 
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    className="w-full"
                >
                    <SwiperSlide>
                        <div className="mx-auto rounded bg-whitebasic p-10 space-y-10 max-w-2xl mb-10">
                            <p className={styleTestimonyText}>
                                "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non."
                            </p>
                            <div className={styleContent}>
                                <img
                                    src={person1.src}
                                    className={styleImg}
                                    alt="Person picture"
                                />
                                <p className={styleName}>
                                    Janne Cooper
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto rounded bg-whitebasic p-10 space-y-10 max-w-2xl mb-10">
                            <p className={styleTestimonyText}>
                                "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non."
                            </p>
                            <div className={styleContent}>
                                <img
                                    src={person2.src}
                                    className={styleImg}
                                    alt="Person picture"
                                />
                                <p className={styleName}>
                                    Isabella Cole
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mx-auto rounded bg-whitebasic p-10 space-y-10 max-w-2xl mb-10">
                            <p className={styleTestimonyText}>
                                "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non."
                            </p>
                            <div className={styleContent}>
                                <img
                                    src={person3.src}
                                    className={styleImg}
                                    alt="Person picture"
                                />
                                <p className={styleName}>
                                    Jonathan Garnes
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export { Testimony };