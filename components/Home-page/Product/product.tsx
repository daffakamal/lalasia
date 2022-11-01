import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import dresser from "../../../public/images/Home-page/Rectangle 23 (5).svg";

const styleImg="w-auto mb-5"
const styleContent="w-full flex flex-col self-center space-y-3 md:space-y-2 my-auto"
const styleH5="font-eudoxusMedium text-[12px] sm:text-[14px] md:text-[16px] text-grey pt-5 md:pt-0"
const styleH4="font-eudoxusBold text-[16px] sm:text-[22px] md:text-[24px] text-black"
const styleP="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey"

function Product () {
    return (
        <div className="w-full h-full grid justify-items-center px-[24px] sm:px-16 xl:px-32 2xl:px-52 pb-32 bg-white">
            <div 
                className="grid justify-items-center space-y-5 mb-14" 
                data-aos="fade-up" 
                data-aos-duration="1500"
            >
                <h3 className="font-eudoxusBold text-yellow text-sm sm:text-base md:text-lg">
                    Product
                </h3>
                <h2 className="font-eudoxusBold text-black text-[24px] sm:text-[40px] md:text-[44px] leading-[31px] sm:leading-[57px] text-center">
                    Our popular product
                </h2>
                <div className="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey leading-[25px] sm:leading-[32px] text-center">
                    <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
                </div>
            </div>
            <Swiper 
                data-aos="fade-up" 
                data-aos-duration="1500"
                spaceBetween={-40}
                slidesPerView={3}
                grabCursor={true}
                loop={true}
                navigation
                pagination
                className="w-full"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="grid mx-auto overflow-hidden xl:px-20 xl:py-5 px-7 py-3">
                        <img
                            src={dresser.src}
                            className={styleImg}
                            alt="Dresser variant"
                        />
                        <div className={styleContent}>
                            <h5 className={styleH5}>
                                Dresser
                            </h5>
                            <h4 className={styleH4}>
                                Dresser Variant
                            </h4>
                            <p className={styleP}>
                                Combination of wood and art
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid mx-auto overflow-hidden xl:px-20 xl:py-5 px-7 py-3">
                        <img
                            src="/images/Home-page/Rectangle 23 (1).svg"
                            className={styleImg}
                            alt="White aesthetic chair"
                        />
                        <div className={styleContent}>
                            <h5 className={styleH5}>
                                Chair
                            </h5>
                            <h4 className={styleH4}>
                                White Aesthetic Chair
                            </h4>
                            <p className={styleP}>
                                Combination of wood and art
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid mx-auto overflow-hidden xl:px-20 xl:py-5 px-7 py-3">
                        <img
                            src="/images/Home-page/Rectangle 23 (2).svg"
                            className={styleImg}
                            alt="Smart lamp"
                        />
                        <div className={styleContent}>
                            <h5 className={styleH5}>
                                Lamp
                            </h5>
                            <h4 className={styleH4}>
                                Smart Lamp
                            </h4>
                            <p className={styleP}>
                                Easy to use with bluetooth connection
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid mx-auto overflow-hidden xl:px-20 xl:py-5 px-7 py-3">
                        <img
                            src="/images/Home-page/Rectangle 23 (6).svg"
                            className={styleImg}
                            alt="Mediteranian sofa"
                        />
                        <div className={styleContent}>
                            <h5 className={styleH5}>
                                Sofa
                            </h5>
                            <h4 className={styleH4}>
                                Mediteranian Sofa
                            </h4>
                            <p className={styleP}>
                                Using kapuk randu material
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export { Product }