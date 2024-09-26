import HeaderMain from '@/components/HeaderMain'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
   <>
    <HeaderMain />
        
        <div className='flex justify-center mt-20'>
           <div className='h-[300px] w-[450px] bg-violet-600 rounded-[15px] shadow-2xl'>

            <p className='m-3 font-extrabold text-green-400 text-2xl'>Sing Up</p>
            <p className='text-white font-extralight m-3'>Sign up using Email address:</p>

                <div className='flex flex-col  items-center gap-3  w-auto'>

                        <div className='flex justify-center pt-2  w-[300px] h-10'>
                            <input type='text' placeholder='Email Address' className=' text-sm ml-2 w-[450px] border-2 rounded-[8px] p-2 '/>
                        </div>

                        <div className='flex justify-center pt-2  w-[300px] h-10'>
                            <input type='Password' placeholder='Password' className=' text-sm ml-2 w-[450px] border-2 rounded-[8px] p-2 '/>
                        </div>

                        <div className='flex justify-center pt-2  w-[300px] h-10'>
                            <button className='w-36 bg-green-400 rounded-[8px] text-white font-extrabold hover:bg-green-200 '>Sign Up</button>
                        </div>

                        <div className='flex justify-center pt-2  gap-2 w-[350px] h-10'>
                        <Link href="/password-reset" className=' text-blue-500 font-[15px] text-[12px] hover:text-yellow-50'>forgot your password</Link>
                        <p className='text-white'>|</p>
                        <Link href="/join-now" className=' text-blue-500 font-[15px] text-[12px] hover:text-yellow-50'>create new account</Link>
                        </div>
                </div> 

           </div> 
        </div>
   </>
  )
}


export default page