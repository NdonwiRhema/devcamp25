'use client'
import React, { useEffect } from 'react'
import { checkUserLogged } from '../portalActions'
import { redirect } from 'next/navigation'

const layout = ({children}:{children:React.ReactNode}) => {
    const showthisUser = async()=>{
        const user = await checkUserLogged()
        if(user===null){
            redirect('../../Portal')
    }
  }
    useEffect(() => {
        showthisUser()
    },[])
  return (
    <div>
      {children}
    </div>
  )
}

export default layout
