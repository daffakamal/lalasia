import Link from "next/link";
import ArticleList from "./articleList";

function TrendingTopics () {
    return (
        <div className="w-full h-full grid content-center px-[24px] sm:px-16 xl:px-32 2xl:px-52 pt-36 bg-white">
            <div className="grid xl:container xl:mx-auto space-y-3" data-aos="fade-up" data-aos-duration="2000"> 
                <h5 className="font-eudoxusBold text-yellow text-sm sm:text-base md:text-lg">
                    Trending Topics
                </h5>
                <h2 className="font-eudoxusBold text-black text-[24px] sm:text-[40px] md:text-[44px] leading-[31px] sm:leading-[57px]">
                    Popular last week
                </h2>
                <div className="w-full grid grid-cols-4 content-center py-5">
                    <div className="flex items-center space-x-5 col-span-3">
                        <div className="font-eudoxusMedium hover:font-eudoxusBold text-grey hover:text-black bg-white hover:bg-gray-100 rounded-lg text-base md:text-lg cursor-pointer px-5 py-2">
                            All
                        </div>
                        <div className="font-eudoxusMedium hover:font-eudoxusBold text-grey hover:text-black bg-white hover:bg-gray-100 rounded-lg text-base md:text-lg cursor-pointer px-5 py-2">
                            Tips and Trick
                        </div>
                        <div className="font-eudoxusMedium hover:font-eudoxusBold text-grey hover:text-black bg-white hover:bg-gray-100 rounded-lg text-base md:text-lg cursor-pointer px-5 py-2">
                            Interior Design
                        </div>
                        <div className="font-eudoxusMedium hover:font-eudoxusBold text-grey hover:text-black bg-white hover:bg-gray-100 rounded-lg text-base md:text-lg cursor-pointer px-5 py-2">
                            Design Inspiration
                        </div>
                        <div className="font-eudoxusMedium hover:font-eudoxusBold text-grey hover:text-black bg-white hover:bg-gray-100 rounded-lg text-base md:text-lg cursor-pointer px-5 py-2">
                            Color Guide
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="lg:h-full items-center hidden md:flex px-5 lg:px-5 py-3 font-eudoxusMedium text-black bg-whitebasic hover:bg-gray-100 rounded-lg border border-grey text-base md:text-lg cursor-pointer">
                            <img 
                                src="/images/Products/sort.svg"
                                className="w-[25px] pointer-events-none"
                            />
                            Filter
                        </button>
                    </div>
                </div>
                <ArticleList />
            </div>
        </div>
    );
}

export { TrendingTopics };