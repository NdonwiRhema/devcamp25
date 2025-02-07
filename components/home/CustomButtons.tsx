
'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const CustomButtons = ({title,url,urlOptions}:{title:string,url:string,urlOptions?: {}}) => {
    const router = useRouter()
  return (
    <div>
       <Button onClick={()=>router.push(url)} variant="default" className="w-full text-black hover:bg-primary hover:text-white">
                 {title}
        </Button>
    </div>
  )
}

export default CustomButtons
