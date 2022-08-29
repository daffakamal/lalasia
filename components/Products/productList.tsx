import Link from "next/link";

export default function ProductList () {
    return (
        <div className="grid grid-cols-3 content-center gap-20 2xl:gap-x-36 pt-5">
            <Link href="#!">
                <div className="grid cursor-pointer">
                    <img 
                        src="/images/Products/Rectangle 23 (4).svg"
                        className="w-[394px]"
                    />
                    <h4 className="font-eudoxusBold text-grey text-base md:text-lg pt-5 pb-3">
                        Chair
                    </h4>
                    <h3 className="font-eudoxusBold text-black text-[26px] pb-1.5">
                        White Aesthetic Chair
                    </h3>
                    <p className="font-eudoxusMedium text-grey text-base md:text-lg pb-4">
                        Combination of wood and wool
                    </p>
                    <p className="font-eudoxusBold text-black text-[24px]">
                        $63.47
                    </p>
                </div>
            </Link>
            <Link href="#!">
                <div className="grid cursor-pointer">
                    <img 
                        src="/images/Products/Rectangle 23 (5).svg"
                        className="w-[394px]"
                    />
                    <h4 className="font-eudoxusBold text-grey text-base md:text-lg pt-5 pb-3">
                        Chair
                    </h4>
                    <h3 className="font-eudoxusBold text-black text-[26px] pb-1.5">
                        White Aesthetic Chair
                    </h3>
                    <p className="font-eudoxusMedium text-grey text-base md:text-lg pb-4">
                        Combination of wood and wool
                    </p>
                    <p className="font-eudoxusBold text-black text-[24px]">
                        $63.47
                    </p>
                </div>
            </Link>
            <Link href="#!">
                <div className="grid cursor-pointer">
                    <img 
                        src="/images/Products/Rectangle 23 (6).svg"
                        className="w-[394px]"
                    />
                    <h4 className="font-eudoxusBold text-grey text-base md:text-lg pt-5 pb-3">
                        Chair
                    </h4>
                    <h3 className="font-eudoxusBold text-black text-[26px] pb-1.5">
                        White Aesthetic Chair
                    </h3>
                    <p className="font-eudoxusMedium text-grey text-base md:text-lg pb-4">
                        Combination of wood and wool
                    </p>
                    <p className="font-eudoxusBold text-black text-[24px]">
                        $63.47
                    </p>
                </div>
            </Link>
            <Link href="#!">
                <div className="grid cursor-pointer">
                    <img 
                        src="/images/Products/Rectangle 23 (7).svg"
                        className="w-[394px]"
                    />
                    <h4 className="font-eudoxusBold text-grey text-base md:text-lg pt-5 pb-3">
                        Chair
                    </h4>
                    <h3 className="font-eudoxusBold text-black text-[26px] pb-1.5">
                        White Aesthetic Chair
                    </h3>
                    <p className="font-eudoxusMedium text-grey text-base md:text-lg pb-4">
                        Combination of wood and wool
                    </p>
                    <p className="font-eudoxusBold text-black text-[24px]">
                        $63.47
                    </p>
                </div>
            </Link>
        </div>
    )
}