
'use client';
import { sendPasswordResetEmail } from '@/app/Portal/portalActions';
import { HandleAuthErrorCase } from '@/utils/Errorhandling/HandleErrorCase';
import { KeyRound, MoveLeft, SendHorizonal } from 'lucide-react';
import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // Add your forgot password logic here
        const { error } = await sendPasswordResetEmail(email);
        if (error !== null) {
            setMessage(`${HandleAuthErrorCase(error)}`);
        }
        setMessage('If an account with that email exists, you will receive a password reset email shortly.');
    };

    return (
        <div className={`min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg py-12 px-4 sm:px-6 lg:px-8`}>
           <div className="max-w-md w-full space-y-8">
           <div>
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center">
              <KeyRound className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-dark-text">
            Forgot Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-dark-text-secondary">
            If you have forgotten your password, enter your email address below and we will send you a password reset link.
          </p>
          <p className="mt-2 text-center text-sm text-red-600 dark:text-dark-text-secondary">
           {message}
          </p>
        </div>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <label htmlFor="email" className='text-sm text-black font-semibold'>Email</label>
                        <input
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-dark-border placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-dark-text rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 dark:focus:ring-orange-400 focus:z-10 sm:text-sm dark:bg-dark-card"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='mt-4'>
                            <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:focus:ring-offset-dark-bg"
                            >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <SendHorizonal className="h-5 w-5 text-orange-500 group-hover:text-orange-400" aria-hidden="true" />
                            </span>
                            Send Password Reset Link
                            </button>
                    </div>
                </form>
               <div className='mt-4 '>
                <div className="mt-2 text-center text-sm text-gray-600 dark:text-dark-text-secondary">
                 <a href="/Portal" className="flex justify-center align-middlefont-medium text-orange-600 hover:text-orange-500">
                    <MoveLeft className="h-5 w-5 text-orange-500 mr-4" />
                    Back to Sign In
                 </a>
                </div>
               </div>
           </div>
        </div>
    );
};

export default ForgotPassword;