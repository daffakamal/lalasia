const styleH4="font-eudoxusBold text-black text-[22px] md:text-[24px]"
const styleP="font-eudoxusRegular text-grey text-base md:text-lg"
const styleImg="w-[55px] md:w-[62px]"

export default function Cards () {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center pointer-events-none">
            <div className="flex items-center md:items-stretch flex-col md:flex-row space-y-14 md:space-x-14 xl:space-x-20  pt-10 drop-shadow-lg">
                    <div className="rounded bg-[#FFFFFF] p-10">
                        <div className="grid space-y-5">
                            <img
                                src="/images/Home-page/Group 4 (1).svg"
                                className={styleImg}
                            />
                            <h4 className={styleH4}>Many Choices</h4>
                            <p className={styleP}>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                        </div>
                    </div>
                    <div className="rounded bg-[#FFFFFF] p-10">
                        <div className="grid space-y-5">
                            <img
                                src="/images/Home-page/Group 5.svg"
                                className={styleImg}
                            />
                            <h4 className={styleH4}>Fast and On Time</h4>
                            <p className={styleP}>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                        </div>
                    </div>
                    <div className="rounded bg-[#FFFFFF] p-10">
                        <div className="grid space-y-5">
                            <img
                                src="/images/Home-page/Group 4 (2).svg"
                                className={styleImg}
                            />
                            <h4 className={styleH4}>Affordable Price</h4>
                            <p className={styleP}>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}