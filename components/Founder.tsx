"use client"

import Image from 'next/image'
import React from 'react'
import { Triangle } from './layout/Triangle'
import { GradientBlob } from '@/components/layout/GradientBlob'
import { motion } from 'framer-motion'

const Founder = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center justify-center pt-10 lg:px-10 w-full relative overflow-x-hidden lg:overflow-x-visible'>
        <div className='absolute inset-0 opacity-50'>
          <GradientBlob 
            colors={['#f92a2a', '#7a0909', '#0e0f0f']} 
            size={400}
            blur={60}
            duration={15}
          />
        </div>
      <div className='flex justify-center flex-col w-full max-w-[300px] relative overflow-hidden'>
        <motion.div 
          className='relative z-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-xl font-semibold text-center lg:text-start'>Founder</h2>
          <span className='w-full h-2 bg-red-700 my-4 block'></span>
          <h2 className='text-4xl font-extrabold uppercase text-center'>
            Hassan Ahmed
          </h2>
          <span className='w-full h-2 bg-red-700 my-4 block'></span>
        </motion.div>
      </div>
      <div className='relative w-full h-full overflow-hidden'>
        <Image
          src='/Images/martial-art-school-hero-img.png'
          alt='Founder'
          width={1000}
          height={600}
          className='w-full h-auto max-h-[600px] relative z-10'
        />
        <Triangle width='w-full' height='h-full absolute inset-0' />
      </div>
      <motion.div 
        className='flex flex-col max-w-[300px] items-center lg:items-start text-center lg:text-start justify-center pt-10 lg:pt-0 space-y-4'
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className='font-mono'>
          &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae aspernatur vitae ea impedit consequatur, enim deleniti esse in nulla iste tempora doloremque repudiandae quos temporibus modi eaque qui? Iusto, dolorem?&quot;
        </p>
        <Image
          src='/Images/signature.png'
          alt='Signature'
          width={200}
          height={100}
        />
      </motion.div>
    </div>
  )
}

export default Founder


