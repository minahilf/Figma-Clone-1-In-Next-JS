import Image from "next/image";
import guy from "../../../Assets/guy.png"

import { Comfortaa } from "next/font/google";
const comfortaa = Comfortaa({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-comfortaa" });

export default function Customer() {
    return (
        <div className={`${comfortaa.variable} p-4 flex flex-col justify-center items-center`}>
            <h1 className="text-[#2E4F4F] text-center font-comfortaa text-[28px] font-bold">Customers Say Nice Things</h1>
            <div className="flex justify-center items-center">
            <p className="text-center font-comfortaa text-[14px] text-[#2E4F4F] lg:w-[50%]">We have very fair pricing policy that would benefit you and us at the same time. Get the free plan & if you need more - pay.</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center bg-[#CBE4DE] p-4 mt-4 lg:w-[80%] rounded-md xl:w-[60%]">
                <Image src={guy} alt="guy" />
                <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className="text-center font-comfortaa text-[14px]">Melissa Vanbergh</h1>
                    <p className="text-center font-comfortaa text-[14px] text-gray-700 sm:w-[80%] xl:w-[60%]">"We have very fair pricing policy that would benefit you and us at the same time. Choose what price you're willing to pay. Get the free plan & if you need more - pay."</p>
                    <div className="flex flex-row justify-center items-center gap-2">
                    <div className="bg-[#888888] w-[10px] h-[10px] rounded-full"></div>
                    <div className="bg-[#888888] w-[10px] h-[10px] rounded-full"></div>
                    <div className="bg-[#0E8388] w-[10px] h-[10px] rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
