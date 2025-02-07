'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const HeroText = () => {
      const [isMobile,setIsMobile] = useState(false)
      const router = useRouter()
      useEffect(()=>{
        const isMobile = window.screen.width<600 ?true: false
        setIsMobile(isMobile)
      },[])
  return (
    <div>
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Launch Your Tech Career with DevCamp
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
               {!isMobile?` Master Web & Mobile Development through hands-on training. Learn from experts, build real projects, and gain job-ready skills.`:' Learn from experts, build real projects, and gain job-ready skills.'}
          </p>
          <Button onClick={()=>router.push('./Courses/')} size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            Register Now!
          </Button>
          
    </div>
  )
}

export default HeroText
