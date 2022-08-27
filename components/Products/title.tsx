
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
                <img 
                    src="/images/Home-page/Rectangle 38.svg"
                    className="w-full pointer-events-none"
                />
            </div>
        </div>
    );
}

export { Title };