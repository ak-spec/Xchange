"use client";

import React from 'react'
import { FaFileUpload } from "react-icons/fa";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

function Create() {
  return (
    <div className='container mx-auto py-6'>
      <div className='flex flex-col gap-4 mb-2'>
              <p className='text-2xl'>Create New NFT</p>
              <p className='text-base'>Once created a NFT we cannot change its details</p>
      </div>
      <form className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        <div>
            <div className='flex flex-col border-dotted border-2 border-indigo-600 w-full justify-center items-center h-96 svh sm:h-svh gap-1'>
              <FaFileUpload className='text-purple'/>
              <p>Upload File</p>
              <p>Drag or choose your file to upload.</p>
              <p>Max Size:50MB</p>
              <p>JPG, PNG, GIF, SVG, MP4</p>
              <Button gradientDuoTone="purpleToPink">Create</Button>
            </div>
            
        </div>
        <div className='flex flex-col gap-2'>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Product Name" />
          </div>
          <TextInput id="email1" type="email" placeholder="Name your NFT" required />

          <div className="mb-2 block">
            <Label htmlFor="comment" value="Description" />
          </div>
          <Textarea id="comment" placeholder="Enter a description" required rows={7} />

          <div className='flex justify-between'>
            <div className='w-1/2 mx-1'>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Price" />
              </div>
              <TextInput id="email1" type="email" placeholder="Price" required />
            </div>
            <div className='w-1/2 mx-1'>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Royalty" />
              </div>
              <TextInput id="email1" type="email" placeholder="Royalty" required />
            </div>
          </div>
         
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Traits" className='text-base font-bold'/>
          </div>
          <p className='text-sm'>
            Traits describe attributes of your item. 
            They appear as filters inside your collection page and are also listed out inside your item page.
          </p>
          <TextInput id="email1" type="email" placeholder="+ Add Trait" required />
        </div>
      </form>
    </div>
  )
}

export default Create
