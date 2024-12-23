"use client"

import React from 'react';
import { 
    Carousel, 
    CarouselContent, 
    CarouselItem,
    CarouselPrevious,
    CarouselNext, 
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { SlantedHeading } from './layout/SlantedHeading';
import { MdStar } from "react-icons/md";

const testimonials = [
    {
        text: 'I am so happy with the program! I have learned so much about coding and I am so excited to continue learning more!',
        name: 'John Doe',
        position: 'CEO',
    },
    {
        text: 'I am so happy with the program! I have learned so much about coding and I am so excited to continue learning more!',
        name: 'John Doe',
        position: 'CEO',
    },
    {
        text: 'I am so happy with the program! I have learned so much about coding and I am so excited to continue learning more!',
        name: 'John Doe',
        position: 'CEO',
    },
    {
        text: 'I am so happy with the program! I have learned so much about coding and I am so excited to continue learning more!',
        name: 'John Doe',
        position: 'CEO',
    },
    {
        text: 'I am so happy with the program! I have learned so much about coding and I am so excited to continue learning more!',
        name: 'John Doe',
        position: 'CEO',
    },
]

const Testimonials = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
      )

  return (
    <div className='flex flex-col w-full'>
        <SlantedHeading text='testimonials' />

      <Carousel
      className='w-full py-20 px-10'
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
            {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className='border-red-700 bg-black border-2 rounded-md flex flex-col text-center px-2 py-10 gap-4 h-auto w-auto'>
                        <svg className='mb-4 fill-red-700' width="86" height="62" viewBox="0 0 86 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M86 12.7016L83.241 0.015625C63.3756 0.92565 49.6051 9.19097 49.6051 33.4977V61.4759H84.3105V26.3115H71.1667C71.167 18.5122 76.0605 13.925 86 12.7016Z"/>
                            <path d="M36.3949 12.7018L33.6359 0.0158691C13.7705 0.925894 0 9.19144 0 33.4982V61.4764H34.7068V26.3117H21.5548C21.5548 18.5124 26.4483 13.9252 36.3949 12.7018Z"/>
                        </svg>
                        <p className='mb-6 font-mono'>{testimonial.text}</p>
                        <hr className='w-full mb-4 h-1 rounded-full border-red-700 px-2' />
                        <div className='flex flex-col items-center gap-4'>
                            <h2>
                                <span className='font-semibold text-lg'>{testimonial.name}<br /></span>
                                <span className='flex items-center gap-1 mt-1'>
                                    <MdStar className='text-red-600' />
                                    <MdStar className='text-red-600' />
                                    <MdStar className='text-red-600' />
                                    <MdStar className='text-red-600' />
                                    <MdStar className='text-red-600' /> 
                                </span>
                            </h2>
                        </div>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>

        <div className='w-[100px] h-40 absolute -bottom-8 left-0 right-0 m-auto flex items-center justify-between'>
            <CarouselPrevious className='rounded-md active:scale-95 text-red-600 hover:text-red-600 hover:bg-black border-red-600 bg-black transition-transform transforf duration-300' />
            <CarouselNext className='rounded-md active:scale-95 text-red-600 hover:text-red-600 hover:bg-black border-red-600 bg-black transition-transform transform duration-300' />
        </div>

      </Carousel>
    </div>
  )
}

export default Testimonials

