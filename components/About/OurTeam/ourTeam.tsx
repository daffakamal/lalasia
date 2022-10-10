import TeamList from "./teamList";

function OurTeam () {
    return (
        <>
        <div className="w-full h-full grid content-center px-[24px] sm:px-16 xl:px-32 2xl:px-52 pb-32 bg-white">
            <div className="grid xl:container xl:mx-auto space-y-3" data-aos="fade-up" data-aos-duration="2000">
                <h5 className="font-eudoxusBold text-yellow text-sm sm:text-base md:text-lg">
                    Our Team
                </h5>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-[200px] 2xl:gap-[308px]">
                    <div className="font-eudoxusBold text-black text-[24px] sm:text-[40px] md:text-[44px] leading-[31px] sm:leading-[57px]">
                        <h2>Meet our leading and strong team</h2>
                    </div>
                    <div className="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey leading-[25px] sm:leading-[32px]">
                        <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
                    </div>
                </div>
                <TeamList />
            </div>
        </div>
        </>
    );
}

export { OurTeam };