const styleWord="font-eudoxusMedium text-white text-sm sm:text-base md:text-lg"

export default function  MainProfile () {
    return (
        <div className="w-full h-full grid content-center px-16 xl:px-32 2xl:px-52 py-52 bg-white">
            <div className="h-full grid xl:container xl:mx-auto justify-items-center">
                <div className="flex flex-row justify-center space-x-10">
                    <div className="rounded-xl bg-greenLight drop-shadow-xl max-w-2xl px-3 py-3">
                        <div className="w-full grid justify-items-start content-start gap-y-5">
                            <div className="flex gap-x-5 rounded bg-orangeLight p-3">
                                <img
                                    src="/images/Home-page/Ellipse 1.svg"
                                    className="w-[28px] sm:w-[40px] md:w-[50px] pointer-events-none"
                                />
                                <p className={styleWord}>
                                    Username
                                </p>
                            </div>
                            <div className="flex gap-x-5 rounded hover:bg-greenLight p-3">
                                <img
									src=""
									className="hidden lg:block w-[30px] cursor-pointer"
								/>
                                <p className={styleWord}>
                                    Dashboard
                                </p>
                            </div>
                            <div className="flex gap-x-5 rounded hover:bg-greenLight p-3">
                                <img
									src=""
									className="hidden lg:block w-[30px] cursor-pointer"
								/>
                                <p className={styleWord}>
                                    Order History
                                </p>
                            </div>
                            <div className="flex gap-x-5 rounded hover:bg-greenLight p-3">
                                <img
									src=""
									className="hidden lg:block w-[30px] cursor-pointer"
								/>
                                <p className={styleWord}>
                                    Transactions List
                                </p>
                            </div>
                            <div className="flex gap-x-5 rounded hover:bg-greenLight p-3">
                                <img
									src=""
									className="hidden lg:block w-[30px] cursor-pointer"
								/>
                                <p className={styleWord}>
                                    Saved Items
                                </p>
                            </div>
                            <div className="flex gap-x-5 rounded hover:bg-greenLight p-3">
                                <img
									src=""
									className="hidden lg:block w-[30px] cursor-pointer"
								/>
                                <p className={styleWord}>
                                    Update Profile
                                </p>
                            </div>
                            <div className="flex gap-x-5 rounded hover:bg-greenLight p-3">
                                <img
									src=""
									className="hidden lg:block w-[30px] cursor-pointer"
								/>
                                <p className={styleWord}>
                                    Contact Support
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid space-y-10 ">
                        <h1 className="font-eudoxusBold text-5xl md:text-[64px] leading-[70px] md:leading-[83px] text-[#151411]">
                            Hi, Username
                        </h1>
                        <h2 className="font-eudoxusMedium text-base md:text-lg text-[#AFADB5]">
                            Here're the popular products of the week
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}