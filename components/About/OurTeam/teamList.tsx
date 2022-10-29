const styleContent="grid"
const stylePosition="font-eudoxusRegular text-sm sm:text-base md:text-lg text-grey leading-[25px] sm:leading-[32px]"
const stylePerson="font-eudoxusBold text-sm sm:text-base md:text-lg xl:text-2xl text-black leading-[25px] sm:leading-[32px] pt-5 pb-2"
const styleImg="w-full sm:w-[250px] md:w-[300px] xl:w-[394px]"

export default function TeamList () {
    return (
        <div 
            className="flex justify-between items-center pointer-events-none flex-wrap gap-10 pt-20" 
            data-aos="fade-up" 
            data-aos-duration="2000"
        >
            <div className={styleContent}>
                <img
                    src="/images/About/Rectangle 23 (2).png"
                    className={styleImg}
                    alt="Jesse Depp"
                />
                <h3 className={stylePerson}>
                    Jesse Depp
                </h3>
                <p className={stylePosition}>
                    Founder & CEO
                </p>
            </div>
            <div className={styleContent}>
                <img
                    src="/images/About/Rectangle 23 (1).png"
                    className={styleImg}
                    alt="Khloe Maxi"
                />
                <h3 className={stylePerson}>
                    Khloe Maxi
                </h3>
                <p className={stylePosition}>
                    COO
                </p>
            </div>
            <div className={styleContent}>
                <img
                    src="/images/About/Rectangle 23 (3).png"
                    className={styleImg}
                    alt="Andrew Taggart"
                />
                <h3 className={stylePerson}>
                    Andrew Taggart
                </h3>
                <p className={stylePosition}>
                    Developer
                </p>
            </div>
            <div className={styleContent}>
                <img
                    src="/images/About/Rectangle 23 (4).png"
                    className={styleImg}
                    alt="Grace Marie"
                />
                <h3 className={stylePerson}>
                    Grace Marie
                </h3>
                <p className={stylePosition}>
                    Manager
                </p>
            </div>
            <div className={styleContent}>
                <img
                    src="/images/About/Rectangle 23 (5).png"
                    className={styleImg}
                    alt="Alfonso Maruzo"
                />
                <h3 className={stylePerson}>
                    Alfonso Maruzo
                </h3>
                <p className={stylePosition}>
                    Senior Designer
                </p>
            </div>
            <div className={styleContent}>
                <img
                    src="/images/About/Rectangle 23 (6).png"
                    className={styleImg}
                    alt="Dellio Brad"
                />
                <h3 className={stylePerson}>
                    Dellio Brad
                </h3>
                <p className={stylePosition}>
                    Marketer
                </p>
            </div>
        </div>
    )
}