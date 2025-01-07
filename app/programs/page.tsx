import ResgistirationForm from '@/components/Form'
import Testimonials from '@/components/Testimonials'
import WhyUs from '@/components/WhyUs'
import React from 'react'
import DotPattern from '@/components/ui/DotPattern'

const page = () => {
  return (
    <div className='relative'>
      <DotPattern className="absolute inset-0 -z-10" />
      <ResgistirationForm />
      <WhyUs />
      <Testimonials />
    </div>
  )
}

export default page
