"use client"

import Image from "next/image"
import { useState } from "react";

// const images = [{
//     "id": 1,
//     "url": "https://images.pexels.com/photos/13123570/pexels-photo-13123570.png?auto=compress&cs=tinysrgb&w=600",
 
// },
// {
//     "id": 2,
//     "url": "https://images.pexels.com/photos/18702214/pexels-photo-18702214/free-photo-of-alcohol-beber-bebida-vaso.jpeg?auto=compress&cs=tinysrgb&w=600",
// },
// {
//     "id": 3,
//     "url": "https://images.pexels.com/photos/13653540/pexels-photo-13653540.jpeg?auto=compress&cs=tinysrgb&w=600",
// },
// {
//     "id": 4,
//     "url": "https://images.pexels.com/photos/6897387/pexels-photo-6897387.jpeg?auto=compress&cs=tinysrgb&w=600",
// },
// {
//     "id": 5,
//     "url": "https://images.pexels.com/photos/4753648/pexels-photo-4753648.jpeg?auto=compress&cs=tinysrgb&w=600",
// },
// ];


const ProductImages = ({ items }:{ items : any}) => {

  const [index, setIndex] = useState(0);


  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}    
          alt=''
          fill
          sizes='50vw'
          className='object-cover rounded-mb'
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
      {items.map((item: any, i: number) => (
     <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={item.id} onClick={() => setIndex(i)}>
      <Image
        src={item.image?.url}   
        alt=''
        fill
        sizes='30vw'
        className='object-cover rounded-mb'
      />
    </div>
  ))}
</div>

    </div>
  )
}

export default ProductImages