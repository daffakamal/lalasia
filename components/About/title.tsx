
function Title () {
    return (
        <div className="w-full h-full bg-white">
            <div className="grid justify-items-center px-[24px] sm:px-16 xl:px-32 2xl:px-52 pt-28 md:pt-32 lg:pt-52">
                <div className="grid justify-items-center xl:container xl:mx-auto space-y-5" data-aos="fade-up" data-aos-duration="2000">
                    <h2 className="font-eudoxusBold text-4xl sm:text-5xl md:text-[64px] md:leading-[83px] text-[#151411] text-center" data-aos="fade-zoom-in" data-aos-duration="2000">
                        About Us
                    </h2>
                    <div className="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey leading-[25px] sm:leading-[32px] text-center pb-14" data-aos="fade-zoom-in" data-aos-duration="2000">
                        <p>We display products based on the latest products we have, if you want to see our old products please enter the name of the item</p>
                    </div>
                    <img 
                        src="/images/About/Rectangle 40.png"
                        className="w-full pointer-events-none"
                    />
                </div>
            </div>
        </div>
    );
}

export { Title };