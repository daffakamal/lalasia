import Link from "next/link";

const styleMain="flex space-x-10 my-auto cursor-pointer"
const styleImg="w-[260px] pointer-events-none"
const styleContent="flex flex-col self-center space-y-5 my-auto"
const styleH5="font-eudoxusMedium text-[12px] sm:text-[14px] md:text-[16px] text-grey"
const styleH4="font-eudoxusBold text-[16px] sm:text-[22px] md:text-[24px] 2xl:text-[26px] text-black"
const styleP="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey"
const styleWriterContainer="w-full flex items-center space-x-5"
const styleImgWriter="w-[18px] sm:w-[28px] pointer-events-none"
const styleWriter="w-full lg:w-1/4 2xl:w-2/12 font-eudoxusBold text-[12px] md:text-[14px] text-black"
const styleDate="invisible lg:visible font-eudoxusMedium text-[14px] text-grey"


function SimilarTopics () {
    return (
        <div className="w-full h-full grid content-center px-[24px] sm:px-16 xl:px-32 2xl:px-52 pt-48 bg-white">
            <div className="grid xl:container xl:mx-auto space-y-3">
                <h5 className="font-eudoxusBold text-yellow text-center text-sm sm:text-base md:text-lg">
                    Similar Topics
                </h5>
                <h2 className="font-eudoxusBold text-black text-center text-[24px] sm:text-[40px] md:text-[44px] leading-[31px] sm:leading-[57px] pb-14">
                    Maybe you are interested
                </h2>
                <div className="flex flex-col space-x-10 pt-5">
                    <div className="w-full grid space-y-5">
                        <div className="grid my-auto space-y-10">
                            <Link href="#!">
                                <div className={styleMain}>
                                    <img
                                        src="/images/Article/DetailArticle/Rectangle 60 (1).svg"
                                        className={styleImg}
                                        alt="Living room"
                                    />
                                    <div className={styleContent}>
                                        <h5 className={styleH5}>
                                            Tips and Trick
                                        </h5>
                                        <h4 className={styleH4}>
                                            6 ways to give your home minimalistic vibes
                                        </h4>
                                        <p className={styleP}>
                                            Home terrace decorations are part of every decoration or overall home design. Interiordesign.id, If by chance your house has enough space or space.
                                        </p>
                                        <div className={styleWriterContainer}>
                                            <img
                                                src="/images/Home-page/Ellipse 25.svg"
                                                className={styleImgWriter}
                                                alt="Person's photo"
                                            />
                                            <p className={styleWriter}>
                                                By Jerremy Jean
                                            </p>
                                            <p className={styleDate}>
                                                Friday, 1 April 2022
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="#!">
                                <div className={styleMain}>
                                    <img
                                        src="/images/Article/DetailArticle/Rectangle 61.svg"
                                        className={styleImg}
                                        alt="Kitchen"
                                    />
                                    <div className={styleContent}>
                                        <h5 className={styleH5}>
                                            Design Inspiration
                                        </h5>
                                        <h4 className={styleH4}>
                                            How to make your interiors cooler and more stylish
                                        </h4>
                                        <p className={styleP}>
                                            Home terrace decorations are part of every decoration or overall home design. Interiordesign.id, If by chance your house has enough space or space.
                                        </p>
                                        <div className={styleWriterContainer}>
                                            <img
                                                src="/images/Home-page/Ellipse 25 (1).svg"
                                                className={styleImgWriter}
                                                alt="Person's photo"
                                            />
                                            <p className={styleWriter}>
                                                By Michaela Augus
                                            </p>
                                            <p className={styleDate}>
                                                Friday, 1 April 2022
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="#!">
                                <div className={styleMain}>
                                    <img
                                        src="/images/Article/DetailArticle/Rectangle 62.svg"
                                        className={styleImg}
                                        alt="Bathroom"
                                    />
                                    <div className={styleContent}>
                                        <h5 className={styleH5}>
                                            Tips and Trick
                                        </h5>
                                        <h4 className={styleH4}>
                                            Elements to add character to your space
                                        </h4>
                                        <p className={styleP}>
                                            Home terrace decorations are part of every decoration or overall home design. Interiordesign.id, If by chance your house has enough space or space.
                                        </p>
                                        <div className={styleWriterContainer}>
                                            <img
                                                src="/images/Home-page/Ellipse 25 (2).svg"
                                                className={styleImgWriter}
                                                alt="Person's photo"
                                            />
                                            <p className={styleWriter}>
                                                By Kim Gurameh
                                            </p>
                                            <p className={styleDate}>
                                                Friday, 1 April 2022
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { SimilarTopics };