'use client';

import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { toggleTheme } from "@/redux/slices/themeSlice";
import { login } from "@/redux/features/authSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const { loading } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(login({ email, password }));
    if (login.fulfilled.match(result)) {
      router.push('/home');
    }
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`flex min-h-screen items-center justify-center ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl">
        
        <div className="hidden md:block w-1/2">
          <Image src="/Images/Instagrampic1.png" alt="Instagram preview" width={500} height={500} className="w-full h-auto rounded-lg" />
        </div>

        <div className={`w-full md:w-1/2 ${theme === "dark" ? "bg-gray-800" : "bg-white"} p-6 rounded-lg`}>
          <h1 className="text-center text-5xl mb-8" style={{ fontFamily: "Grandista, sans-serif" }} >
            Instagram
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input type="email" placeholder="Username or Email" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full px-4 py-4 border rounded-md focus:outline-none focus:ring ${theme === "dark" ? "border-gray-700 bg-gray-700 text-white focus:ring-blue-600" : "border-gray-300 bg-white text-black focus:ring-blue-300"}`} required />
            </div>
            <div>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full px-4 py-4 border rounded-md focus:outline-none focus:ring ${theme === "dark" ? "border-gray-700 bg-gray-700 text-white focus:ring-blue-600" : "border-gray-300 bg-white text-black focus:ring-blue-300"}`} required />
            </div>
            <button type="submit" className={`w-full py-4 font-semibold rounded-md ${theme === "dark" ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"}`} disabled={loading} >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
            <div className="mt-4 text-center text-sm">
              <a href="http:#" className={`${theme === "dark" ? "text-blue-400 hover:underline" : "text-blue-500 hover:underline"}`} >
                Forgot Password?
              </a>
            </div>
            <div className="m-6 text-center text-sm">
              Dont have an account?{" "}
              <a href="/signup" className={`${theme === "dark" ? "text-blue-400 hover:underline" : "text-blue-500 hover:underline"}`} >
                Sign up
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
          </form>
          {/* {error && <p className="text-red-500 text-center mt-2">{error}</p>} */}
          <div className="mt-6 text-center">
            <button onClick={handleToggleTheme} className={`px-4 py-2 rounded-md ${theme === "dark" ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-300 text-black hover:bg-gray-400"}`} >
              Toggle Theme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
