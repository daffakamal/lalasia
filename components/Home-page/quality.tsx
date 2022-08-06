import Link from "next/link";

function Quality () {
    return (
        <div className="w-full h-full grid content-center px-16 xl:px-32 2xl:px-52 pb-32 bg-white">
            <div className="grid space-y-3">
                <h3 className="font-eudoxusBold text-yellow text-[18px]">Our Quality</h3>
                <div className="flex flex-row gap-[308px]">
                    <div className="grid space-y-5">
                        <h2 className="font-eudoxusBold text-black text-[44px] leading-[57px]">Crafted by talented and high quality material</h2>
                        <p className="font-eudoxusRegular text-[18px] text-grey py-5">Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
                        <Link href="/">
                            <a className="font-eudoxusBold flex justify-center w-[170px] cursor-pointer text-white bg-green hover:bg-cstmdarkerbrown hover:scale-100 duration-300 py-2 2xl:py-3 rounded text-[18px]">
                                Learn More
                            </a>
                        </Link>
                        <img 
                            src="/images/Home-page/unsplash_mpN7xjKQ_Ns.svg"
                            className="pt-5 w-[595px]"
                        />
                    </div>
                {/* buat sisi kanan */}
                </div>
            </div>
        </div>
    );
}

export { Quality };