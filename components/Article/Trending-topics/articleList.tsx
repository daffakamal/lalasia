export default function ArticleList () {
    const styleImg="w-[210px] pointer-events-none"
    const styleContent="flex flex-col self-center space-y-3 my-auto"
    const styleH5="font-eudoxusMedium text-[12px] sm:text-[14px] md:text-[16px] text-grey"
    const styleH4="font-eudoxusBold text-[16px] sm:text-[22px] md:text-[24px] text-black"
    const styleP="font-eudoxusMedium text-sm sm:text-base md:text-lg text-grey"
    const styleWriterContainer="flex items-center space-x-5 pt-2"
    const styleImgWriter="w-[18px] sm:w-[28px] pointer-events-none"
    const styleWriter="w-1/5 font-eudoxusBold text-[12px] md:text-[14px] text-black"
    const styleDate="invisible lg:visible font-eudoxusMedium text-[14px] text-grey"

    return (
        <div className="grid content-center space-y-10">
            <div className="flex items-center space-x-8">
                <img 
                    src="/images/Article/Rectangle 45.svg"
                    className={styleImg}
                />
                <div className={styleContent}>
                    <p className={styleH5}>Tips and Trick</p>
                    <h3 className={styleH4}>Beautiful and Functional Home Terrace Decoration</h3>
                    <p className={styleP}>Home terrace decorations are part of every decoration or overall home design. Interiordesign.id, If by chance your house has enough space or space.</p>
                    <div className={styleWriterContainer}>
                        <img
                            src="/images/Article/Ellipse 25 (8).svg"
                            className={styleImgWriter}
                        />
                        <p className={styleWriter}>By Morgan Goldberg</p>
                        <p className={styleDate}>Friday, 1 April 2022</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-8">
                <img 
                    src="/images/Article/Rectangle 46.svg"
                    className={styleImg}
                />
                <div className={styleContent}>
                    <p className={styleH5}>Design Inspiration</p>
                    <h3 className={styleH4}>Modern Minimalist Home Design: Aesthetics of Modern Home Interiors</h3>
                    <p className={styleP}>Home terrace decorations are part of every decoration or overall home design. Interiordesign.id, If by chance your house has enough space or space.</p>
                    <div className={styleWriterContainer}>
                        <img
                            src="/images/Article/Ellipse 25 (8).svg"
                            className={styleImgWriter}
                        />
                        <p className={styleWriter}>By Rizal Ahmad</p>
                        <p className={styleDate}>Friday, 1 April 2022</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-8">
                <img 
                    src="/images/Article/Rectangle 47.svg"
                    className={styleImg}
                />
                <div className={styleContent}>
                    <p className={styleH5}>Color Guide</p>
                    <h3 className={styleH4}>20+ Best Kitchen Paint Colors That Make Kitchen Spaces Look More Fun</h3>
                    <p className={styleP}>Home terrace decorations are part of every decoration or overall home design. Interiordesign.id, If by chance your house has enough space or space.</p>
                    <div className={styleWriterContainer}>
                        <img
                            src="/images/Article/Ellipse 25 (8).svg"
                            className={styleImgWriter}
                        />
                        <p className={styleWriter}>By Filipus Pendi</p>
                        <p className={styleDate}>Friday, 1 April 2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}