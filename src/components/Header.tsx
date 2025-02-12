"use client";
import { useState } from "react";
import { Comfortaa } from "next/font/google";
import { Menu, X } from "lucide-react"; 

const comfortaa = Comfortaa({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-comfortaa" });

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); 
  return (

    <div className={`${comfortaa.variable} w-full bg-white mt-2 p-4`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <p className="text-[22px] font-bold font-comfortaa">Soudemy</p>

     
        <ul className="hidden sm:flex space-x-6 font-bold text-[16px] font-comfortaa">
          <li>Products</li>
          <li>Features</li>
          <li>Reviews</li>
          <li>Pricing</li>
          <li className="w-[80px] h-[30px] bg-[#0E8388] text-white rounded-md flex justify-center items-center text-[14px]">
            <button>Sign Up</button>
          </li>
        </ul>

      
        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden mt-4 bg-white rounded-lg p-4">
          <ul className="flex flex-col space-y-4 font-bold text-[16px] font-comfortaa">
            <li>Products</li>
            <li>Features</li>
            <li>Reviews</li>
            <li>Pricing</li>
            <li className="w-[80px] h-[30px] bg-[#0E8388] text-white rounded-md flex justify-center items-center">
              <button>Sign Up</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
