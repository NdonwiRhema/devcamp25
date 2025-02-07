'use client'
import React from 'react';
import { signOut } from '../Courses/actions';

    const OtpSuccess: React.FC = () => {

        return (
            <div className="flex flex-col items-center justify-center h-screen max-w-sm mx-auto place-items-center">
                <h1 className="text-4xl mb-4 text-center"> Verification Successful!</h1>
                <p className="text-lg mb-4">Thank you for Registering for the DevCamp.</p>
                <button 
                    className="bg-primary text-black py-2 px-4 rounded" 
                    onClick={signOut}
                >
                    Go to Home
                </button>
            </div>
        );
    };

    export default OtpSuccess;
    
