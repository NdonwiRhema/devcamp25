import React from 'react';
import { CheckCircle } from 'lucide-react';


const ConfirmationPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white-100 p-8 rounded shadow-md text-center place-items-center">       
        <CheckCircle className="text-green-500 w-16 h-16 mb-4 " />
        <h1 className="text-2xl font-bold mb-4">A verification was sent</h1>
        <p className="text-white-700 mb-4">An email has been sent to your email address.</p>
        <p className="text-white-500">Please check your inbox to confirm your registration.</p>
      </div>
    </div>
  );
};

export default ConfirmationPage;