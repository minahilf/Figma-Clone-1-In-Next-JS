import Image from "next/image";
import banner from "../../../Assets/header.png"
import brand from "../../../Assets/brand.png"
import brand1 from "../../../Assets/brand1.png"
import brand2 from "../../../Assets/brand2.png"
import brand3 from "../../../Assets/brand3.png"
import brand4 from "../../../Assets/brand4.png"

import { Comfortaa } from "next/font/google";
const comfortaa = Comfortaa({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-comfortaa" });



export default function Main() {
    return (
        <div className={`${comfortaa.variable}`}>
            <div className="flex flex-col justify-center items-center">
            <Image src={banner} alt="banner" className="p-6 mt-2"/>
            </div>

            <h1 className="text-center text-[24px] font-comfortaa font-bold p-4 sm:p-0 lg:text-[32px]">Everything You Need All In One Place</h1>
            <p className="text-center text-[16px] font-comfortaa font-normal pl-2 pr-2 sm:p-0 lg:text-[20px] text-[#888888] sm:mt-2">Software and analytics services will render your chunks into meaningful data.</p>
            <div className="flex flex-col justify-center items-center mt-2">
            <div className="w-[150px] h-[32px] bg-[#0E8388] text-white rounded-md flex flex-col justify-center items-center text-[14px] font-comfortaa">
            <button>Register Now</button>
            </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 mt-6 px-4 lg:gap-10">
                <Image src={brand} alt="brand" />
                <Image src={brand1} alt="brand" />
                <Image src={brand2} alt="brand" />
                <Image src={brand3} alt="brand" />
                <Image src={brand4} alt="brand" />
            </div>
        </div>


    )
}
