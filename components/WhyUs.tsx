"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { SlantedHeading } from './layout/SlantedHeading'
import { FaRegCircleXmark } from "react-icons/fa6";
import { LuCircleCheckBig } from "react-icons/lu";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }


const WhyUs = () => {
  return (
    <motion.div className='flex flex-col w-full items-center justify-center relative'
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    >
        <SlantedHeading 
        text='Why train here?' 
        paragraph='Great question! Here are a few reasons why you should train with us.'
        width='w-full'
        />
        <div className='flex flex-col items-center justify-center md:flex-row gap-6 py-10 px-10'>
            <motion.div className='flex flex-col w-[250px] sm+:w-[350px] md:w-[400px] lg:w-[500px] h-full rounded-md border-2 border-red-700 bg-black px-5 py-5'
             variants={itemVariants}
            >
                <h2 className='text-xl font-semibold text-center mb-4'>Our Training</h2>
                <ul className='space-y-2'>
                    <li className='flex items-center gap-3'><LuCircleCheckBig className='text-red-500 w-5 h-5' />Self Defense Focused</li>
                    <li className='flex items-center gap-3'><LuCircleCheckBig className='text-red-500 w-5 h-5' />Safety First</li>
                    <li className='flex items-center gap-3'><LuCircleCheckBig className='text-red-500 w-5 h-5' />Curriculum Based</li>
                    <li className='flex items-center gap-3'><LuCircleCheckBig className='text-red-500 w-5 h-5' />Flexible Class Schedule</li>
                    <li className='flex items-center gap-3'><LuCircleCheckBig className='text-red-500 w-5 h-5' />No-Contract Memberships</li>
                </ul>
            </motion.div>
            <motion.div variants={itemVariants} className='flex flex-col w-[250px] sm+:w-[350px] md:w-[400px] lg:w-[500px] h-full rounded-md border-2 border-red-700 bg-black px-5 py-5'>
                <h2 className='text-xl font-semibold text-center mb-4'>Our Training</h2>
                <ul className='space-y-2'>
                    <li className='flex items-center gap-3'><FaRegCircleXmark className='text-red-500 w-5 h-5' />Self Defense Focused</li>
                    <li className='flex items-center gap-3'><FaRegCircleXmark className='text-red-500 w-5 h-5' />Safety First</li>
                    <li className='flex items-center gap-3'><FaRegCircleXmark className='text-red-500 w-5 h-5' />Curriculum Based</li>
                    <li className='flex items-center gap-3'><FaRegCircleXmark className='text-red-500 w-5 h-5' />Flexible Class Schedule</li>
                    <li className='flex items-center gap-3'><FaRegCircleXmark className='text-red-500 w-5 h-5' />No-Contract Memberships</li>
                </ul>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default WhyUs
