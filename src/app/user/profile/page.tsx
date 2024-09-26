import HeaderMain from '@/components/HeaderMain'
import UserSideNav from '@/components/UserSideNav'
import React from 'react'

function page() {
  return (
    <>
        <HeaderMain />
       

        <div className='flex justify-center mt-5'>

            <div className='grid grid-cols-4'>

                <div>
                    <UserSideNav />
                </div>

                <div className='col-span-3 h-[360px] m-2 rounded-[15px] p-3'>
                    <p className='text-right mb-3 text-red-400 text-[50px] font-extrabold'>Profile</p>
                  
                        <div className='grid grid-cols-4'>
                            <div className='col-span-3'>
                               <div className='bg-white rounded-[15px] p-1'>
                                    <div className='grid grid-cols-2 m-2 '>
                                        <p className='text-black font-extrabold'>Name</p>
                                        <p>Damindu Ishara</p>
                                    </div>
                                    <div className='grid grid-cols-2 m-2 '>
                                        <p className='text-black font-extrabold'>E-Mail Address</p>
                                        <p>ishara@gmail.com</p>
                                    </div>
                                    <div className='grid grid-cols-2 m-2 '>
                                        <p className='text-black font-extrabold'>Mail Address</p>
                                        <p>55/1c,Temple Road,Bandarawela</p>
                                    </div>
                               </div>
                                <div className='grid gap-2 grid-cols-3 mt-10 '>
                                    <button className='bg-yellow-400 text-white font-extrabold rounded-[8px] p-1 hover:bg-yellow-200'>Edit my information</button>
                                    <button className='bg-blue-400 text-white font-extrabold rounded-[8px] p-1 hover:bg-blue-200'>Change password</button>
                                    <button className='bg-red-400 text-white font-extrabold rounded-[8px] p-1 hover:bg-red-200'>Edit my information</button>
                                    
                                </div>
                            </div>
                            <div className=' m-5'>
                               <div className='bg-white w-full h-[150px] rounded-[15px] flex justify-center '>
                                    <img className='w-[100px] h-[100px] mt-[25px] border-black border-2 rounded-[100%]'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjhf8sII9vcd0lTn_zFdi25zae0qRVOm1Z2CD9Lk1Jc8WWv3Ua80yGbDkWM86eba_jRA&usqp=CAU" alt="pro" />
                               </div>
                            </div>

                        </div>
                  
                </div>

            </div>
        </div>
    </>
  )
}

export default page