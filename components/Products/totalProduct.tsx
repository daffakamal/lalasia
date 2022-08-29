import Link from "next/link";

function TotalProduct () {
    return (
        <div className="w-full h-full bg-white">
            <div className="grid justify-items-center px-[24px] sm:px-16 xl:px-32 2xl:px-52">
                <div className="grid justify-items-center xl:container xl:mx-auto pb-10">
                    <div className="flex justify-center items-center space-x-10 pb-10">
                        <form>   
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" className="font-eudoxusMedium block p-4 pl-10 w-[600px] text-base md:text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-green3 focus:ring-green3 focus:ring-1" placeholder="Search property" />
                                <button type="submit" className="font-eudoxusMedium text-white absolute right-2.5 bottom-2.5 bg-green hover:bg-green2 rounded-lg text-base md:text-lg px-4 py-2 pointer-event">Find Now</button>
                            </div>
                        </form>
                        <button className="h-full flex items-center px-7 py-3 font-eudoxusMedium text-black bg-whitebasic hover:bg-gray-100 rounded-lg text-base md:text-lg cursor-pointer">
                            <img 
                                src="/images/Products/filter.svg"
                                className="w-[25px] pointer-events-none"
                            />
                            Filter
                        </button>
                    </div>
                    <div className="w-full grid grid-cols-2 content-center">
                        <div className="flex items-center">
                            <h2 className="font-eudoxusBold text-black text-[24px] sm:text-[40px] md:text-[44px] pr-5">
                                Total Product
                            </h2>
                            <div className="flex items-center px-4 py-1 font-eudoxusMedium text-green bg-whitebasic rounded-3xl text-base md:text-lg">
                                <a>184</a>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="flex items-center px-4 py-3 font-eudoxusMedium text-black bg-whitebasic hover:bg-gray-100 rounded-lg text-base md:text-lg cursor-pointer">
                                <img 
                                    src="/images/Products/sort.svg"
                                    className="w-[25px] pointer-events-none"
                                />
                                Sort By
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { TotalProduct };