import HeaderMain from '@/components/HeaderMain'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
        <HeaderMain />
        
        <div className='flex justify-center mt-20'>
           <div className='h-96 w-[450px] bg-violet-600 rounded-[15px] shadow-2xl'>
            <p className='m-3 font-extrabold text-green-400 text-2xl'>Sing In</p>

            <p className='text-white font-extralight m-3'>Sing in using social network:</p>
            <div className='flex justify-center space-x-5'>

                <div className='flex justify-center pt-2  w-[200px] h-10 bg-white rounded-xl  hover:bg-blue-400'>
                    <i className="fa-brands fa-facebook" style={{color: "#0c41fa"}}></i>
                    <p className=' text-sm ml-2'>Login with Facebook</p>
                </div>

                <div className='flex justify-center pt-2 w-[200px] h-10 bg-white rounded-xl  hover:bg-red-200'>
                    <i className="fa-brands fa-google" style = {{color: "#fe161c"}}></i>
                    <p className=' text-sm ml-2'>Login with Facebook</p>
                </div>
                
           </div>  

           <p className='text-white font-extralight m-3'>Sign in using Email address:</p>
           
           <div className='flex flex-col  items-center gap-3  w-auto'>

                <div className='flex justify-center pt-2  w-[300px] h-10'>
                    <input type='text' placeholder='Email Address' className=' text-sm ml-2 w-[450px] border-2 rounded-[8px] p-2 '/>
                </div>

                <div className='flex justify-center pt-2  w-[300px] h-10'>
                    <input type='Password' placeholder='Password' className=' text-sm ml-2 w-[450px] border-2 rounded-[8px] p-2 '/>
                </div>

                <div className='flex justify-center pt-2  w-[300px] h-10'>
                    <button className='w-36 bg-green-400 rounded-[8px] text-white font-extrabold hover:bg-green-200 '>Sign in</button>
                </div>

                <div className='flex justify-center pt-2  w-[300px] h-10'>
                    <Link href="/auth" className=' text-blue-500 font-[15px] text-[15px] hover:text-yellow-50'>already I have an account</Link>
                </div>


        

           </div>  
           </div> 

          
        </div>
    </>
  )
}

export default page