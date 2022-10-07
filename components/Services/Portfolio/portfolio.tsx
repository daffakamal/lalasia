import Link from "next/link";
import CardImg from "./cardImg";

function Portfolio () {
    return (
        <>
        <div className="w-full h-full grid content-center px-[24px] sm:px-16 xl:px-32 2xl:px-52 pt-32 xl:pt-48 bg-white">
            <div className="grid xl:container xl:mx-auto space-y-3" data-aos="fade-up" data-aos-duration="2000">
                <h3 className="font-eudoxusBold text-yellow text-sm sm:text-base md:text-lg">
                    Portfolio
                </h3>
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-32">
                    <div className="w-full grid content-start lg:pb-10">
                        <h2 className="font-eudoxusBold text-black text-[24px] sm:text-[40px] md:text-[44px] leading-[31px] sm:leading-[57px]">
                            Amazing project we have done before
                        </h2>
                    </div>
                    <div className="w-full grid content-start space-y-5">
                        <p className="font-eudoxusRegular text-xs sm:text-sm md:text-lg lg:text-lg text-grey leading-[25px] sm:leading-[32px] lg:pb-5">
                            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
                        </p>
                        <Link href="#!">
                            <a className="font-eudoxusBold flex justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/2 xl:w-1/3 cursor-pointer text-green hover:text-white bg-white hover:bg-green2 border-2 border-green2 duration-300 py-2 px-2 rounded text-sm sm:text-base md:text-lg">
                                View Portfolio
                            </a>
                        </Link>
                    </div>
                </div>
                <CardImg />
            </div>
        </div>
        </>
    );
}

export { Portfolio };