import React from 'react'
import CircularBackButton from './home/CircularBackButton'

const HeaderSections = ({title}:{title:string}) => {
  return (
    <div className='w-full mb-3 fixed z-10 bg-black'>
    <div className='p-5'>
      <div className='flex justify-between align-middle '>
          <CircularBackButton url='/'/>
          <div className='border-b-2 border-orange-400 p-5'>
            <p className='text-white text-center'>{title}</p>
          </div>
      </div>
  </div>
  </div>
  )
}

export default HeaderSections
