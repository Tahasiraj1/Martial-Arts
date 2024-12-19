import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between w-full text-white md:pl-10 pt-10 md:pt-0 '>
        <div className='flex flex-col text-start max-w-xl space-y-8 px-5'>
            <h1 className='text-2xl'>
                Welcome To The Executor
            </h1>
            <h2 className='text-6xl font-extrabold'>
                MARTIAL ARTS<br />
                SCHOOL.
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, facilis? Modi blanditiis quasi magnam quas corrupti mollitia unde excepturi fugit? Doloremque veniam odit ducimus? Reiciendis ducimus dolores aspernatur deleniti hic!
            </p>
            <div className='flex items-center gap-4'>
                <Button className='bg-red-700 text-lg hover:bg-red-600 rounded-none w-[150px] h-[50px] '>
                    GET STARTED
                </Button>
                <p className='flex flex-col'>
                    <span><strong>Register Now:</strong></span>
                    <span>(+92)12345678</span>
                </p>
            </div>
        </div>
        <Image
            src='/Images/martial-art-school-hero-img.png'
            alt='/martial-art-school'
            width={1000}
            height={1000}
            className='w-[1000px] h-[600px] overflow-hidden'
        />
    </div>
  )
}

export default Hero
