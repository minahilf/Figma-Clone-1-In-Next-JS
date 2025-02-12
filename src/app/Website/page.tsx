'use client'
import Image from "next/image";
import web1 from "../../../Assets/web1.png"
import web2 from "../../../Assets/web2.png"
import { motion } from "framer-motion";

import { Comfortaa } from "next/font/google";
const comfortaa = Comfortaa({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-comfortaa" });

export default function Website() {
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className={`${comfortaa.variable}  mt-6`}>
            <h1 className="font-bold font-comfortaa text-[28px] text-center p-4 lg:text-[32px]">Build Better Websites With Us</h1>
            <div className="flex justify-center">
            <p className="text-center text-[16px] font-comfortaa pl-2 pr-2 text-[#888888] lg:text-[18px] lg:w-[60%]">When you get staright to the point the presentation looks attractive on your web pages. Keep it simple and clean always.</p>
            </div>

            {/* website 1  */}
            <div className="flex flex-col justify-center items-center p-4 mt-2 sm:flex-row sm:p-10 sm:gap-10 lg:justify-evenly ">
                <Image src={web1} alt="web" className="lg:w-[60%] lg:h-[50%]"/>
                <div className="flex flex-col justify-center items-center p-4 mt-2 sm:justify-start sm:items-start ">
                    <h1 className="font-comfortaa font-bold text-[16px] lg:text-[18px] xl:text-[22px]">Website Number One</h1>
                    <p className="text-center font-comfortaa font-semibold text-[16px] lg:text-[18px] text-[#888888] sm:text-left lg:w-[60%] xl:text-[22px]">When you get staright to the point the presentation looks attractive on your web pages.</p>
                </div>
            </div>

            {/* website 2 */}
            <div className="flex flex-col justify-center items-center p-4 mt-2  sm:flex-row-reverse sm:p-10 sm:gap-10 lg:justify-evenly ">
                <Image src={web2} alt="web" className="lg:w-[60%] lg:h-[50%]" />
                <div className="flex flex-col justify-center items-center p-4 mt-2 sm:justify-start sm:items-start ">
                    <h1 className="font-comfortaa font-bold text-[16px] lg:text-[18px] xl:text-[22px]">Website Number Two</h1>
                    <p className="text-center font-comfortaa font-semibold text-[16px] lg:text-[18px] text-[#888888] sm:text-left lg:w-[60%] xl:text-[22px]">When you get staright to the point the presentation looks attractive on your web pages.</p>
                </div>
            </div>
        </motion.div>
    )
}
