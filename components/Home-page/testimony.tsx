
function Testimony () {
    return (
        <div className="w-full h-full grid justify-items-center px-16 xl:px-32 2xl:px-52 pb-32 bg-white">
            <div className="grid justify-items-center space-y-5">
                <h3 className="font-eudoxusBold text-yellow text-sm sm:text-base md:text-lg">Testimonials</h3>
                <h2 className="font-eudoxusBold text-black text-[24px] sm:text-[40px] md:text-[44px] leading-[31px] sm:leading-[57px]">What our customer say</h2>
                <div className="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey leading-[25px] sm:leading-[32px] text-grey pb-10">
                    <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
                </div>
                <div className="rounded bg-whitebasic p-10 space-y-10 max-w-2xl">
                    <p className="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey leading-[25px] sm:leading-[32px] text-grey">
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. 
                    </p>
                    <div className="flex items-center space-x-5">
                        <img
                            src="/images/Home-page/Ellipse 1.svg"
                            className="w-[28px] sm:w-[40px] md:w-[50px] pointer-events-none"
                        />
                        <p className="font-eudoxusBold text-black text-sm sm:text-base md:text-[20px]">Janne Cooper</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Testimony };