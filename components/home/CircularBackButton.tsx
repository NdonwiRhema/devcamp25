'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const CircularBackButton = ({url}:{url:string}) => {
    const router = useRouter()
  return (
    <div onClick={()=>router.push(url)} className='p-5 rounded-full bg-gray-800 align-middle just'>
         <ChevronLeft color='white'  size={32}/>
   </div>
  )
}

export default CircularBackButton
