import Link from "next/link";

const styleContent = "font-eudoxusMedium cursor-pointer text-black text-sm sm:text-base md:text-lg"

function Footer() {
  return (
    <div className="w-full h-full grid content-center px-16 xl:px-32 2xl:px-52 py-28 bg-white">
        <div className="grid grid-rows-4 lg:grid-rows-1 grid-cols-none lg:grid-cols-5 xl:container xl:mx-auto">
            <div className="col-span-3 w-full lg:w-3/4">
                <Link href="#/">
                    <img   
                        src="/images/Home-page/Frame 1.svg"
                        className="w-[99px] md:w-[130px] pointer-events"
                    />
                </Link>
                <p className="font-eudoxusMedium text-sm sm:text-base md:text-lg leading-[25px] sm:leading-[32px] text-black pt-5 md:pt-10">Lalasia is digital agency that help you make better experience iaculis cras in.</p>
            </div>
            <div className="grid content-start col-span-1 sm:col-span-3 sm:flex sm:flex-wrap row-span-3 lg:row-span-1 justify-end lg:col-span-2 justify-between sm:pt-20 lg:pt-0">
                <div className="grid space-y-5">
                    <p className="font-eudoxusBold cursor-pointer text-black text-sm sm:text-base md:text-lg">Product</p>
                    <Link href="#!">
                        <a className={styleContent}>
                            New Arrivals
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className={styleContent}>
                            Best Selling
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className={styleContent}>
                            Home Decor
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className={styleContent}>
                            Kitchen Set
                        </a>
                    </Link>
                </div>
                <div className="grid space-y-5 pt-10 sm:pt-0">
                    <p className="font-eudoxusBold cursor-pointer text-black text-sm sm:text-base md:text-lg">Services</p>
                    <Link href="#!">
                        <a className={styleContent}>
                            Catalog
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className={styleContent}>
                            Blog
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className={styleContent}>
                            FAQ
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className={styleContent}>
                            Pricing
                        </a>
                    </Link>
                </div>
                <div className="grid content-start space-y-5 pt-10 sm:pt-0">
                    <p className="font-eudoxusBold cursor-pointer text-black text-sm sm:text-base md:text-lg">Follow Us</p>
                    <Link href="#!">
                        <a className={styleContent}>
                            Facebook
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className={styleContent}>
                            Instagram
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className={styleContent}>
                            Twitter
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export { Footer };