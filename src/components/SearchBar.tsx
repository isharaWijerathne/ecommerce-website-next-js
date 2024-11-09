"use client"
import { useProductCategory } from '@/store/ProductCategoryStore';
import React, { useEffect, useRef, useState } from 'react'

function SearchBar() {

    //value changer
    const[price,setPrice] = useState<string>("");
    
    //range bard
    const value_bar = useRef<HTMLInputElement>();

    //value bar function
    const valueBarChanger = () => {
        setPrice(value_bar.current.value)  
    }


    //fetch produt cat
    const getProductCategory = useProductCategory();

    useEffect( () => {
        if(!getProductCategory.isDataSet){
            getProductCategory.getValues();
        }
    },[

    ])


  return (
    <>
        <div className='flex justify-around items-center gap-5 w-[600px] h-14 rounded-[5px] mt-8 bg-lime-300'>
            <select className='h-[30px] bg-white rounded-[5px] p-1' name="cars" id="cars">
                <option value="any">any</option>
                {
                        getProductCategory.isDataSet?getProductCategory.values.map( (value:any,index) => {
                            return <option key={index} value="BSI">{value.product_cat}</option> 
                        }):""
                }
            </select>

            
            <div className='relative w-[250px] flex justify-center'>
                <input ref={value_bar} onChange={valueBarChanger} className=' bg-white mb-4 w-[240px]' type="range"/>
                <p className=' absolute  top-5 left-0  text-slate-600 font-semibold'>(min)</p>
                <p className=' absolute top-5 left-[115px]  text-slate-600 font-semibold '>$ {price}</p>
                <p className=' absolute top-5 left-[200px]  text-slate-600 font-semibold '>(max)</p>
            </div>
            <div className='flex justify-center items-center w-8 h-8 rounded-[100%]  bg-orange-400 hover:bg-violet-400'>
                <i className="fa-solid fa-magnifying-glass" style={{color: "#ffffff"}}></i>
            </div>
        </div>

    </>
  )
}

export default SearchBar