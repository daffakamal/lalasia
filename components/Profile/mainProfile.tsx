const styleWord="font-eudoxusMedium text-sm sm:text-base md:text-lg"
const styleSubContent="w-full flex gap-x-5 rounded hover:bg-greenLight text-white hover:text-black p-4 cursor-pointer"

export default function MainProfile () {
    return (
        <div className="w-full h-full grid content-center px-16 xl:px-32 2xl:px-52 py-52 bg-white">
            <div className="h-full grid xl:container xl:mx-auto justify-items-center">
                <div className="flex flex-row justify-center space-x-10">
                    <div className="rounded-xl bg-green3 drop-shadow-xl max-w-2xl px-4 py-4">
                        <div className="w-full grid justify-items-start content-start gap-y-5">
                            <div className="w-full flex gap-x-5 bg-green2 rounded-xl border-2 border-orangeLight p-3 cursor-pointer">
                                <img
                                    src="/images/Home-page/Ellipse 1.svg"
                                    className="w-[28px] sm:w-[40px] md:w-[50px] pointer-events-none"
                                />
                                <p className={styleWord}>
                                    Username
                                </p>
                            </div>
                            <div className={styleSubContent}>
                                <img
									src=""
									className="hidden lg:block w-[30px]"
								/>
                                <p className={styleWord}>
                                    Dashboard
                                </p>
                            </div>
                            <div className={styleSubContent}>
                                <img
									src=""
									className="hidden lg:block w-[30px]"
								/>
                                <p className={styleWord}>
                                    Order History
                                </p>
                            </div>
                            <div className={styleSubContent}>
                                <img
									src=""
									className="hidden lg:block w-[30px]"
								/>
                                <p className={styleWord}>
                                    Transactions List
                                </p>
                            </div>
                            <div className={styleSubContent}>
                                <img
									src=""
									className="hidden lg:block w-[30px]"
								/>
                                <p className={styleWord}>
                                    Saved Items
                                </p>
                            </div>
                            <div className={styleSubContent}>
                                <img
									src=""
									className="hidden lg:block w-[30px]"
								/>
                                <p className={styleWord}>
                                    Update Profile
                                </p>
                            </div>
                            <div className={styleSubContent}>
                                <img
									src=""
									className="hidden lg:block w-[30px]"
								/>
                                <p className={styleWord}>
                                    Contact Support
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid justify-items-start content-start space-y-4">
                        <h1 className="font-eudoxusBold text-5xl md:text-4xl leading-[70px] md:leading-[83px] text-[#151411]">
                            Hi, Username
                        </h1>
                        <h2 className="font-eudoxusMedium text-base md:text-lg text-[#AFADB5]">
                            Here're the popular products of the week
                        </h2>
                        <div className="w-full flex flex-wrap gap-x-10">
                            <div className="grid rounded-xl bg-white drop-shadow-xl px-4 py-4 gap-x-5 cursor-pointer">
                                <img
									src="/images/Profile/daniil-silantev-1P6AnKDw6S8-unsplash.jpg"
									className="w-[200px] h-[260px]"
                                    style={{ scale:"100%" }}
								/>
                                <div className="grid h-fit gap-y-3 max-w-fit">
                                    <p className="font-eudoxusBold text-black text-sm sm:text-base md:text-lg mt-3">
                                        British Chair
                                    </p>
                                    <p className="font-eudoxusRegular text-black text-sm sm:text-base md:text-base">
                                        Pellentesque etiam blandit in tincidunt at donec eget ipsum.
                                    </p>
                                    <p className="font-eudoxusBold text-black text-sm sm:text-base md:text-base">
                                        $90.0
                                    </p>
                                </div>
                            </div>
                            <div className="grid rounded-xl bg-white drop-shadow-xl px-4 py-4 gap-x-5 cursor-pointer">
                                <img
									src="/images/Profile/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash.jpg"
									className="w-[200px] h-[260px]"
                                    style={{ scale:"100%" }}
								/>
                                <div className="grid h-fit gap-y-3 max-w-fit">
                                    <p className="font-eudoxusBold text-black text-sm sm:text-base md:text-lg mt-3">
                                        Industrial Lamp
                                    </p>
                                    <p className="font-eudoxusRegular text-black text-sm sm:text-base md:text-base">
                                        Pellentesque etiam blandit in tincidunt at donec eget ipsum.
                                    </p>
                                    <p className="font-eudoxusBold text-black text-sm sm:text-base md:text-base">
                                        $80.0
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}