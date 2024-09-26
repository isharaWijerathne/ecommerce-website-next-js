import HeaderMain from '@/components/HeaderMain'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
   <>
    <HeaderMain />
        
        <div className='flex justify-center mt-20'>
           <div className='h-[200px] w-[450px] bg-violet-600 rounded-[15px] shadow-2xl'>

            <p className='m-3 font-extrabold text-green-400 text-2xl'>Recovery Your Password</p>
            <p className='text-white font-extralight m-3'>Enter your account email</p>

                <div className='flex flex-col  items-center gap-3  w-auto'>

                        <div className='flex justify-center pt-2  w-[300px] h-10'>
                            <input type='text' placeholder='Email Address' className=' text-sm ml-2 w-[450px] border-2 rounded-[8px] p-2 '/>
                        </div>

                        <div className='flex justify-center pt-2  w-[300px] h-10'>
                            <button className='w-36 bg-green-400 rounded-[8px] text-white font-extrabold hover:bg-green-200 '>Recovery</button>
                        </div>
                </div> 

           </div> 
        </div>
   </>
  )
}


export default page