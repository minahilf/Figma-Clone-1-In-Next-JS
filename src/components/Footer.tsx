import { Comfortaa } from "next/font/google";
const comfortaa = Comfortaa({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-comfortaa" });

export default function Footer() {
    return (
        <div className={`${comfortaa.variable} bg-[#CBE4DE] p-4 pb-4`}>
            <h1 className="text-center font-comfortaa text-[12px] font-medium text-[#2E4F4F]">GRAB ARRAY FOR BEST PRICE TODAY</h1>
            <div className="flex justify-center items-center">
            <h1 className="text-center font-comfortaa text-[16px] font-bold text-[#1a4949] mt-2 sm:text-[20px] lg:text-[24px] lg:w-[70%]">Start now and turn your online business into a profitable route.</h1>
            </div>
            <div className="flex justify-center items-center mt-4 flex-col gap-2">
                <input type="email" name="email" id="email" placeholder="Enter Your Email Address" className="w-[200px] sm:w-[300px] h-[30px] rounded-md border-2 border-[#2E4F4F] font-comfortaa text-[12px] pl-2"/>
                <button className="bg-[#2E4F4F] text-white font-comfortaa text-[12px] pl-2 pr-2 rounded-md w-[200px] sm:w-[300px] h-[30px]">Sign Up Now</button>
                <p className="text-center font-comfortaa text-[12px] text-gray-400">14-day free trial and no credit card required.</p>
            </div>
            <div className="mt-4">
                <ul className="flex flex-col gap-2 justify-center items-center sm:flex-row sm:justify-between sm:items-center">
                    <li className="font-comfortaa text-[16px] font-bold text-black">Soudemy</li>
                    <li className="font-comfortaa text-[12px] text-gray-400">All Rights Reserved</li>
                    <ul className="flex flex-row gap-2">
                        <li className="font-comfortaa text-[12px] text-gray-400">Facebook</li>
                        <li className="font-comfortaa text-[12px] text-gray-400">Twitter</li>
                        <li className="font-comfortaa text-[12px] text-gray-400">LinkedIn</li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}
