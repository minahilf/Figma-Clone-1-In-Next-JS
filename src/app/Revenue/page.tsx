'use client'
import { motion } from "framer-motion";
import { Comfortaa } from "next/font/google";
const comfortaa = Comfortaa({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-comfortaa" });

export default function Revenue() {
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className={`${comfortaa.variable} bg-[#0E8388] mt-6 pb-4`}>
            <h1 className="font-bold font-comfortaa text-[28px] text-center p-4 lg:text-[32px] text-white">
            Boost Your Revenue & Cut Work Hours
            </h1>
            <p className="text-center text-[14px] font-comfortaa pl-2 pr-2 text-white lg:text-[16px]">Organized workflow and predictive patterns to boost your revenue.</p>

<div className="sm:flex sm:justify-center sm:items-center sm:gap-10 lg:gap-[12%] xl:gap-[16%]">
            <div className="flex flex-col justify-center items-center p-4 mt-2">
                <h1 className="text-[72px] lg:text-[82px] text-white font-bold font-comfortaa">47%</h1>
                <p className="text-white text-[12px] lg:text-[14px] font-comfortaa">Lesser Backlogs</p>
            </div>

            <div className="flex flex-col justify-center items-center p-4 mt-2">
                <h1 className="text-[72px] lg:text-[82px] text-white font-bold font-comfortaa">33%</h1>
                <p className="text-white text-[12px] lg:text-[14px] font-comfortaa">Higher Profits</p>
            </div>

            <div className="flex flex-col justify-center items-center p-4 mt-2">
                <h1 className="text-[72px] lg:text-[82px] text-white font-bold font-comfortaa">33%</h1>
                <p className="text-white text-[12px] lg:text-[14px] font-comfortaa">Higher Profits</p>
            </div>
            </div>
    <p className="text-center text-[12px] underline font-comfortaa pl-2 pr-2 text-white">Know More About Our Company</p>
        </motion.div>
    )
}
