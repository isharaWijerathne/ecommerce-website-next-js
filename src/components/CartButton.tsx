"use client"
import React, { useState ,useRef, HtmlHTMLAttributes } from 'react'

function CartButton() {


  return (
   <>
        <div className='btn_nav_r flex justify-center items-center relative'>
            <i className="fa-solid fa-cart-shopping fa-xl " style={{color: "#ffffff"}}></i>
            <div className='absolute  w-[30px] h-[30px] rounded-[100%] top-[-11px] right-[-16px] bg-yellow-300'>
                <p className='text-center font-bold'>1</p>
            </div>
        </div>
   </>
  )
}

export default CartButton