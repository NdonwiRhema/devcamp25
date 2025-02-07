import HeaderSection from '@/components/HeaderSections'
import CircularBackButton from '@/components/home/CircularBackButton'
import CustomButtons from '@/components/home/CustomButtons'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const Courses = () => {
  
  return (
    <div className='snap-container'>
      <HeaderSection title='All Courses'/>
      
      <div className='px-5 grid grid-cols-1 gap-12 md:grid-cols-2 mt-28'>
             <Card className="border-none bg-card hover:bg-card/80 transition-colors">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
                    alt="Mobile Development"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              <CardHeader>
                <CardTitle>Mobile Development with React Native</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Develop cross-platform mobile apps for iOS and Android using React Native. Master
                  mobile UI design, native module integration, and app deployment.
                </p>
               <CustomButtons title='Register' url='/Register?course=mobile'/>
              </CardContent>
            </Card>
            <Card className="border-none bg-card hover:bg-card/80 transition-colors">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80"
                  alt="Web Development"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Web Development with Next.js</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Build modern, high-performance web applications using Next.js, the popular React
                  framework. Learn server-side rendering, static site generation, and API integration.
                </p>
               <CustomButtons title='Register'  url='/Register?course=web'/>
              </CardContent>
            </Card>

            
      </div>
    
    </div>
 
  )
}

export default Courses
