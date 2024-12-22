import Image from 'next/image'
import React from 'react'
import { Triangle } from './layout/Triangle'

const Founder = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center justify-center pt-10 lg:px-10 w-full'>
      <div className='flex justify-center flex-col w-full max-w-[300px] '>
        <h2 className='text-xl font-semibold text-center lg:text-start'>Founder</h2>
        <span className='w-full h-2 bg-red-700 my-4 '></span>
        <h2 className='text-4xl font-extrabold uppercase text-center'>
          Hassan Ahmed
        </h2>
        <span className='w-full h-2 bg-red-700 my-4 '></span>
      </div>
      <div className='relative w-full h-full overflow-y-hidden'>
        <Image
        src='/Images/martial-art-school-hero-img.png'
        alt='Founder'
        width={1000}
        height={1000}
        className='w-[1000px] h-[600px] relative z-10'
        />
        <Triangle width='w-full' height='h-[680px]' />
      </div>
      <div className='flex flex-col max-w-[300px] items-center lg:items-start text-center lg:text-start justify-center pt-10 lg:pt-0 space-y-4'>
        <p className='font-mono'>
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae aspernatur vitae ea impedit consequatur, enim deleniti esse in nulla iste tempora doloremque repudiandae quos temporibus modi eaque qui? Iusto, dolorem?"
        </p>
        <Image
        src='/Images/signature.png'
        alt='Signiture'
        width={200}
        height={100}
        />
      </div>
    </div>
  )
}

export default Founder
