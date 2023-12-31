import React from 'react'
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className='bg-[#E6F9F6] py-6'>
        <div className='items-center flex gap-[750px] justify-center'>
        <div>
        <p className='text-[#0f4f57] text-xl font-bold font-Prompt'>QUICK </p>
      
        </div>

     

        <div className='flex gap-5'>
        <HiBars3 color='#0f4f57' size={25} className='md:hidden'/>
        <p className='hidden md:block text-[#0f4f57] font-Prompt cursor-pointer hover:underline'>Home </p>
        <p className='hidden md:block text-[#0f4f57] font-Prompt cursor-pointer hover:underline'>Projects </p>
        <p className='hidden md:block text-[#0f4f57] font-Prompt cursor-pointer hover:underline'>Promos </p>
        <p className='hidden md:block text-[#0f4f57] px-2 font-Prompt cursor-pointer border-[1.5px] border-[#0f4f57] rounded-full '>Contact Us </p>
        </div>

        </div>
    </div>
  )
}

export default Navbar