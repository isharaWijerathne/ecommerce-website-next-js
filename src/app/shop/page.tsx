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
                <Cart 
                is_discount_available={true}
                 discount_presentage={6} 
                 header='sample Hear'
                 product_brand='produc band'
                 start_cout={5}
                 price={1250}
                 imgURL='https://bata.lk/wp-content/uploads/2023/09/5-side.jpg'
                 
                 />
            </div>
       </div>
        
   </>
  )
}

export default page