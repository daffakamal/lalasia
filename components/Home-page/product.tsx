
function Product () {
    return (
        <div className="w-full h-full grid justify-items-center px-16 xl:px-32 2xl:px-52 pb-32 bg-white">
            <div className="grid justify-items-center space-y-5">
                <h3 className="font-eudoxusBold text-yellow text-[18px]">Product</h3>
                <h2 className="font-eudoxusBold text-black text-[44px] leading-[57px]">Our popular product</h2>
                <div className="font-eudoxusRegular text-[18px] text-grey">
                    <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
                </div>
            </div>
        </div>
    );
}

export { Product };