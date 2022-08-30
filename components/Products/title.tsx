
function Title () {
    return (
        <div className="w-full h-full bg-white">
            <div className="grid justify-items-center px-[24px] sm:px-16 xl:px-32 2xl:px-52 pt-28 md:pt-32 lg:pt-52">
                <div className="grid justify-items-center xl:container xl:mx-auto space-y-5">
                    <h2 className="font-eudoxusBold text-4xl sm:text-5xl md:text-[64px] md:leading-[83px] text-[#151411] text-center">Products</h2>
                    <div className="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey leading-[25px] sm:leading-[32px] text-center pb-14">
                        <p>We display products based on the latest products we have, if you want to see our old products please enter the name of the item</p>
                    </div>
                </div>
            </div>
            <div className="w-full 3xl:container 3xl:mx-auto pb-14">
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img 
                        src="/images/Home-page/Rectangle 38.svg"
                        className="w-full pointer-events-none brightness-90"
                    />
                    <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 overflow-hidden bg-fixed">
                        <div className="h-full flex justify-start items-center px-[24px] sm:px-16 xl:px-32 2xl:px-[132px] py-[149px] ">
                            <div className="text-white space-y-2 lg:space-y-5">
                                <a className="inline-block px-5 py-2 font-eudoxusMedium bg-green text-gray-200 text-xs md:text-sm leading-snug rounded-3xl">
                                    Discount
                                </a>
                                <h2 className="font-eudoxusBold text-[24px] sm:text-[32px] md:text-[36px] lg:text-[44px]">
                                    Ramadhan Sale Offer
                                </h2>
                                <h4 className="font-eudoxusMedium text-xs sm:text-lg md:text-xl">
                                    Get 40% off for the first transaction on Lalasia
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Title };