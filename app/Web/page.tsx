import CourseSection from '@/components/CourseSection'
import HeaderSections from '@/components/HeaderSections'
import { MobileCourseOutline, WebCourseOutline } from '@/data/courses'
import React from 'react'

const page = () => {
  return (
    <div className=" mx-auto p-4">
         <HeaderSections title='Web Development '/>
    <div className='mt-32'> 
        
        <h1 className="text-2xl font-bold mb-4">Course Outline :Front End Web Development</h1><hr/>
        <br/>
        <p>
        This professional course is designed for aspiring Front-End Developers, covering all key 
        skills and responsibilities. The focus is on understanding the full scope of front-end 
        development, from building user interfaces to optimizing performance, accessibility, and 
        maintaining code quality.
        </p>
        <br/>
        <p>
        By the end of this course, you will gain expertise in:
           
        </p>
        <ul className='list-disc list-inside mt-3'>
           <li className='mt-3'>
            <strong className='text-orange-400'> HTML5:</strong> Advanced semantic structures and best practices.
           </li>
           <li className='mt-3'>
          <strong className='text-orange-400'> CSS3:</strong> Flexbox, CSS Grid, Animations, and Preprocessors.
           </li>
           <li className='mt-3'>
           <strong className='text-orange-400'>JavaScript: </strong> Advanced ES6+, Asynchronous programming, and working with APIs
           </li>
           <li className='mt-3'>
           <strong className='text-orange-400'>ReactJS: </strong>Component-based architecture, state management, hooks, and advanced 
           features of React.
           </li>
           <li className='mt-3'>
           <strong className='text-orange-400'>Version Control: </strong> Git and GitHub for managing collaborative projects
           </li>
           <li className='mt-3'>
           <strong className='text-orange-400'>Performance Optimization: </strong> Strategies for optimizing the speed and responsiveness of 
           websites
           </li>
           <li className='mt-3'>
           <strong className='text-orange-400'>Accessibility (a11y): </strong> Best practices for making web apps accessible to all users
           </li>
        </ul>

        <div>
            <h4 className='text-orange-400 flex justify-between text-left font-semibold text-xl m-4 border-b-2 border-b-orange-400 p-5'> Course Structure  <span className='text-sm '><strong className='text-orange-400'>Duration : </strong> 12 Weeks</span>  </h4>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>                    
                    <div>
                        <p><strong className='text-orange-400'>Format : </strong><br/>  Self-Paced, with weekly live Q&A sessions</p>
                    </div>
                    <div>                   
                        <p><strong className='text-orange-400'>Evaluation : </strong><br/>  Practical assignments, quizzes, and a final project</p>
                    </div>
                    <div>                   
                        <p><strong className='text-orange-400'>Tools : </strong><br/> Visual Studio Code, Git, GitHub, Chrome DevTools, Node.js, React
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-4'>
            <hr/>
         {
            WebCourseOutline.map((outline,index)=>(
                <CourseSection duration ={outline.duration} learning ={outline.learning} module={outline.module} objectives={outline.objectives} key={index}/>
            ))
        }
   
        </div>
        
    </div>
</div>
  )
}

export default page
