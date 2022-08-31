const styleNumber="font-eudoxusBold text-green text-4xl sm:text-5xl md:text-[64px]"
const styleSubTitle="font-eudoxusBold text-black text-sm sm:text-lg md:text-2xl lg:text-[24px] sm:pt-2 md:pt-5"
const styleDescription="font-eudoxusMedium text-grey text-xs sm:text-sm md:text-lg lg:text-lg"

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
                        className="w-full pointer-events-none"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-16 md:gap-y-20 pt-20">
                        <div className="grid space-y-3">
                            <p className={styleNumber}>
                                01
                            </p>
                            <h3 className={styleSubTitle}>
                                Furniture
                            </h3>
                            <p className={styleDescription}>
                                At the ultimate smart home, you're met with technology before you even step through the front door. 
                            </p>
                        </div>
                        <div className="grid space-y-3">
                            <p className={styleNumber}>
                                02
                            </p>
                            <h3 className={styleSubTitle}>
                                Home Decoration
                            </h3>
                            <p className={styleDescription}>
                                Create a calming summer escape with our luxurious home accessories for the balmy evenings.
                            </p>
                        </div>
                        <div className="grid space-y-3">
                            <p className={styleNumber}>
                                03
                            </p>
                            <h3 className={styleSubTitle}>
                                Kitchen Cabinet
                            </h3>
                            <p className={styleDescription}>
                                Introducing the modular kitchen cabinet system. Start with our huge selection of base and wall cabinets. 
                            </p>
                        </div>
                        <div className="grid space-y-3">
                            <p className={styleNumber}>
                                04
                            </p>
                            <h3 className={styleSubTitle}>
                                Interior Design
                            </h3>
                            <p className={styleDescription}>
                                Innovative products often feature innovative designs that play with the patterns we are familiar.
                            </p>
                        </div>
                        <div className="grid space-y-3">
                            <p className={styleNumber}>
                                05
                            </p>
                            <h3 className={styleSubTitle}>
                                Exterior Design
                            </h3>
                            <p className={styleDescription}>
                                These stylish and resilient products provide up-to-date options for roofing, siding, decking, and outdoor spaces.
                            </p>
                        </div>
                        <div className="grid space-y-3">
                            <p className={styleNumber}>
                                06
                            </p>
                            <h3 className={styleSubTitle}>
                                Custom Furniture
                            </h3>
                            <p className={styleDescription}>
                                With Quality Materials and Modern Designs, we have Designs for all Tastes. we bring you World Class Designs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Title };