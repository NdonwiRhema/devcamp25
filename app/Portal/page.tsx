'use client';
import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { signInToPortal } from './portalActions';
import { redirect } from 'next/navigation';
import { HandleAuthErrorCase } from '@/utils/Errorhandling/HandleErrorCase';
import ForgotPassword from '@/components/portal/ForgotPassword';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const[forgotPassword, setForgotPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here
    const {data, error} = await signInToPortal(email, password);
    if (error) {
      setError(`${HandleAuthErrorCase(error)}`);
    } else {
      console.log(data);
      redirect('../../Portal/dashboard');
    }
  };
// Todo : Add a loading animation to the submit button while the form is being submitted
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg py-12 px-4 sm:px-6 lg:px-8`}>
      ${forgotPassword ? <ForgotPassword/> :(
         <div className="max-w-md w-full space-y-8">
         <div>
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center">
              <LogIn className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-dark-text">
            Devcamp25 Portal
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-dark-text-secondary">
            Sign in to access your courses
          </p>
          <p className="mt-2 text-center text-sm text-red-600 dark:text-dark-text-secondary">
           {error}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-dark-border placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-dark-text rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 dark:focus:ring-orange-400 focus:z-10 sm:text-sm dark:bg-dark-card"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-dark-border placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-dark-text rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 dark:focus:ring-orange-400 focus:z-10 sm:text-sm dark:bg-dark-card"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded dark:border-dark-border dark:bg-dark-card"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-dark-text">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" onClick={()=>setForgotPassword(true)} className="font-medium text-orange-600 hover:text-orange-500 dark:text-orange-400">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
            onClick={()=>setIsSubmitting(true)}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:focus:ring-offset-dark-bg"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LogIn className="h-5 w-5 text-orange-500 group-hover:text-orange-400" aria-hidden="true" />
              </span>
              Sign in {isSubmitting && <span className="ml-2 animate-spin">...</span>}
            </button>
          </div>
        </form>
      </div>
      )}
     
    </div>
  );
}