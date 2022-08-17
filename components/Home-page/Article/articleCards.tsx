export default function Cards () {
    return (
        <div className="grid space-y-5 w-full my-auto">
            <div className="flex flex-col">
                <div className="flex space-x-10">
                    <img
                        src="/images/Home-page/Rectangle 20.svg"
                        className="w-[260px] pointer-events-none"
                    />
                    <div className="flex flex-col space-y-5 my-auto">
                        <h5 className="font-eudoxusMedium text-[18px] text-grey">Tips and Trick</h5>
                        <h4 className="font-eudoxusBold text-[24px] text-black">6 ways to give your home minimalistic vibes</h4>
                        <p className="font-eudoxusMedium text-[18px] text-grey">Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .</p>
                        <div className="flex items-center space-x-5">
                            <img
                                src="/images/Home-page/Ellipse 25.svg"
                                className="w-[28px] pointer-events-none"
                            />
                            <p className="font-eudoxusBold text-[14px] text-black">By Jerremy Jean</p>
                            <p className="font-eudoxusMedium text-[14px] text-grey pl-14">Friday, 1 April 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}