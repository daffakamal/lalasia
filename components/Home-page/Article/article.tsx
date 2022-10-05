import ArticleCards from "./articleCards";

const styleContent="md:hidden flex flex-col self-center space-y-3 md:space-y-5 m-auto"
const styleH5="font-eudoxusMedium text-[12px] sm:text-[14px] md:text-[16px] text-grey pt-5 md:pt-0"
const styleH4="font-eudoxusBold text-[16px] sm:text-[22px] md:text-[24px] text-black"
const styleP="font-eudoxusMedium text-sm sm:text-base md:text-lg text-grey"
const styleWriterContainer="w-full flex items-center space-x-3 md:space-x-5"
const styleImgWriter="w-[18px] sm:w-[28px] pointer-events-none"
const styleWriter="w-full lg:w-2/3 2xl:w-1/2 font-eudoxusBold text-[12px] md:text-[14px] text-black"
const styleDate="invisible lg:visible font-eudoxusMedium text-[14px] text-grey"

function Article () {
    return (
        <>
        <div className="w-full h-full grid content-center px-16 xl:px-32 2xl:px-52 pb-24 bg-white">
            <div className="grid xl:container xl:mx-auto space-y-3">
                <h3 className="font-eudoxusBold text-yellow text-sm sm:text-base md:text-lg" data-aos="fade-right" data-aos-duration="1500">
                    Articles
                </h3>
                <div className="flex items-start flex-col 2xl:flex-row gap-10 md:gap-28">
                    <div className="grid content-start space-y-10 w-full" data-aos="fade-right" data-aos-duration="1500">
                        <h2 className="font-eudoxusBold text-black text-[24px] sm:text-[40px] md:text-[44px] leading-[31px] sm:leading-[57px]">
                            The best furniture comes from Lalasia
                        </h2>
                        <p className="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey">
                            Pellentesque etiam blandit in tincidunt at donec.
                        </p>
                        <div className="grid justify-items-center pt-5 max-w-sm md:max-w-full">
                            <img 
                                src="/images/Home-page/Rectangle 8.svg"
                                className="w-full md:w-3/4 xl:w-[582px] 2xl:w-[582px] pointer-events-none"
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
                    </div>
                    <ArticleCards/>
                </div>
            </div>
        </div>
        </>
    );
}

export { Article };