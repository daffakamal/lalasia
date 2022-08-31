
function Title () {
    return (
        <div className="w-full h-full bg-white">
            <div className="grid justify-items-center px-[24px] sm:px-16 xl:px-32 2xl:px-52 pt-28 md:pt-32 lg:pt-52">
                <div className="grid justify-items-center xl:container xl:mx-auto space-y-5">
                    <h2 className="font-eudoxusBold text-4xl sm:text-5xl md:text-[64px] md:leading-[83px] text-[#151411] text-center">
                        Services
                    </h2>
                    <div className="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey leading-[25px] sm:leading-[32px] text-center pb-14">
                        <p>The product crafted by talented crafter and using high quality material with love inside</p>
                    </div>
                    <img 
                        src="/images/Services/Rectangle 24.svg"
                        className="w-full pointer-events-none pb-10"
                    />
                </div>
            </div>
        </div>
    );
}

export { Title };