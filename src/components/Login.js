import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
    }
  return (
   <div>
      <Header/>
     <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
    </div>
    <form className='w-3/12 absolute p-12 text-white bg-black my-36 mx-auto right-0 left-0  bg-opacity-90'>
       <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In':'Sing Up'}</h1>
       {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-[#292929]'/>)}
       <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-[#292929]'/>
       <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-[#292929]'/>
       <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? 'Sign In':'Sing Up'}</button>
       <p className='font-bold cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix ? Sing Up Now' :'Already registered? Sign In Now.'}</p>
    </form>
   </div>
  )
}

export default Login;
