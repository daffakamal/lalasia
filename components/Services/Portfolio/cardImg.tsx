import Link from "next/link";

export default function CardImg() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 space-y-10 lg:space-y-0 lg:space-x-10 pt-20" data-aos="fade-up" data-aos-duration="2000">
            <div>
                <div className="grid relative overflow-hidden bg-no-repeat bg-cover">
                    <img 
                        src="/images/Services/Rectangle 40.svg"
                        className="w-[505px] pointer-events-none"
                    />
                    <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 overflow-hidden bg-fixed">
                        <div className="h-full flex items-end px-[24px] sm:px-16 py-[40px]">
                            <div className="grid text-white space-y-2">
                                <h3 className="font-eudoxusBold text-[12px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                                    Aesthetic Bedroom
                                </h3>
                                <p className="font-eudoxusRegular text-greyBorder text-xs sm:text-lg md:text-lg w-full md:w-3/5 lg:w-4/5 xl:w-full 2xl:w-7/12">
                                    We start renovating our client bedroom with minimalist concept and using combination white and wooden material
                                </p>
                                <Link href="#!">
                                    <a className="font-eudoxusMedium text-xs md:text-sm pt-2 hover:underline">
                                        See Detail
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-2 space-y-10">
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img 
                        src="/images/Services/Rectangle 38.svg"
                        className="h-full pointer-events-none"
                    />
                    <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 overflow-hidden bg-fixed">
                        <div className="h-full flex items-end px-[24px] sm:px-16 py-[40px]">
                            <div className="grid text-white space-y-2">
                                <h3 className="font-eudoxusBold text-[12px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                                    Jeruk Veldevana Living Room Design
                                </h3>
                                <p className="font-eudoxusRegular text-greyBorder text-xs sm:text-lg md:text-lg">
                                    We start renovating our client bedroom with minimalist concept and using combination white and wooden material
                                </p>
                                <Link href="#!">
                                    <a className="font-eudoxusMedium text-xs md:text-sm pt-2 hover:underline">
                                        See Detail
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img 
                        src="/images/Services/Rectangle 39.svg"
                        className="w-full h-full pointer-events-none"
                    />
                    <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 overflow-hidden bg-fixed">
                        <div className="h-full flex items-end px-[24px] sm:px-16 py-[40px]">
                            <div className="grid text-white space-y-2">
                                <h3 className="font-eudoxusBold text-[12px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                                    Cozy Co-working Space
                                </h3>
                                <p className="font-eudoxusRegular text-greyBorder text-xs sm:text-lg md:text-lg">
                                    We start renovating our client bedroom with minimalist concept and using combination white and wooden material
                                </p>
                                <Link href="#!">
                                    <a className="font-eudoxusMedium text-xs md:text-sm pt-2 hover:underline">
                                        See Detail
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}