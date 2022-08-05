function Benefit () {
    return (
        <div className="w-full h-full grid content-center px-16 xl:px-32 2xl:px-52 pb-32 bg-white">
            <div className="space-y-3">
                <h3 className="font-eudoxusBold text-yellow text-[18px]">Benefits</h3>
                <div className="flex flex-row gap-[308px]">
                    <div className="font-eudoxusBold">
                        <h2 className="text-black text-[44px] leading-[57px]">Benefits when using our services</h2>
                    </div>
                    <div className="font-eudoxusRegular text-[18px] text-grey">
                        <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center space-x-14 pt-10">
                    <div className="rounded bg-[#FFFFFF] p-10">
                        <div className="grid space-y-5">
                            <img
                                src="/images/Home-page/Group 4 (1).svg"
                                className="w-[62px]"
                            />
                            <h4 className="font-eudoxusBold text-black text-[24px]">Many Choices</h4>
                            <p className="font-eudoxusRegular text-grey text-[18px]">Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                        </div>
                    </div>
                    <div className="rounded bg-[#FFFFFF] p-10">
                        <div className="grid space-y-5">
                            <img
                                src="/images/Home-page/Group 5.svg"
                                className="w-[62px]"
                            />
                            <h4 className="font-eudoxusBold text-black text-[24px]">Fast and On Time</h4>
                            <p className="font-eudoxusRegular text-grey text-[18px]">Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                        </div>
                    </div>
                    <div className="rounded bg-[#FFFFFF] p-10">
                        <div className="grid space-y-5">
                            <img
                                src="/images/Home-page/Group 4 (2).svg"
                                className="w-[62px]"
                            />
                            <h4 className="font-eudoxusBold text-black text-[24px]">Affordable Price</h4>
                            <p className="font-eudoxusRegular text-grey text-[18px]">Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Benefit };