import React from 'react'
import { SlantedHeading } from './layout/SlantedHeading'
import { FaRegCircleXmark } from "react-icons/fa6";
import { LuCircleCheckBig } from "react-icons/lu";


const WhyUs = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center'>
        <SlantedHeading 
        text='Why train here?' 
        paragraph='Great question! Here are a few reasons why you should train with us.'
        width='w-full'
        />
        <div className='flex flex-col lg:flex-row gap-6 py-10 px-10'>
            <div className='flex flex-col w-[400px] h-full rounded-md border-2 border-red-700 px-5 py-5'>
                <h2 className='text-xl font-semibold text-center mb-4'>Our Training</h2>
                <ul className='space-y-2'>
                    <li className='flex items-center gap-3'><LuCircleCheckBig className='text-red-500 w-5 h-5' />Self Defense Focused</li>
                    <li className='flex items-center gap-3'><LuCircleCheckBig className='text-red-500 w-5 h-5' />Safety First</li>
                    <li className='flex items-center gap-3'><LuCircleCheckBig className='text-red-500 w-5 h-5' />Curriculum Based</li>
                    <li className='flex items-center gap-3'><LuCircleCheckBig className='text-red-500 w-5 h-5' />Flexible Class Schedule</li>
                    <li className='flex items-center gap-3'><LuCircleCheckBig className='text-red-500 w-5 h-5' />No-Contract Memberships</li>
                </ul>
            </div>
            <div className='flex flex-col w-[400px] h-full rounded-md border-2 border-red-700 px-5 py-5'>
                <h2 className='text-xl font-semibold text-center mb-4'>Our Training</h2>
                <ul className='space-y-2'>
                    <li className='flex items-center gap-3'><FaRegCircleXmark className='text-red-500 w-5 h-5' />Self Defense Focused</li>
                    <li className='flex items-center gap-3'><FaRegCircleXmark className='text-red-500 w-5 h-5' />Safety First</li>
                    <li className='flex items-center gap-3'><FaRegCircleXmark className='text-red-500 w-5 h-5' />Curriculum Based</li>
                    <li className='flex items-center gap-3'><FaRegCircleXmark className='text-red-500 w-5 h-5' />Flexible Class Schedule</li>
                    <li className='flex items-center gap-3'><FaRegCircleXmark className='text-red-500 w-5 h-5' />No-Contract Memberships</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default WhyUs
