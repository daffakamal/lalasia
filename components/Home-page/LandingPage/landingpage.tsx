import Background from "./background";

function LandingPage () {
    return (
        <>
        <Background />
        <div className="w-full h-full grid content-center px-16 xl:px-32 2xl:px-52 py-32 bg-white">
            <div className="h-full grid justify-items-center">
                <div className="grid justify-items-center max-w-3xl space-y-10">
                    <h1 className="font-eudoxusBold text-[64px] text-[#151411] text-center">Discover Furniture With High Quality Wood</h1>
                    <p className="font-eudoxusMedium text-[18px] text-[#AFADB5] text-center">Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.</p>
                    <form>   
                        <div className="relative z-20">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" className="font-eudoxusMedium block p-4 pl-10 w-[600px] text-[18px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-green3 focus:ring-green3 focus:ring-1" placeholder="Search" />
                            <button type="submit" className="font-eudoxusMedium text-white absolute right-2.5 bottom-2.5 bg-green hover:bg-green2 font-medium rounded-lg text-[18px] px-4 py-2">Search</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="grid justify-items-center z-10">
                <img
                    src="/images/Home-page/Rectangle 2.svg"
                    className="-mt-7 w-[1240px]"
                />
            </div>
        </div>
        </>
    );
}

export { LandingPage };