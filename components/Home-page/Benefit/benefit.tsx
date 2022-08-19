import Cards from "./benefitCard";

function Benefit () {
    return (
        <>
        <div className="w-full h-full grid content-center px-16 xl:px-32 2xl:px-52 pb-32 bg-white">
            <div className="space-y-3">
                <h3 className="font-eudoxusBold text-yellow text-[18px]">Benefits</h3>
                <div className="flex flex-row gap-[308px]">
                    <div className="font-eudoxusBold text-black text-[44px] leading-[57px]">
                        <h2>Benefits when using our services</h2>
                    </div>
                    <div className="font-eudoxusRegular text-[18px] text-grey">
                        <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
                    </div>
                </div>
                <Cards />
            </div>
        </div>
        </>
    );
}

export { Benefit };