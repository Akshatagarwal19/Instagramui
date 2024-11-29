import React from "react";
import Image from 'next/image';

const SignupPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-center text-5xl text-gray-800 mb-8" style={{ fontFamily: 'Grandista, sans-serif' }}>
          Instagram
        </h1>
        <form className="space-y-4">
          
          <div>
            <input type="text" placeholder="Full Name" className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          
          <div>
            <input type="email" placeholder="Email" className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          
          <div>
            <input type="password" placeholder="Password" className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          
          <button type="submit" className="w-full py-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <a href="/" className="text-blue-500 hover:underline">
            Log in
          </a>
        </div>
        <div className="m-6 text-center text-sm">
            Get the app.
            <div className="flex justify-center mt-4 space-x-2">
                <a href="#">
                    <Image src="/Images/playstoreimg.png" alt="Get it on Google Playstore" width={135} height={40} />
                </a>
                <a href="#">
                    <Image src="/images/getitonMicrosoft.png" alt="Get it on Microsoft" width={135} height={40} /> 
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
