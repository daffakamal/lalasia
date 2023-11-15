import Link from "next/link";
import Number from "./number";

function Quality() {
  return (
    <>
      <div className="w-full h-full grid content-center px-[24px] sm:px-16 xl:px-32 2xl:px-52 pb-32 bg-white">
        <div className="grid xl:container xl:mx-auto space-y-3">
          <h3
            className="font-eudoxusBold text-yellow text-sm sm:text-base md:text-lg"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Our Quality
          </h3>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-32">
            <div
              className="w-full grid content-start space-y-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2 className="font-eudoxusBold text-black text-[24px] sm:text-[40px] md:text-[44px] leading-[31px] sm:leading-[57px]">
                Crafted by talented and high quality material
              </h2>
              <p className="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey leading-[25px] sm:leading-[32px] py-5">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus parturient.
              </p>
              <Link href="#!">
                <a className="font-eudoxusBold flex justify-center items-center w-full md:w-[170px] cursor-pointer text-white bg-green hover:bg-green2 duration-300 py-2 rounded text-sm sm:text-base md:text-lg">
                  Learn More
                </a>
              </Link>
              <img
                src="/images/Home-page/unsplash_mpN7xjKQ_Ns.png"
                className="pt-5 w-full 2xl:w-[595px] pointer-events-none"
                alt="Wood"
              />
            </div>
            <Number />
          </div>
        </div>
      </div>
    </>
  );
}

export { Quality };
