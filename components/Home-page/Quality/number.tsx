const styleNumber="font-eudoxusBold text-black text-[22px] sm:text-[40px] md:text-[44px]"
const styleWord="font-eudoxusMedium text-grey text-sm sm:text-base md:text-lg"

export default function Number () {
    return (
        <div className="grid w-full h-full space-y-5 my-auto">
            <div className="grid grid-cols-3">
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
                <img 
                    src="/images/Home-page/unsplash_376KN_ISplE.svg"
                    className="pt-5 w-[595px] pointer-events-none"
                />
        </div>
    )
}