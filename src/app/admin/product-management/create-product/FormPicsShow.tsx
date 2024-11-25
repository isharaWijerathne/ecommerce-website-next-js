"use client" 
import React, { useEffect, useRef, useState } from 'react'

interface IFormPicsShow {
    setuPics(data : string []) : any
}

const FormPicsShow = ({setuPics}:IFormPicsShow) =>{

    const [pics,setPics] = useState<string[]>([]);
    const [picsForParent,setpicsForParent] = useState<string[]>([]);


    //input element
    const picInputEle = useRef<HTMLInputElement>();

    //pic remove from array function
    function picRemove(indexfunction : number){

    
        setPics( prevoiusArray => prevoiusArray.filter( (value,_index) =>{
            let currentIndex = 0;
            currentIndex += _index;

            return currentIndex != indexfunction ? value : null
        }))

    }

    //pic add to array function
    function picAdd(){
       picInputEle.current.value != "" ? setPics([...pics,String(picInputEle.current.value)]) : null

       //clear form
       picInputEle.current.value = "";

        pics.map((x =>{console.log(x);
        }))
     
    }

    //update parent
    useEffect(() =>{
        setuPics(pics);
    },[pics])

    useEffect(()=>{
      console.log(picInputEle.current.value);
      
    },[pics]);

  return (
    <>
         <div className='flex justify-center'>
          <div className='m-2 p-10 gap-4 rounded-xl grid grid-cols-3 bg-slate-100'>

            {/* fist row start */}
            <div className='pt-1'>
              <p className='app_font'>Image url</p>
            </div>

            <div>
              <div className="max-w-sm space-y-3">
                <input
                    ref={picInputEle}
                  type="text"
                  className="py-3  px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder=""
                />
              </div>
            </div>

            <div className='flex justify-end'>

              <button
                onClick={picAdd}
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none"
              >
                Add image
              </button>

            </div>
            {/* end row start */}
             
            {/* row img-list start */}


            {pics.map((value,index) =>{
                return <div key={index}>
                        <div>
                        <p className='app_font'>{index + 1}</p>
                        </div>

                        <div>
                            <img className="w-56 h-auto" src={String(value)} alt="..." />
                        </div>

                        <div className='flex justify-end'>
                            <button
                                onClick={() =>{ picRemove(index) }}
                                type="button"
                                className="py-3 px-4 h-12 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Remove
                            </button>
                        </div>
                        </div>
                   
                        
                
                   
                
               ;
            })}

              


            {/* row img-list end */}
          </div>
        </div>
    </>
  )
}

export default FormPicsShow