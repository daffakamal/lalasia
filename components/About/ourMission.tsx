
function OurMission () {
    const styleNumber="font-eudoxusBold text-black text-[22px] sm:text-[40px] md:text-[44px]"
    const styleWord="font-eudoxusMedium text-grey text-sm sm:text-base md:text-lg"
    const styleContent="flex gap-x-10"
    const styleImg="w-[62px] pointer-events-none"
    const styleSubContent="grid space-y-3"
    const styleTitle="font-eudoxusBold text-sm sm:text-base md:text-lg xl:text-2xl text-black leading-[25px] sm:leading-[32px]"
    const styleDescription="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey leading-[25px] sm:leading-[32px]"

    return (
        <div className="w-full h-full grid content-center px-[24px] sm:px-16 xl:px-32 2xl:px-52 py-48 bg-white">
            <div className="grid xl:container xl:mx-auto space-y-3">
                <h5 className="font-eudoxusBold text-yellow text-sm sm:text-base md:text-lg">
                    Our Mission
                </h5>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[60px] 2xl:gap-[150px]">
                    <div>
                        <div className="font-eudoxusBold text-black text-[24px] sm:text-[40px] md:text-[44px] leading-[31px] sm:leading-[57px]">
                            <h2>Our team dedicated to help find  smart home product</h2>
                        </div>
                        <div className="w-full grid pt-20 my-auto">
                            <div className="grid grid-cols-3 justify-items-start space-x-10">
                                <div>
                                    <p className={styleNumber}>20+</p>
                                    <p className={styleWord}>Years Experience</p>
                                </div>
                                <div>
                                    <p className={styleNumber}>483</p>
                                    <p className={styleWord}>Happy Client</p>
                                </div> 
                                <div>
                                    <p className={styleNumber}>150+</p>
                                    <p className={styleWord}>Project Finished</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid space-y-10 justify-items-start">
                            <div className={styleContent}>
                                <img 
                                    src="/images/About/Group 15.svg"
                                    className={styleImg}
                                />
                                <div className={styleSubContent}>
                                    <h3 className={styleTitle}>
                                        24/7 Supports
                                    </h3>
                                    <p className={styleDescription}>
                                        24/7 support means a support service that is provided 24 hours a day and 7 days a week
                                    </p>
                                </div>
                            </div>
                            <div className={styleContent}>
                                <img 
                                    src="/images/About/Group 16.svg"
                                    className={styleImg}
                                />
                                <div className={styleSubContent}>
                                    <h3 className={styleTitle}>
                                        Free Consultation
                                    </h3>
                                    <p className={styleDescription}>
                                        A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible
                                    </p>
                                </div>
                            </div>
                            <div className={styleContent}>
                                <img 
                                    src="/images/About/Group 17.svg"
                                    className={styleImg}
                                />
                                <div className={styleSubContent}>
                                    <h3 className={styleTitle}>
                                        Overall Guarantee
                                    </h3>
                                    <p className={styleDescription}>
                                    The comprehensive guarantee is required for import, warehousing, transit, processing and specific use
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { OurMission };