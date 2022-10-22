const styleNumber="font-eudoxusBold text-black text-[22px] sm:text-[40px] md:text-[44px]"
const styleWord="font-eudoxusMedium text-grey text-sm sm:text-base md:text-lg"

export default function Number () {
    return (
        <div className="w-full h-full grid space-y-5 my-auto" data-aos="fade-left" data-aos-duration="1500">
            <div className="grid grid-cols-3 justify-items-start lg:justify-items-end space-x-10">
                <div>
                    <p className={styleNumber}>20+</p>
                    <p className={styleWord}>Years Experience</p>
                </div>
                <div>
                    <p className={styleNumber}>483</p>
                    <p className={styleWord}>Happy Client</p>
                </div> 
                <div>
                    <p className={styleNumber}>150+</p>
                    <p className={styleWord}>Project Finished</p>
                </div> 
            </div>
            <div className="grid justify-items-end">
                <img 
                    src="/images/Home-page/unsplash_376KN_ISplE.png"
                    className="pt-5 w-full lg:w-[595px] 2xl:w-[620px] pointer-events-none"
                    alt="Sofa and dresser"
                />
            </div>
        </div>
    )
}