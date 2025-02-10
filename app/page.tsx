
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code2, GraduationCap, Laptop } from "lucide-react";
import Image from "next/image";
import { SectionDots } from "@/components/section-dots";
import HeroText from "@/components/home/HeroText";
import CustomButtons from "@/components/home/CustomButtons";

export default function Home() {

  return (
    <div className="snap-container">
      <SectionDots />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Hero background"
            fill
            className="object-cover brightness-50 opacity-30"
            priority
          />
        </div>
        <div className="section-content relative z-10 text-center text-white ">
          <HeroText/>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none bg-card hover:bg-card/80 transition-colors">
              <CardHeader>
                <Code2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Industry-Recognized Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                Learn the latest technologies and best practices used by top companies. Our curriculum is
                constantly updated to reflect industry demands.
              </CardContent>
            </Card>

            <Card className="border-none bg-card hover:bg-card/80 transition-colors">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Expert Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                Our instructors are experienced developers and passionate educators dedicated to your
                success.
              </CardContent>
            </Card>

            <Card className="border-none bg-card hover:bg-card/80 transition-colors">
              <CardHeader>
                <Laptop className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Career Support</CardTitle>
              </CardHeader>
              <CardContent>
                We provide comprehensive career support, including resume building, interview prep, and
                job placement assistance.
              </CardContent>
            </Card>

            <Card className="border-none bg-card hover:bg-card/80 transition-colors">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Hands-on Projects</CardTitle>
              </CardHeader>
              <CardContent>
                Build a portfolio of real-world projects that showcase your skills and impress potential
                employers.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section>
        <div className="section-content">
          <h2 className="text-4xl font-bold text-center mb-12">Explore Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <CustomButtons title="Learn More" url="/Web" />
              </CardContent>
            </Card>

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
                <CustomButtons title="Learn More" url="/Mobile" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section>
        <div className="section-content">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-none bg-card hover:bg-card/80 transition-colors">
              <CardContent className="pt-6">
                <p className="text-lg italic mb-4">
                  "DevCamp transformed my career. The hands-on experience and expert guidance helped me
                  land my dream job as a frontend developer."
                </p>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Software Engineer at Tech Corp</p>
              </CardContent>
            </Card>

            <Card className="border-none bg-card hover:bg-card/80 transition-colors">
              <CardContent className="pt-6">
                <p className="text-lg italic mb-4">
                  "The React Native course was exactly what I needed to transition into mobile
                  development. The instructors were fantastic and the curriculum was comprehensive."
                </p>
                <p className="font-semibold">Michael Chen</p>
                <p className="text-sm text-muted-foreground">Mobile Developer at App Studios</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Footer Section */}
      <section>
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Email: contact.palstudios@gmail.com | info@kadoshsoftwares.com  | devcamp25@kadoshsoftwares.com</p>
             
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <p>&copy; 2025 DevCamp. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}