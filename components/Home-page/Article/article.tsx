import Cards from "./articleCards";

function Article () {
    return (
        <>
        <div className="w-full h-full grid content-center px-16 xl:px-32 2xl:px-52 pb-24 bg-white">
            <div className="grid space-y-3">
                <h3 className="font-eudoxusBold text-yellow text-sm sm:text-base md:text-lg">Articles</h3>
                <div className="flex items-start flex-col 2xl:flex-row gap-28">
                    <div className="grid content-start space-y-10 w-full">
                        <h2 className="font-eudoxusBold text-black text-[24px] sm:text-[40px] md:text-[44px] leading-[31px] sm:leading-[57px]">The best furniture comes from Lalasia</h2>
                        <p className="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey">Pellentesque etiam blandit in tincidunt at donec.</p>
                        <div className="pt-5">
                            <img 
                                src="/images/Home-page/Rectangle 8.svg"
                                className="w-full xl:w-[582px] 2xl:w-[582px] pointer-events-none"
                            />
                        </div>
                    </div>
                    <Cards/>
                </div>
            </div>
        </div>
        </>
    );
}

export { Article };