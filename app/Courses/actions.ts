  'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'


// export async function login({email,password}:{email:string,password:string}) {
//   const supabase = await createClient()

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: email,
//     password: password,
//   }

//   const { error } = await supabase.auth.signInWithPassword(data)

//   if (error) {
//     redirect('/error')
//   }

//   revalidatePath('/', 'layout')
//   redirect('/')
// }


export async function signup(formData:FormData) {

  const supabase = await createClient()
  const userMail = formData.get('email') as string
  const whatsapp = formData.get('whatsapp') as string
  const course = formData.get('course') as string
  console.log(course)
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const password = `${userMail.split('@')[0]}- ${Math.ceil(Math.random()*1000)}`
  const data = {
    email: formData.get('email') as string,
    password:password,
  }  
   

  const userData = {
    email:data.email,
    username:data.email.split('@')[0].replaceAll(/(\d)/gm,''),
    whatsapp:whatsapp,
    created_at:new Date().toUTCString(),
    last_modified:new Date().toUTCString(),
    id:password,
    course_slug: course.split(' ')[0].toLowerCase()
  }

 const {error} = await supabase.auth.signUp(data)  

 if (error) {
    redirect('/error')
  }
  else{
    const {error} = await supabase.from('users').insert(userData)
    if(!error){
       revalidatePath('/', 'layout')
       redirect('/Confirmation',)
    }
    else{
      console.log(error)
      redirect('/error')
    }
 
  }

 
}

export async function signOut() {
  const supabase = createClient()
  const response= (await supabase).auth.signOut()
  console.log(response)
   redirect('/')
}
