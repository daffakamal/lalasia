const styleH4="font-eudoxusBold text-black text-[24px]"
const styleP="font-eudoxusRegular text-grey text-[18px]"

export default function Cards () {
    return (
        <div className="flex justify-center items-center space-x-14 pt-10 pointer-events-none">
                    <div className="rounded bg-[#FFFFFF] p-10">
                        <div className="grid space-y-5">
                            <img
                                src="/images/Home-page/Group 4 (1).svg"
                                className="w-[62px]"
                            />
                            <h4 className={styleH4}>Many Choices</h4>
                            <p className={styleP}>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                        </div>
                    </div>
                    <div className="rounded bg-[#FFFFFF] p-10">
                        <div className="grid space-y-5">
                            <img
                                src="/images/Home-page/Group 5.svg"
                                className="w-[62px]"
                            />
                            <h4 className={styleH4}>Fast and On Time</h4>
                            <p className={styleP}>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                        </div>
                    </div>
                    <div className="rounded bg-[#FFFFFF] p-10">
                        <div className="grid space-y-5">
                            <img
                                src="/images/Home-page/Group 4 (2).svg"
                                className="w-[62px]"
                            />
                            <h4 className={styleH4}>Affordable Price</h4>
                            <p className={styleP}>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                        </div>
                    </div>
                </div>
    )
}