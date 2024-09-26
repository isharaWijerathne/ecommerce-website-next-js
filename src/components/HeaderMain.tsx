import React from 'react'
import CartButton from './CartButton'
import Link from 'next/link'

function HeaderMain() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        <div className='flex'>
            <div className=' w-full'>
                
            </div>

            <div className='w-full flex  space-x-[100px] justify-center p-5' >
                <Link href="/" className='btn_nav'>Home</Link>
                <Link href='/shop' className='btn_nav'>Shop</Link>
                <button className='btn_nav'>Offers</button>
                <Link href="/join-now" className='btn_nav'>Join Now</Link>
            </div>

            <div className=' flex w-full justify-center p-7 space-x-[50px]'>

                <CartButton />

                <Link href="/user/dashboard" className='btn_nav_r flex justify-center items-center '>
                    <i className="fa-solid fa-user fa-xl" style={{color: "#ffffff"}}></i>
                </Link>

            </div>
        </div>
        
    </>
    
  )
}

export default HeaderMain