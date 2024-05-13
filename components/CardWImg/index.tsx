import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";

const CardWImg = ({imgUrl, title, description}: {imgUrl:string, title:string, description:string}) => {
  return (
    <Card 
      renderImage={() => <div className='w-full h-64 relative'><Image fill={true} src={imgUrl} alt="NFT"/></div>}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
  
}

export {CardWImg}

