
function Title () {
    return (
        <div className="w-full h-full bg-white">
            <div className="grid justify-items-center px-[24px] sm:px-16 xl:px-32 2xl:px-52 pt-52">
                <div className="grid justify-items-center xl:container xl:mx-auto space-y-5">
                    <h2 className="font-eudoxusBold text-5xl md:text-[64px] leading-[70px] md:leading-[83px] text-[#151411] text-center">Products</h2>
                    <div className="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey leading-[25px] sm:leading-[32px] text-center pb-14">
                        <p>We display products based on the latest products we have, if you want to see our old products please enter the name of the item</p>
                    </div>
                </div>
            </div>
            <div className="w-full pb-14">
                <div className="p-12 relative overflow-hidden bg-no-repeat bg-cover">
                    <img 
                        src="/images/Home-page/Rectangle 38.svg"
                        className="w-full pointer-events-none brightness-90"
                    />
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                        <div className="flex justify-start items-center h-full px-[132px] py-[149px]">
                            <div className="text-white space-y-5">
                                <a className="inline-block px-7 py-3 font-eudoxusMedium bg-green text-gray-200 font-medium text-sm leading-snug rounded-3xl"
                                >Discount</a>
                                <h2 className="font-eudoxusBold text-4xl">Ramadhan Sale Offer</h2>
                                <h4 className="font-eudoxusMedium text-xl">Get 40% off for the first transaction on Lalasia</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Title };