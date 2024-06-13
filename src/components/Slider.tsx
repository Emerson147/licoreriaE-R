"use client"

import Link from "next/link";
import { useEffect, useState } from "react"
import Image from "next/image";

const slides = [
    {
        "id": 1,
        "title": "Jack Daniel's Old No. 7",
        "description": "A Tennessee whiskey with a smooth and mellow flavor profile.",
        "img": "https://images.pexels.com/photos/13123570/pexels-photo-13123570.png?auto=compress&cs=tinysrgb&w=600",
        "url": "/",
        "bg": "bg-gradient-to-r from-yellow-50 to-pink-50"
    },
    {
        "id": 2,
        "title": "Johnnie Walker Black Label",
        "description": "A rich and smooth blend of over 40 whiskies, matured for at least 12 years.",
        "img": "https://images.pexels.com/photos/18702214/pexels-photo-18702214/free-photo-of-alcohol-beber-bebida-vaso.jpeg?auto=compress&cs=tinysrgb&w=600",
        "url": "/",
        "bg": "bg-gradient-to-r from-blue-50 to-green-50"
    },
    {
        "id": 3,
        "title": "Jameson Irish Whiskey",
        "description": "A blend of pot still and fine grain whiskeys, triple-distilled for smoothness.",
        "img": "https://images.pexels.com/photos/13653540/pexels-photo-13653540.jpeg?auto=compress&cs=tinysrgb&w=600",
        "url": "/",
        "bg": "bg-gradient-to-r from-green-50 to-yellow-50"
    },
    {
        "id": 4,
        "title": "Chivas Regal 12",
        "description": "A premium blend of single malt and grain Scotch whiskies, aged for 12 years.",
        "img": "https://images.pexels.com/photos/6897387/pexels-photo-6897387.jpeg?auto=compress&cs=tinysrgb&w=600",
        "url": "/",
        "bg": "bg-gradient-to-r from-red-50 to-orange-50"
    },
    {
        "id": 5,
        "title": "Patrón Silver Tequila",
        "description": "A smooth and sweet tequila with a light pepper finish, made from 100% Weber Blue Agave.",
        "img": "https://images.pexels.com/photos/4753648/pexels-photo-4753648.jpeg?auto=compress&cs=tinysrgb&w=600",
        "url": "/",
        "bg": "bg-gradient-to-r from-blue-50 to-teal-50"
    },
    
]


const Slider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }, 3000);
        return () => clearInterval(interval);
    }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden ">
        <div className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{transform: `translateX(-${current * 100}vw)`}}
        >
            {slides.map(slide => (
                <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
                    {/* TEXT CONTAINER */}
                    <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                        <h2 className="text-xl lg:text-3xl 2xl:text-5xl px-4" >{slide.description}</h2>
                        <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold px-4">{slide.title}</h1>
                        <Link href={slide.url}>
                            <button className="rounded-md bg-black text-white py-3 px-4">SHOP NOW</button>
                        </Link>
                    </div>
                    {/* IMAGE CONTAINER */}
                    <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                        <Image src={slide.img} alt="" fill sizes="100%" className="object-cover"/>
                    </div>
                </div>
            ))}
        </div>
        <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {
            slides.map((slide, index)=> (
                <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : "" } `} key={slide.id} onClick={() => setCurrent(index)} >
                    {current  === index && (
                        <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                    )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Slider