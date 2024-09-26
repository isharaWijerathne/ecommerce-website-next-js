import Cart from '@/components/Cart'
import HeaderMain from '@/components/HeaderMain'
import SearchBar from '@/components/SearchBar'
import React from 'react'

function page() {
  return (
   <>
      <HeaderMain />

      <div className='flex  justify-center'>
        <SearchBar />
      </div>

       <div className='flex   justify-center content-center mt-10'>   
            <div className='grid grid-cols-4 '>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </div>
       </div>
        
   </>
  )
}

export default page