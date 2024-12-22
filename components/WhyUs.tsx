import React from 'react'
import { SlantedHeading } from './layout/SlantedHeading'

const WhyUs = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center'>
        <SlantedHeading 
        text='Why train here?' 
        paragraph='Great question! Here are a few reasons why you should train with us.'
        width='w-full'
        />
        <div className='flex flex-col lg:flex-row gap-6 py-10 px-10'>
            <div className='flex flex-col w-[500px] h-full bg-red-700 items-center justify-center px-5 py-5'>
                <ul className='space-y-4 text-start'>
                    <li>Self Defense Focused</li>
                    <li>Safety First</li>
                    <li>Curriculum Based</li>
                    <li>Flexible Class Schedule</li>
                    <li>No-Contract Memberships</li>
                </ul>
            </div>
            <div className='flex flex-col w-[500px] h-full bg-red-700 items-center justify-center px-5 py-5'>
            <ul className='space-y-4'>
                <li>Self Defense Focused</li>
                <li>Safety First</li>
                <li>Curriculum Based</li>
                <li>Flexible Class Schedule</li>
                <li>No-Contract Memberships</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default WhyUs
