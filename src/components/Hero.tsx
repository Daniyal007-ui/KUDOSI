"use client";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import OrderForm from "./OrderForm";
import { buttonVariants } from "@/components/ui/button";


export default function Hero() {


    const [mainImage, setMainImage] = useState("/pic1.jpg");

    // Function to change the main image when a thumbnail is clicked
    const handleThumbnailClick = (src: string) => {
        setMainImage(src);
    }

    return (

        <div className="h-auto w-full bg-gradient-to-r from-gray-400 to-slate-700 flex flex-col sm:flex-row  justify-around items-center py-10 px-4 sm:px-6 md:px-12">
            {/* Image Section */}
            <div className="flex flex-col items-center sm:items-start w-full sm:w-1/3 mb-6 sm:mb-0">
                <div className="md:w-full sm:w-1/2 mb-4">
                    <Image src={mainImage} alt="RealMaddridCream" width={400} height={300} className="h-auto w-full object-cover" />
                </div>
                <div className="flex space-x-3 mb-2 md:ml-5 sm:mb-0 sm:ml-0">
                    <div onClick={() => handleThumbnailClick("/pic2.jpg")} className="cursor-pointer">
                        <Image src={"/pic2.jpg"} alt="pic1" height={100} width={100} className="rounded-md" />
                    </div>
                    <div onClick={() => handleThumbnailClick("/pic3.jpg")} className="cursor-pointer">
                        <Image src={"/pic3.jpg"} alt="pic2" height={100} width={100} className="rounded-md" />
                    </div>
                    <div onClick={() => handleThumbnailClick("/pic4.jpg")} className="cursor-pointer">
                        <Image src={"/pic4.jpg"} alt="pic3" height={100} width={100} className="rounded-md" />
                    </div>
                    <div onClick={() => handleThumbnailClick("/pic5.jpg")} className="cursor-pointer">
                        <Image src={"/pic5.jpg"} alt="pic 4" height={100} width={100} className="rounded-md" />
                    </div>
                </div>
            </div>

            {/* Product Info Section */}
            <div className="w-full sm:w-1/3 text-center sm:text-left sm:ml-6 mb-6 sm:mb-0">
                <h1 className=" font-bold text-2xl sm:text-3xl text-white">LUMBER SPINE <br /> COLD GEL SPRAY </h1>
                <p className="text-xl text-gray-300 mt-2">
                    Developed Specially For Lumber Spine Problems...      </p>
                <h2 className="text-white font-bold text-xl sm:text-2xl mt-4">PRICE</h2>


                <div className="mt-4">
                    <p className="font-bold text-lg ">Price 1: 80,000 TSH</p>
                    <p className="font-bold italic text-lg  animate-flash shadow-lg">Buy more than 1 and get a huge discount </p>
                </div>

                <h2 className="text-white font-bold mt-4 text-xl">DESCRIPTION:</h2>
                <p className="text-gray-300 mt-2">
                    LUMBER SPINE SPRAY <br /></p>
                    <ul className="text-gray-300 mt-2">
                        <li>Various Herbel Ingredients.</li>
                        <li>Deep Penetration,  fast and effective. </li>
                        <li>Relive Lumber Pain.</li>
                        <li>Protect Lumber Joints.</li>
                    </ul>

                

                <Link href={'https://wa.me/qr/AR43EYIELKAZL1'} className={buttonVariants({ variant: "outline" })}>Customer Support</Link>

            </div>



            <OrderForm />
        </div>

    );
}

