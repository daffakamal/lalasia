
export default function ArticleCards () {
    const styleMain="grid md:flex md:space-x-10 my-auto max-w-sm md:max-w-full"
    const styleImg="w-full md:w-[260px] pointer-events-none"
    const styleContent="flex flex-col self-center space-y-3 md:space-y-5 my-auto"
    const styleH5="font-eudoxusMedium text-[12px] sm:text-[14px] md:text-[16px] text-grey pt-5 md:pt-0"
    const styleH4="font-eudoxusBold text-[16px] sm:text-[22px] md:text-[24px] text-black"
    const styleP="font-eudoxusMedium text-sm sm:text-base md:text-lg text-grey"
    const styleWriterContainer="w-full flex items-center space-x-3 md:space-x-5"
    const styleImgWriter="w-[18px] sm:w-[28px] pointer-events-none"
    const styleWriter="w-full lg:w-2/3 2xl:w-1/2 font-eudoxusBold text-[12px] md:text-[14px] text-black"
    const styleDate="invisible lg:visible font-eudoxusMedium text-[14px] text-grey"

    return (
        <div className="w-full grid space-y-5" data-aos="fade-left" data-aos-duration="1500">
            <div className="grid my-auto space-y-10">
                <div className={styleMain}>
                    <img
                        src="/images/Home-page/Rectangle 20.svg"
                        className={styleImg}
                    />
                    <div className={styleContent}>
                        <h5 className={styleH5}>Tips and Trick</h5>
                        <h4 className={styleH4}>6 ways to give your home minimalistic vibes</h4>
                        <p className={styleP}>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .</p>
                        <div className={styleWriterContainer}>
                            <img
                                src="/images/Home-page/Ellipse 25.svg"
                                className={styleImgWriter}
                            />
                            <p className={styleWriter}>By Jerremy Jean</p>
                            <p className={styleDate}>Friday, 1 April 2022</p>
                        </div>
                    </div>
                </div>
                <div className={styleMain}>
                    <img
                        src="/images/Home-page/Rectangle 20.svg"
                        className={styleImg}
                    />
                    <div className={styleContent}>
                        <h5 className={styleH5}>Design Inspiration</h5>
                        <h4 className={styleH4}>How to make your interiors cooler and more stylish</h4>
                        <p className={styleP}>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .</p>
                        <div className={styleWriterContainer}>
                            <img
                                src="/images/Home-page/Ellipse 25 (1).svg"
                                className={styleImgWriter}
                            />
                            <p className={styleWriter}>By Michaela Augus</p>
                            <p className={styleDate}>Friday, 1 April 2022</p>
                        </div>
                    </div>
                </div>
                <div className={styleMain}>
                    <img
                        src="/images/Home-page/Rectangle 20.svg"
                        className={styleImg}
                    />
                    <div className={styleContent}>
                        <h5 className={styleH5}>Tips and Trick</h5>
                        <h4 className={styleH4}>Elements to add character to your space</h4>
                        <p className={styleP}>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .</p>
                        <div className={styleWriterContainer}>
                            <img
                                src="/images/Home-page/Ellipse 25 (2).svg"
                                className={styleImgWriter}
                            />
                            <p className={styleWriter}>By Kim Gurameh</p>
                            <p className={styleDate}>Friday, 1 April 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}