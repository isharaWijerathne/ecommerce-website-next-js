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
                    <p className='text-right mb-3 text-red-400 text-[50px] font-extrabold'>Dashboard</p>

                    <div className='flex justify-center gap-5'>
                        <div className='w-[150px] h-[150px] bg-white rounded-[10px] px-1'>
                            <p className='text-[15px] font-semibold'>Total Orders</p>
                            <p className='text-[65px] font-extrabold text-center'>25</p>
                        </div>

                        <div className='w-[150px] h-[150px] bg-white rounded-[10px] px-1'>
                            <p className='text-[15px] font-semibold'>Pending Orders</p>
                            <p className='text-[65px] font-extrabold text-center'>1</p>
                        </div>

                        <div className='w-[150px] h-[150px] bg-white rounded-[10px] px-1'>
                            <p className='text-[15px] font-semibold'>Complete Orders</p>
                            <p className='text-[65px] font-extrabold text-center'>20</p>
                        </div>

                        <div className='w-[150px] h-[150px] bg-white rounded-[10px] px-1'>
                            <p className='text-[15px] font-semibold'>Cancel Orders</p>
                            <p className='text-[65px] font-extrabold text-center'>4</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default page