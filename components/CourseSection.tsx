'use client'

import { ChevronDownCircle, ChevronUpCircle } from 'lucide-react'
import React, { useState } from 'react'

interface Outline{
    module :string,
    objectives:string[],
    learning:string[],
    duration:string
}

const CourseSection = (props:Outline) => {
    const[develop,setDevelop] = useState(false)
  return (
    <div className="mb-8">
        <div className='w-full flex flex-row justify-between bg-slate-700 p-5 mb-5'>
             <h2 className="text-xl font-semibold mb-2">{props.module}</h2>
             <div onClick={()=>setDevelop(!develop)}>
                {!develop?<ChevronDownCircle/>:<ChevronUpCircle/>}
             </div>
        </div>
       {
        develop?(<div className='bg-gray-400 p-5'>
            <div className="mb-4 p-5">
                <h3 className="text-lg font-medium mb-1 p-5">Objectives</h3> <hr/>
                <ol className="mt-3 text-black">
                    {props.objectives.map((objective,index)=>(
                        <li key={index}>{objective}</li>
                    ))}
                </ol>
            </div>
            <div>
                <h3 className="text-lg font-medium mb-1 p-5">What will I learn ?</h3> <hr/>
                <ul className="list-disc list-inside mt-5 text-black">
                   {
                    props.learning.map((learn,index)=>(
                        <li className='my-3' key={index}>{learn}</li>
                    ))
                   }
                    
                </ul>
            </div>
           </div>):(<></>)
       }
        
    </div>
   
  )
}

export default CourseSection
