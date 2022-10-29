const styleImg="w-[210px] pointer-events-none"
const styleContent="flex flex-col self-center space-y-3 my-auto"
const styleContainer="flex items-center space-x-8 p-4 duration-200 hover:bg-orangeLight hover:rounded-xl cursor-pointer"
const styleH5="font-eudoxusMedium text-[12px] sm:text-[14px] md:text-[16px] text-grey"
const styleH4="font-eudoxusBold text-[16px] sm:text-[22px] md:text-[24px] text-black"
const styleP="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey"
const styleWriterContainer="flex items-center space-x-5 pt-2"
const styleImgWriter="w-[18px] sm:w-[28px] pointer-events-none"
const styleWriter="w-1/5 font-eudoxusBold text-[12px] md:text-[14px] text-black"
const styleDate="invisible lg:visible font-eudoxusMedium text-[14px] text-grey"

export default function ArticleList () {
    return (
        <div 
            className="grid content-center justify-items-center space-y-10" 
            data-aos="fade-up" 
            data-aos-duration="2000"
        >
            <div className={styleContainer}>
                <img 
                    src="/images/Article/Rectangle 45.svg"
                    className={styleImg}
                    alt=""
                />
                <div className={styleContent}>
                    <p className={styleH5}>
                        Tips and Trick
                    </p>
                    <h3 className={styleH4}>
                        Beautiful and Functional Home Terrace Decoration
                    </h3>
                    <p className={styleP}>
                        Home terrace decorations are part of every decoration or overall home design. Interiordesign.id, If by chance your house has enough space or space.
                    </p>
                    <div className={styleWriterContainer}>
                        <img
                            src="/images/Article/Ellipse 25 (8).svg"
                            className={styleImgWriter}
                            alt="Person's Photo"
                        />
                        <p className={styleWriter}>
                            By Morgan Goldberg
                        </p>
                        <p className={styleDate}>
                            Friday, 1 April 2022
                        </p>
                    </div>
                </div>
            </div>
            <div className={styleContainer}>
                <img 
                    src="/images/Article/Rectangle 46.svg"
                    className={styleImg}
                />
                <div className={styleContent}>
                    <p className={styleH5}>
                        Design Inspiration
                    </p>
                    <h3 className={styleH4}>
                        Modern Minimalist Home Design: Aesthetics of Modern Home Interiors
                    </h3>
                    <p className={styleP}>
                        Home terrace decorations are part of every decoration or overall home design. Interiordesign.id, If by chance your house has enough space or space.
                    </p>
                    <div className={styleWriterContainer}>
                        <img
                            src="/images/Article/Ellipse 25 (8).svg"
                            className={styleImgWriter}
                            alt="Person's Photo"
                        />
                        <p className={styleWriter}>
                            By Rizal Ahmad
                        </p>
                        <p className={styleDate}>
                            Friday, 1 April 2022
                        </p>
                    </div>
                </div>
            </div>
            <div className={styleContainer}>
                <img 
                    src="/images/Article/Rectangle 47.svg"
                    className={styleImg}
                />
                <div className={styleContent}>
                    <p className={styleH5}>
                        Color Guide
                    </p>
                    <h3 className={styleH4}>
                        20+ Best Kitchen Paint Colors That Make Kitchen Spaces Look More Fun
                    </h3>
                    <p className={styleP}>
                        Home terrace decorations are part of every decoration or overall home design. Interiordesign.id, If by chance your house has enough space or space.
                    </p>
                    <div className={styleWriterContainer}>
                        <img
                            src="/images/Article/Ellipse 25 (8).svg"
                            className={styleImgWriter}
                            alt="Person's Photo"
                        />
                        <p className={styleWriter}>
                            By Filipus Pendi
                        </p>
                        <p className={styleDate}>
                            Friday, 1 April 2022
                        </p>
                    </div>
                </div>
            </div>
            <button className="flex justify-center w-[170px] px-7 lg:px-5 py-3 font-eudoxusMedium text-black bg-whitebasic hover:bg-gray-100 rounded-lg border border-grey text-base md:text-lg cursor-pointer">
                Load More
            </button>
        </div>
    )
}