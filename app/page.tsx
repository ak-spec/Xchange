'use client'
import React from 'react';
import Image from 'next/image'
import robot from "../public/images/robot.jpeg"
import LoginForm from "@/components/UI/loginForm"
import RegisterForm from "@/components/UI/registerForm"

const LandingPage = () => {
  
  return (
    <div className='container dark:bg-black bg-white mx-auto grid grid-cols-1 sm:grid-cols-2 py-9'>
      <div className='flex items-center'>
        <div className='flex flex-col justify-between'>
          <h1 className='text-7xl my-2 dark:text-white'>Explore,Buy and sell World</h1>
          <span className='text-xl rounded-full bg-purple-500 p-3 text-white my-2 w-1/4'>BEST NFTS!</span>
          <div className='my-3 text-sm dark:text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Esse voluptatum similique quam nostrum eius, molestiae rem dolorem? Culpa velit quidem sapiente sequi dolore,
          quia recusandae, laudantium ut natus dolor esse.
          </div>
          <div className='flex space-x-3'>
            <LoginForm />
            <RegisterForm/>
          </div>
        </div>
      </div>
      <div className='hidden sm:flex my-5 justify-center relative'>
        <div className='absolute h-20 w-20 top-6 left-20 text-white p-6 rounded-full bg-slate-500 flex justify-center text-sm'>Cool NFT</div>
        <div className='absolute h-20 w-20 right-20 text-white rounded-full p-6 bg-slate-500 flex justify-center text-sm'>Buy Now!</div>
        <Image src={robot} width={500} height={500} alt='Pic of robot nft' className='justify-center'>
        </Image>
      </div>

      
    </div>
  )
}

export default LandingPage

