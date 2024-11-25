"use client"
import AdminHeader from '@/components/Admin/AdminHeader'
import React, { useEffect, useRef, useState } from 'react'
import FormPicsShow from './FormPicsShow'
import { useProductCategory } from '@/store/ProductCategoryStore'
import useCreateProduct from './useCreateProduct'
import ProductCreateStatus from './EProductCreateStatus'
import Alert from '@/components/Alert/Alert'
import AlertStatus from '@/components/Alert/EAlertStatus'

/// to create product developer used customer hook
//but more  easy  with  reducer hook 

const page  = () => {

  //pic array
  const [upics,setuPics] = useState<string[]>([]);

  //pic update form child
  const picArrayUpdater = (data : string[]) =>{
    setuPics(data);
  }

 //fetch product cat -> store
  const getProductCategory = useProductCategory();
  useEffect(()=>{
       //no check if load because admin may change product category values 
     
        getProductCategory.getValues();
     
    
  },[]);


  //form ref
  const productHeader = useRef<HTMLInputElement>();
  const productCategory = useRef<HTMLSelectElement | null>(null);
  const brandName = useRef<HTMLInputElement>();
  const price = useRef<HTMLInputElement>();
  const starts = useRef<HTMLInputElement>(); 
  const availableCount = useRef<HTMLInputElement>();


  //create product hook
  const {isUploadLoading,createProduct,actionCompleteStatus,setActionCompleteStatus} = useCreateProduct(
    {
      productCatId : productCategory.current? productCategory.current.value : null,
      header : productHeader.current ? productHeader.current.value : null,
      brandName : brandName.current ? brandName.current.value : null,
      imgs : upics,
      stars : Number(starts.current ? starts.current.value : 0),
      price : Number(price.current ? price.current.value : 0),
      availableCount : Number(availableCount.current ? availableCount.current.value : 0)
    }
  );


  

    //For AltetValue
    const [altertMsg,setAlertMsg] = useState<string>("init");
    const [altetStatus,setAlertStatus] = useState<AlertStatus>(AlertStatus.HIDDEN)

    //handel form after complete
    useEffect(()=>{

      if(actionCompleteStatus === ProductCreateStatus.SUCCES){
        //clear form
        productHeader.current.value = "";
        brandName.current.value = "";
        setuPics([]) //pic array
        starts.current.checked = false ;
        price.current.value = "";
        availableCount.current.value = "";
       
        setAlertMsg("Product created successfuly")
        setAlertStatus(AlertStatus.SUCCESS)
        
      }
      
      if(actionCompleteStatus === ProductCreateStatus.FAIL){
        console.log("erro");
        
        setAlertMsg("Try again another request")
        setAlertStatus(AlertStatus.FAIL)
        

        setActionCompleteStatus(ProductCreateStatus.DEFAULT)
      }
      
      
    },[actionCompleteStatus])
  

  return (
    <>
        <AdminHeader />

        <Alert messageInComing={altertMsg} statusInComing={altetStatus} />
        {/* form */}
        <div className='flex justify-center'>
          <div className='m-2 p-10 gap-4 rounded-xl grid grid-cols-2 bg-slate-100'>
            
            {/* product header start */}
            <div className='pt-1'>
              <p className='app_font'>Product header</p>
            </div>
            <div>
              <div className="max-w-sm space-y-3">
                <input
                  ref={productHeader}
                  type="text"
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder=""
                />
              </div>
            </div>
            {/* product header end */}


            {/* product cat start */}
            <div className='pt-1'>
              <p className='app_font'>Product category</p>
            </div>
            <div>

              <select ref={productCategory} className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                {
                    getProductCategory.isDataSet?getProductCategory.values.map( (value:any,index) => {
                      return <option key={index} value={value.product_cat_id} >{value.product_cat}</option> 
                  }):""
                }
              </select>

            </div>
            {/* product cat end */}



             {/* product header start */}
             <div className='pt-1'>
              <p className='app_font'>Brand name</p>
            </div>
            <div>
              <div className="max-w-sm space-y-3">
                <input
                  ref={brandName}
                  type="text"
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder=""
                />
              </div>
            </div>
            {/* product header end */}

            {/* product header start */}
            <div className='pt-1'>
              <p className='app_font'>Price</p>
            </div>
            <div>
              <div className="max-w-sm space-y-3">
                <input
                  ref={price}
                  type="number"
                  pattern="^\d*(\.\d{0,2})?$"
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder=""
                />
              </div>
            </div>
            {/* product header end */}
            

             {/* product header start */}
             <div className='pt-1'>
              <p className='app_font'>Stars</p>
            </div>
            <div>
             
              <div className="flex flex-c-ol gap-3">
                    <div className="flex">
                      <input
                        type="radio"
                        name="hs-radio-vertical-group"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-radio-vertical-group-1"
                        value={1}
                        ref={starts}
                        
                      />
                      <label
                        htmlFor="hs-radio-vertical-group-1"
                        className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                      >
                        1
                      </label>
                    </div>
                    <div className="flex">
                      <input
                        type="radio"
                        name="hs-radio-vertical-group"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-radio-vertical-group-2"
                        value={2}
                        ref={starts}
                      />
                      <label
                        htmlFor="hs-radio-vertical-group-2"
                        className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                      >
                        2
                      </label>
                    </div>
                    <div className="flex">
                      <input
                        type="radio"
                        name="hs-radio-vertical-group"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-radio-vertical-group-3"
                        value={3}
                        ref={starts}
                      />
                      <label
                        htmlFor="hs-radio-vertical-group-3"
                        className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                      >
                        3
                      </label>
                    </div>

                    <div className="flex">
                      <input
                        type="radio"
                        name="hs-radio-vertical-group"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-radio-vertical-group-3"
                        value={4}
                        ref={starts}
                      />
                      <label
                        htmlFor="hs-radio-vertical-group-3"
                        className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                      >
                        4
                      </label>
                    </div>

                    <div className="flex">
                      <input
                        type="radio"
                        name="hs-radio-vertical-group"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-radio-vertical-group-3"
                        value={5}
                        ref={starts}
                      />
                      <label
                        htmlFor="hs-radio-vertical-group-3"
                        className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                      >
                        5
                      </label>
                    </div>
              </div>
            
            </div>
            {/* product header end */}
            

            {/* product header start */}
            <div className='pt-1'>
              <p className='app_font'>Available count</p>
            </div>
            <div>
              <div className="max-w-sm space-y-3">
                <input
                  ref={availableCount}
                  type="number"
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder=""
                  min={1}
                />
              </div>
            </div>
            {/* product header end */}


                <div className=' col-span-2'>
                  {/* img cart */}
                  <FormPicsShow setuPics={picArrayUpdater} />

                </div>

                <div className=' col-span-2'>

                            {/* form submit btn */}
                  <div className='flex justify-center'>
                      <div className='m-1 p-1 gap-4 rounded-xl grid grid-cols-2 bg-slate-100'>

                        {/* clear btn      */}
                        <button
                                      
                          type="button"
                          className="py-3 px-4 h-12 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none"
                          >
                          Clear
                        </button>

                        {/* update btu */}
                        <button
                             onClick={createProduct}     
                        type="button"
                        className="py-3 px-4 h-12 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:bg-green-600 disabled:opacity-50 disabled:pointer-events-none"
                        >
                        Update
                        </button>     

                      </div>
                  </div>

                </div>
          </div>
        </div>

        

       
    </>
  )
}

export default page