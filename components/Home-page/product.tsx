
function Product () {
    return (
        <div className="w-full h-full grid justify-items-center px-[24px] sm:px-16 xl:px-32 2xl:px-52 pb-32 bg-white">
            <div className="grid justify-items-center space-y-5" data-aos="fade-up" data-aos-duration="1500">
                <h3 className="font-eudoxusBold text-yellow text-sm sm:text-base md:text-lg">
                    Product
                </h3>
                <h2 className="font-eudoxusBold text-black text-[24px] sm:text-[40px] md:text-[44px] leading-[31px] sm:leading-[57px] text-center">
                    Our popular product
                </h2>
                <div className="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey leading-[25px] sm:leading-[32px] text-center">
                    <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
                </div>
            </div>
        </div>
    );
}

export { Product };