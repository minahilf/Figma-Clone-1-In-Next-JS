import Image from "next/image";
import bell from "../../../Assets/bell.png"

import { Comfortaa } from "next/font/google";
const comfortaa = Comfortaa({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-comfortaa" });

export default function Products() {

    const products = [
        { id: 1, name: "Product One", image: bell, description: "Deliver the best stories and ideas on the topics you care about most straight to you."
        },
        { id: 2, name: "Product Two", image: bell, description: "Deliver the best stories and ideas on the topics you care about most straight to you."
        },
        { id: 3, name: "Product Three", image: bell, description: "Deliver the best stories and ideas on the topics you care about most straight to you."
        },
        {  id: 4, name: "Product Four", image: bell, description: "Deliver the best stories and ideas on the topics you care about most straight to you."
        },
        { id: 5, name: "Product Five", image: bell, description: "Deliver the best stories and ideas on the topics you care about most straight to you."
        },
        { id: 6, name: "Product Six", image: bell, description: "Deliver the best stories and ideas on the topics you care about most straight to you."
        }
    ]
    return (
        <div className={`${comfortaa.variable} bg-[#CBE4DE] mt-6 pb-6`}>
            <h1 className="font-bold font-comfortaa text-[28px] text-center p-4 lg:text-[32px]">Our Products</h1>
            <div className="flex justify-center">
            <p className="text-center text-[16px] font-comfortaa pl-2 pr-2 text-[#888888] lg:text-[18px] xl:w-[60%]">We will Deliver the best stories and ideas on the topics you care about most straight to your homepage, app, or inbox.</p>
            </div>

{/* products  */}
<div className="px-4 mx-auto max-w-7xl">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6 text-center mx-auto w-full max-w-sm">
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gray-200 rounded-full">
                    <Image src={product.image} alt={product.name} width={30} height={30} />
                </div>
                <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                <div className="flex justify-center">
                <p className="text-gray-600 mt-2 w-[50%]  text-center">{product.description}</p>
                </div>
            </div>
        ))}
    </div>
</div>
        </div>
    )
}
