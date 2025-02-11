'use client'
import { KeyRound, RectangleEllipsis } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { resetPassword } from '../portalActions';
import { HandleAuthErrorCase } from '@/utils/Errorhandling/HandleErrorCase';
import { redirect } from 'next/navigation';

const ResetPassword =  () => {
    const params = new URLSearchParams;
    const email = params.get('email')!;
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError('');
            // Handle password reset logic here
            const {error} = await resetPassword(email,newPassword);
            if (error !== null && error.message !== '' && error.message !== undefined) {
                setError(`${HandleAuthErrorCase(error)}`)
            }
            alert('Password reset successful');
            redirect('../../Portal');
        }
    };

    return (
        <>
 <div className={`min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center">
              <KeyRound className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-dark-text">
          Reset Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-dark-text-secondary">
            Enter your new password below to reset your account password.
          </p>
          <p className="mt-2 text-center text-sm text-red-600 dark:text-dark-text-secondary">
           {error}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
               <div>
                    <label htmlFor="newPassword" className='text-sm text-black font-semibold'>New Password:</label>
                    <input
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-dark-border placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-dark-text rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 dark:focus:ring-orange-400 focus:z-10 sm:text-sm dark:bg-dark-card"
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
              </div>
              <div>
                <label htmlFor="confirmPassword"  className='text-sm text-black font-semibold'>Confirm Password:</label>
                <input
                   className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-dark-border placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-dark-text rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 dark:focus:ring-orange-400 focus:z-10 sm:text-sm dark:bg-dark-card"
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
             </div>
             {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:focus:ring-offset-dark-bg"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <RectangleEllipsis className="h-5 w-5 text-orange-500 group-hover:text-orange-400" aria-hidden="true" />
              </span>
              Reset Password
            </button>
          </div>
        </form>
      </div>
 </div>
        </>
      
    );
};

export default ResetPassword;