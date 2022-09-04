import Link from "next/link";

function Title () {
    return (
        <div className="w-full h-full bg-white">
            <div className="grid justify-items-center px-[24px] sm:px-16 xl:px-32 2xl:px-52 pt-28 md:pt-32 lg:pt-52">
                <div className="grid justify-items-center xl:container xl:mx-auto">
                    <h2 className="font-eudoxusBold text-4xl sm:text-5xl md:text-[64px] md:leading-[83px] text-[#151411] text-center pb-5">
                        Article
                    </h2>
                    <div className="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey leading-[25px] sm:leading-[32px] text-center pb-20">
                        <p>We display products based on the latest products we have, if you want to see our old products please enter the name of the item</p>
                    </div>
                    <img 
                        src="/images/Article/Rectangle 39.svg"
                        className="w-full pointer-events-none"
                    />
                    <Link href="#!">
                        <div className="grid justify-items-center z-20 cursor-pointer -mt-36 drop-shadow-lg">
                            <div className="rounded bg-whitebasic p-10 2xl:p-14 space-y-7 max-w-5xl">
                                <p className="font-eudoxusMedium text-grey text-sm sm:text-base md:text-lg">
                                    Tips and Trick
                                </p>
                                <h3 className="font-eudoxusBold text-black text-xs sm:text-sm md:text-lg lg:text-3xl">
                                    This 400-Square-Foot New York Apartment Is Maximized With Custom Millwork
                                </h3>
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
                    </Link>
                </div>
            </div>
        </div>
    );
}

export { Title };