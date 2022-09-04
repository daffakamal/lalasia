import Link from "next/link";

function DailyNews () {
    return (
        <div className="w-full h-full grid content-center px-16 xl:px-32 2xl:px-52 pt-36 bg-white">
            <div className="grid xl:container xl:mx-auto space-y-3">
                <h5 className="font-eudoxusBold text-yellow text-sm sm:text-base md:text-lg">
                    Daily News
                </h5>
                <h2 className="font-eudoxusBold text-black text-[24px] sm:text-[40px] md:text-[44px] leading-[31px] sm:leading-[57px]">
                    Today top headlines
                </h2>
                <div className="flex flex-col 2xl:flex-row gap-20 pt-5">
                    <div className="grid content-start space-y-5 w-full cursor-pointer">
                        <img 
                            src="/images/Article/Rectangle 44.svg"
                            className="w-full xl:w-[582px] 2xl:w-full pointer-events-none"
                        />
                        <p className="font-eudoxusMedium text-grey text-xs sm:text-sm md:text-lg">
                            Design Inspiration
                        </p>
                        <h3 className="font-eudoxusBold text-black text-xs sm:text-xl md:text-2xl lg:text-3xl">
                            This 400-Square-Foot New York Apartment Is Maximized With Custom Millwork
                        </h3>
                        <p className="font-eudoxusRegular text-grey text-sm sm:text-base md:text-lg">
                            Is it true that the bedroom design is the most personal reflection of the owner? Many people believe that to be able to judge a person's personality, it is enough to
                        </p>
                        <div className="flex items-center space-x-5">
                            <img
                                src="/images/Home-page/Ellipse 1.svg"
                                className="w-[20px] sm:w-[20px] md:w-[35px] pointer-events-none"
                            />
                            <p className="font-eudoxusBold text-black text-sm md:text-[14px]">By Morgan Goldberg</p>
                            <p className="font-eudoxusMedium text-grey text-xs md:text-[14px] pl-10">Tuesday, 17 May 2022</p>
                        </div>
                    </div>
                    <div className="grid content-start space-y-5 w-full cursor-pointer">
                        <img 
                            src="/images/Article/Rectangle 44.svg"
                            className="w-full xl:w-[582px] 2xl:w-full pointer-events-none"
                        />
                        <p className="font-eudoxusMedium text-grey text-sm sm:text-base md:text-lg">
                            Design Inspiration
                        </p>
                        <h3 className="font-eudoxusBold text-black text-xs sm:text-sm md:text-lg lg:text-3xl">
                            This 400-Square-Foot New York Apartment Is Maximized With Custom Millwork
                        </h3>
                        <p className="font-eudoxusRegular text-grey text-sm sm:text-base md:text-lg">
                            Is it true that the bedroom design is the most personal reflection of the owner? Many people believe that to be able to judge a person's personality, it is enough to
                        </p>
                        <div className="flex items-center space-x-5">
                            <img
                                src="/images/Home-page/Ellipse 1.svg"
                                className="w-[20px] sm:w-[20px] md:w-[35px] pointer-events-none"
                            />
                            <p className="font-eudoxusBold text-black text-sm md:text-[14px]">By Morgan Goldberg</p>
                            <p className="font-eudoxusMedium text-grey text-xs md:text-[14px] pl-10">Tuesday, 17 May 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { DailyNews };