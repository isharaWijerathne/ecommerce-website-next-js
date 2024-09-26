import Link from 'next/link'
import React from 'react'

function UserSideNav() {
  return (
    <>
        
        <div className='flex  justify-center  flex-col'>
            <Link href="/user/dashboard" className=' w-[250px] h-[50px] bg-green-400 m-2 rounded-[15px] border-2 border-white shadow-lg hover:bg-green-300 '>
                <p className='text-center mt-2 text-white font-extrabold'>Dashboard</p>
            </Link>
            <Link href='/user/profile' className=' w-[250px] h-[50px] bg-green-400 m-2 rounded-[15px] border-2 border-white shadow-lg hover:bg-green-300 '>
                <p className='text-center mt-2 text-white font-extrabold'>Profile</p>
            </Link>
            <Link href="/user/my-orders" className=' w-[250px] h-[50px] bg-green-400 m-2 rounded-[15px] border-2 border-white shadow-lg hover:bg-green-300 '>
                <p className='text-center mt-2 text-white font-extrabold'>My Orders</p>
            </Link>
            <div className=' w-[250px] h-[50px] bg-green-400 m-2 rounded-[15px] border-2 border-white shadow-lg hover:bg-green-300 '>
                <p className='text-center mt-2 text-white font-extrabold'>Log Out</p>
            </div>
        </div>
    </>
  )
}

export default UserSideNav