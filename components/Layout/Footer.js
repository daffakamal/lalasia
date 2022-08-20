import Link from "next/link";

function Footer() {
  return (
    <div className="w-full h-full grid content-center px-16 xl:px-32 2xl:px-52 py-28 bg-white">
        <div className="grid grid-cols-4">
            <div className="col-span-3">
                <Link href="#/">
                    <img   
                        src="/images/Home-page/Frame 1.svg"
                        className="w-[130px] pointer-events"
                    />
                </Link>
                <p className="font-eudoxusMedium text-[18px] text-black pt-10">Lalasia is digital agency that help you make better experience iaculis cras in.</p>
            </div>
            <div className="grid justify-items-end">
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
            </div>
        </div>
    </div>
  );
}

export { Footer };