'use client'
import React, { useState } from 'react'

import { signup } from '../Courses/actions'
const page = () => {
    const params = new URLSearchParams()
    const course = params.get('course')
    const [message,setMessage] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const validateWhatsAppNumber = (numberText:string) => {
        const number =numberText.trim() || "";
        // Simple validation for international format
        const isValidNumber = /^(\+?\d{10,15})$/.test(number);
    
        if (!isValidNumber) {
          setMessage("Invalid WhatsApp number. Ensure it starts with + and contains 10-15 digits.");
        }
      };

  return (
    <div className='w-full flex justify-center align-middle mt-24'>
        
          <form className='w-4/5'>
          <div className='text-center font-semibold mb-10'>
            <h2>You are Registering for {course === 'web' ? 'Web Development with Next.js' : 'Mobile Development With React Native'}</h2>
          </div>
             <div className=''>
                <div className='flex flex-col mb-2 mt-3'>
                    <label> Email <span className='text-orange-500'>*</span></label>
                    <input 
                    className='mt-1 rounded-md h-10 bg-transparent border-b-2 border-t-2 border-l-2 border-r-2 p-2'
                    placeholder='Email Address '
                    required
                    name='email'
                    type='email'
                    id='email'
                    />
                </div>
                <div className='flex flex-col mb-2 mt-3'>
                    <label> WhatsApp <span className='text-orange-500'>*</span></label>
                    <small>Be sure to add your country code (+91 for India)</small>
                    <input
                    onBlur={(e)=>validateWhatsAppNumber(e.currentTarget.value)}
                    className='mt-1 rounded-md h-10 bg-transparent border-b-2 border-t-2 border-l-2 border-r-2 p-2'
                    placeholder=' Whatsapp number '
                    required
                    name='whatsapp'
                    id='whatsapp'
                    type='tel'
                    />
                    <span className='text-red-700 text-sm'>{message}</span>
                </div>
                <div className='flex flex-col mb-2 mt-3'>                   
                    <input
                    className='mt-1 rounded-md h-10 bg-transparent border-b-2 border-t-2 border-l-2 border-r-2 p-2'
                    name='course'
                    id='course'
                    type='text'
                    value={course === 'web' ? 'Web Development with Next.js' : 'Mobile Development With React Native'}
                    readOnly
                   />
                   
                </div>
                <div className='flex flex-col mb-2 mt-3'>
                 {
                    message === ''?(
                               <button formAction={signup} type='submit' onClick={()=>setIsLoading(true)} className="w-full mt-5 rounded-sm h-10 bg-primary  text-black hover:bg-primary hover:text-white">
                                  Register {isLoading?'....':''}
                               </button>
                    ):(
                        <div className='w-full mt-5 rounded-sm h-10 bg-primary  text-black hover:bg-primary hover:text-white opacity-50 text-center place-items-center'> 
                            Register
                        </div>
                    )
                 }
                </div>
           </div>
   </form>  
    </div>
  
  )
}

export default page
