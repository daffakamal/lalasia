import Link from "next/link";

function DailyNews() {
  return (
    <div className="w-full h-full grid content-center px-[24px] sm:px-16 xl:px-32 2xl:px-52 pt-36 bg-white">
      <div
        className="grid xl:container xl:mx-auto space-y-3"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h5 className="font-eudoxusBold text-yellow text-sm sm:text-base md:text-lg">
          Daily News
        </h5>
        <h2 className="font-eudoxusBold text-black text-[24px] sm:text-[40px] md:text-[44px] leading-[31px] sm:leading-[57px]">
          Today top headlines
        </h2>
        <div className="flex flex-col 2xl:flex-row gap-20 pt-5">
          <Link href="#!">
            <div className="grid content-start space-y-3 md:space-y-5 w-full cursor-pointer p-5 duration-200 hover:bg-orangeLight hover:rounded-xl">
              <img
                src="/images/Article/Rectangle 44.svg"
                className="w-full xl:w-[582px] 2xl:w-full pointer-events-none"
                alt="Bedroom"
              />
              <p className="font-eudoxusMedium text-grey text-xs sm:text-sm md:text-lg">
                Design Inspiration
              </p>
              <h3 className="font-eudoxusBold text-black text-xs sm:text-xl md:text-2xl lg:text-3xl truncate">
                Bedroom Design is the Most Personal Reflection of the Owner,
                Really?
              </h3>
              <p className="font-eudoxusRegular text-grey text-sm sm:text-base md:text-lg truncate">
                Is it true that the bedroom design is the most personal
                reflection of the owner? Many people believe that to be able to
                judge a person's personality, it is enough to
              </p>
              <div className="flex items-center space-x-3 md:space-x-5 sm:pt-3">
                <img
                  src="/images/Article/Ellipse 25 (3).svg"
                  className="w-[20px] sm:w-[23px] md:w-[35px] pointer-events-none"
                  alt="Person's photo"
                />
                <p className="font-eudoxusBold text-black text-xs md:text-[14px]">
                  By Jenny Agnes
                </p>
                <p className="font-eudoxusMedium text-grey text-xs md:text-[14px] pl-10 hidden md:block">
                  Tuesday, 17 May 2022
                </p>
              </div>
            </div>
          </Link>
          <Link href="#!">
            <div className="grid content-start space-y-3 md:space-y-5 w-full cursor-pointer p-5 duration-200 hover:bg-orangeLight hover:rounded-xl">
              <img
                src="/images/Article/Rectangle 41 (1).svg"
                className="w-full xl:w-[582px] 2xl:w-full pointer-events-none"
                alt="Living room"
              />
              <p className="font-eudoxusMedium text-grey text-xs sm:text-sm md:text-lg">
                Tips and Trick
              </p>
              <h3 className="font-eudoxusBold text-black text-xs sm:text-xl md:text-2xl lg:text-3xl truncate">
                Create a non-monotonous and dynamic interior atmosphere with
                these 9 variations of wall tiles
              </h3>
              <p className="font-eudoxusRegular text-grey text-sm sm:text-base md:text-lg truncate">
                Quoted from The Healthy Home Economist, a study in 1932 stated
                that color doesn't really have to be visible to have an effect
                The radiance of a
              </p>
              <div className="flex items-center space-x-3 md:space-x-5 sm:pt-3">
                <img
                  src="/images/Article/Ellipse 25 (4).svg"
                  className="w-[20px] sm:w-[23px] md:w-[35px] pointer-events-none"
                  alt="Person's photo"
                />
                <p className="font-eudoxusBold text-black text-xs md:text-[14px]">
                  By Juliana Athorn
                </p>
                <p className="font-eudoxusMedium text-grey text-xs md:text-[14px] pl-10 hidden md:block">
                  Tuesday, 17 May 2022
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { DailyNews };
