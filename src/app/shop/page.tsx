"use client"
import Cart from '@/components/Cart'
import HeaderMain from '@/components/HeaderMain'
import Loader from '@/components/Loader/Loader'
import SearchBar from '@/components/SearchBar'
import { useProductShow } from '@/store/ProductStore'
import React, { useEffect } from 'react'

function page() {

  const productStore = useProductShow();

  useEffect(  () =>{
    productStore.getData("any",100,1)
  },[])

  return (
   <div className='body_main'>
      <HeaderMain />

      <div className='flex  justify-center'>
        <SearchBar />
      </div>

       <div className='flex   justify-center content-center mt-10'>   
            <div className='grid grid-cols-4 '>
                 {
                    productStore.isDataSet?
                      productStore.values.map( (value : any,index : number) =>{


                        //check discount
                        let _category_discount :number = value.product_cat[0].discout_percentage;
                        let _product_discount: number = value.product_offers ? value.product_offers.discount : 0

                        let available_offer = _product_discount == 0 ? _category_discount : _product_discount;
                        let is_discount_available = !(_category_discount == 0 && _product_discount ==0)
                        



                        return <div key={index} > <Cart 
                          is_discount_available={is_discount_available}
                         discount_presentage={available_offer} 
                         header={value.header}
                         product_brand={value.brand_name}
                         start_cout={value.stars}
                         price={value.price}
                         imgURL={value.img_location[0]}
                         
                         />
                         </div>
                      })
                    :  <Loader />
                 }
            </div>
       </div>
        
   </div>
  )
}

export default page