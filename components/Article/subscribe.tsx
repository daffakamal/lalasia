import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

function Subscribe() {
  return (
    <div className="w-full h-full grid content-center px-16 xl:px-32 2xl:px-52 md:pt-52 bg-white">
      <div
        className="grid lg:grid-cols-4 xl:container xl:mx-auto"
        data-aos="fade-zoom-in"
        data-aos-duration="2000"
      >
        <h2 className="col-span-3 font-eudoxusBold text-black text-[24px] sm:text-[40px] md:text-[44px] leading-[31px] sm:leading-[57px]">
          Subscribe our newsletter
        </h2>
        <div className="grid justify-items-start lg:justify-items-end pt-6 lg:pt-0">
          <Link href="#!">
            <a className="font-eudoxusBold flex justify-center items-center cursor-pointer text-white bg-green hover:bg-green2 duration-300 px-4 sm:px-8 py-2 gap-x-3 rounded text-sm sm:text-base md:text-lg">
              Subscribe
              <ArrowLongRightIcon className="w-6 sm:w-9" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Subscribe };
