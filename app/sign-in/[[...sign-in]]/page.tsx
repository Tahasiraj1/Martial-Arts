import React from 'react'
import { SignIn } from '@clerk/nextjs'
import DotPattern from '@/components/ui/DotPattern'

const page = () => {
  return (
    <div className='relative min-h-screen flex items-center justify-center'>
        <DotPattern className="absolute inset-0 -z-10" />
      <SignIn />
    </div>
  )
}

export default page
