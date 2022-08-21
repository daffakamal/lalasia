import Link from "next/link";

function Footer() {
  return (
    <div className="w-full h-full grid content-center px-16 xl:px-32 2xl:px-52 py-28 bg-white">
        <div className="grid grid-cols-5">
            <div className="col-span-3">
                <Link href="#/">
                    <img   
                        src="/images/Home-page/Frame 1.svg"
                        className="w-[130px] pointer-events"
                    />
                </Link>
                <p className="font-eudoxusMedium text-[18px] text-black pt-10">Lalasia is digital agency that help you make better experience iaculis cras in.</p>
            </div>
            <div className="flex justify-end col-span-2 justify-between">
                <div className="grid space-y-5">
                    <p className="font-eudoxusBold cursor-pointer text-black text-[18px]">Product</p>
                    <Link href="#!">
                        <a className="font-eudoxusMedium cursor-pointer text-black text-[18px]">
                            New Arrivals
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className="font-eudoxusMedium cursor-pointer text-black text-[18px]">
                            Best Selling
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className="font-eudoxusMedium cursor-pointer text-black text-[18px]">
                            Home Decor
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className="font-eudoxusMedium cursor-pointer text-black text-[18px]">
                            Kitchen Set
                        </a>
                    </Link>
                </div>
                <div className="grid space-y-5">
                    <p className="font-eudoxusBold cursor-pointer text-black text-[18px]">Services</p>
                    <Link href="#!">
                        <a className="font-eudoxusMedium cursor-pointer text-black text-[18px]">
                            Catalog
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className="font-eudoxusMedium cursor-pointer text-black text-[18px]">
                            Blog
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className="font-eudoxusMedium cursor-pointer text-black text-[18px]">
                            FAQ
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className="font-eudoxusMedium cursor-pointer text-black text-[18px]">
                            Pricing
                        </a>
                    </Link>
                </div>
                <div className="grid content-start space-y-5">
                    <p className="font-eudoxusBold cursor-pointer text-black text-[18px]">Follow Us</p>
                    <Link href="#!">
                        <a className="font-eudoxusMedium cursor-pointer text-black text-[18px]">
                            Facebook
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className="font-eudoxusMedium cursor-pointer text-black text-[18px]">
                            Instagram
                        </a>
                    </Link>
                    <Link href="#!">
                        <a className="font-eudoxusMedium cursor-pointer text-black text-[18px]">
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