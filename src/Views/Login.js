import React, { useEffect } from 'react'
import Narrow from '../Common/Narrow'
import { Link } from 'react-router-dom'

export default function Login() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
    <div id="top" className='absolute top-0'></div>
    <div className='loginBg ' style={{minHeight:"100vh"}}>
      <Narrow>
        <div className='flex text-white flex-col pt-24 max-xl:pt-5 items-center'>
          <img src="https://html.fleexstudio.com/quad/assets/images/logo/logo1.png" alt="logo" className='w-2/12 max-xl:w-4/12 mx-auto' />
          <div className='my-3 text-lg'><Link to="/">Home</Link> &nbsp;{">"}&nbsp;<span className='font-semibold'>Login</span> </div>
          <div className='my-5 bg-white text-black w-6/12 max-xl:w-full rounded-md p-12 max-xl:p-5'>
              <div className='text-4xl font-bold'>Welcome Back</div>
              <div className='text-gray-500 my-2'>Please fill your email and password to sign in.</div>
              <form className='mt-10 mb-5'>
                <div  className='text-xl my-2 font-bold'><label htmlFor='email'>Email</label></div>
                <div className='text-xl my-2'><input className='w-full bg-[#F8F4FF] p-3 rounded-full' type='email' id='email' name="email" placeholder='Email Address'/></div>
                <div className='text-xl mt-5 mb-2 font-bold'><label htmlFor='password'>Password</label></div>
                <div className='text-xl my-2'><input type='password' className='w-full bg-[#F8F4FF] p-3 rounded-full' id="password" name="password" placeholder='Email Address'/></div>
                <button type='submit' className='my-5 bg-customPurple w-full p-3 rounded-full text-xl text-white'>Sign In</button>
              </form>
              <div className='text-center'>Don't have an account? <Link to= "/signup" className=' text-customPurple underline cursor-pointer font-semibold'>Sign Up Today</Link> </div>
              <div className='text-center  text-customPurple underline font-semibold my-2'>Forgot Password</div>
              <div className='flex items-center justify-between my-3 text-gray-500'><img src="https://html.fleexstudio.com/quad/assets/images/elements/line-img1.png" className=' inline' style={{width:"45%"}} />&nbsp;Or&nbsp;<img src="https://html.fleexstudio.com/quad/assets/images/elements/line-img1.png" className=' inline'  style={{width:"45%"}} /> </div>
              <button className='w-full flex items-center justify-center mb-3 bg-[#F8F4FF] p-3 rounded-full text-lg text-gray-700 font-semibold'><svg xmlns="http://www.w3.org/2000/svg" height="14" width="13.34375" viewBox="0 0 488 512" className='mx-3'><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>Sign Up with Google</button>
                            <button className='w-full flex items-center justify-center bg-[#F8F4FF] p-3 rounded-full text-lg text-gray-700 font-semibold'><svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512" className='mx-3'><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>Sign Up with Facebook</button>
          </div>
        </div>
      </Narrow>
    </div>
    </>
  )
}
