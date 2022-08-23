import Link from "next/link";

function JoinWithUs () {
    return (
        <div className="w-full h-full grid content-center px-16 xl:px-32 2xl:px-52 pt-28 bg-white">
            <div className="grid grid-cols-4 xl:container xl:mx-auto py-28">
                <h2 className="col-span-3 font-eudoxusBold text-black text-[44px] leading-[57px]">Join with us to get special discount</h2>
                <div className="grid justify-items-end">
                    <Link href="#!">
                        <a className="font-eudoxusBold flex justify-center items-center cursor-pointer text-white bg-green hover:bg-green2 duration-300 px-10 rounded text-[18px]">
                            Learn More
                        </a>
                    </Link>
                </div>
            </div>
            <div className="w-full xl:container xl:mx-auto border border-greyBorder "></div>
        </div>
    );
}

export { JoinWithUs };