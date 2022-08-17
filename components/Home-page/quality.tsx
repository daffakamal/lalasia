import Link from "next/link";

const styleNumber="font-eudoxusBold text-black text-[44px]"
const styleWord="font-eudoxusMedium text-grey text-[18px]"

function Quality () {
    return (
        <div className="w-full h-full grid content-center px-16 xl:px-32 2xl:px-52 pb-32 bg-white">
            <div className="grid space-y-3">
                <h3 className="font-eudoxusBold text-yellow text-[18px]">Our Quality</h3>
                <div className="flex flex-row gap-32">
                    <div className="grid space-y-5 w-full my-auto">
                        <h2 className="font-eudoxusBold text-black text-[44px] leading-[57px]">Crafted by talented and high quality material</h2>
                        <p className="font-eudoxusRegular text-[18px] text-grey py-5">Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
                        <Link href="#!">
                            <a className="font-eudoxusBold flex justify-center items-center w-[170px] cursor-pointer text-white bg-green hover:bg-green2 duration-300 py-2 rounded text-[18px]">
                                Learn More
                            </a>
                        </Link>
                        <img 
                            src="/images/Home-page/unsplash_mpN7xjKQ_Ns.svg"
                            className="pt-5 w-[595px] pointer-events-none"
                        />
                    </div>
                    <div className="grid w-full space-y-5 my-auto">
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
                </div>
            </div>
        </div>
    );
}

export { Quality };