import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { SlantedHeading } from './layout/SlantedHeading';


const ProgramsSection = () => {
  return (
    <div>
        <SlantedHeading text='Empowering All Generations' backgroundColor='bg-red-700' textColor='text-white' width='max-w-[730px]' />
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 pt-10 pb-10 lg:pb-0'>
            <Image
            src='/Images/ready-fight-woman-white-karate-uniform.jpg'
            alt='karate'
            width={1000}
            height={1000}
            className='w-full lg:max-w-[676px] xl:max-w- h-[500px] '
            />
            <div className='flex flex-col items-center lg:items-start justify-center space-y-6 lg:pr-20 px-10 lg:px-0'>
                <h2 className='text-4xl font-semibold'>
                    Adults Program
                </h2>
                <p className='text-center lg:text-start'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum error vitae eligendi repellat. Sunt est ipsa deserunt a totam dolorum, cumque quaerat dolore unde voluptatum, sint repellat eum, fuga distinctio?
                </p>
                <Button className='bg-red-700 text-lg hover:bg-red-600 rounded-none w-[150px] h-[50px] '>
                    Get Started
                </Button>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div className='flex flex-col order-2 lg:order-1 items-center lg:items-start justify-center space-y-6 lg:pl-20 px-10 lg:px-0'>
                <h2 className='text-4xl font-semibold'>
                    Kids Program
                </h2>
                <p className='text-center lg:text-start'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum error vitae eligendi repellat. Sunt est ipsa deserunt a totam dolorum, cumque quaerat dolore unde voluptatum, sint repellat eum, fuga distinctio?
                </p>
                <Button className='bg-red-700 text-lg hover:bg-red-600 rounded-none w-[150px] h-[50px] '>
                    Get Started
                </Button>
            </div>
            <Image
            src='/Images/group-boys-girl-fighting-aikido-training-martial-arts-school-healthy-lifestyle-sports-concept (2).jpg'
            alt='karate'
            width={1000}
            height={1000}
            className='w-full lg:max-w-2xl xl:max-w- h-[500px] order-1 lg:order-2 '
            />
        </div>
    </div>
  )
}

export default ProgramsSection
