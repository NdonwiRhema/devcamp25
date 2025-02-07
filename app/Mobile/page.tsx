import CourseSection from '@/components/CourseSection'
import HeaderSection from '@/components/HeaderSections'
import { MobileCourseOutline } from '@/data/courses'
import React from 'react'

const page = () => {
  return (
    <div className=" mx-auto p-4">
        <HeaderSection title='Mobile Development '/>
        <div className='mt-32'> 
            
    <h1 className="text-2xl font-bold mb-4">Course Outline : Mobile Development with React Native</h1>
    {
        MobileCourseOutline.map((outline,index)=>(
            <CourseSection duration={outline.duration} learning={outline.learning} module={outline.module} objectives={outline.objectives} key={index}/>
        ))
    }
    
        </div>
</div>
  )
}

export default page
