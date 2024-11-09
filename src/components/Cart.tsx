import React from 'react'


interface ICart {
    header : string,
    product_brand : string,
    is_discount_available : boolean,
    discount_presentage : number
    start_cout : number,
    price : number,
    imgURL : string,
}

function Cart({header,product_brand,is_discount_available,discount_presentage,start_cout,price,imgURL}:ICart) {
      
   let number : number = start_cout;
   let index : number = 0;
   const startRate = []
   while(index < number)
    {
        startRate.push(<i className='fa-solid fa-star m-1' style={{color: '#ff151c'}}></i>)
        index++;
    }
  return (
   <>
        <div className='relative  m-5 w-[300px] h-[500px] bg-yellow-100 rounded-[15px] shadow-xl'>
            
            {
                is_discount_available ?
                    <div className='w-10 h-10 bg-emerald-400 p-1 rounded-tl-lg absolute'>
                        <p className=' text-white font-extrabold text-[12px]'>{discount_presentage} % off</p>
                    </div>
                  :
                   ''
            }
            <p className='p-5 text-center font-extrabold '>{header}</p>
            <div className='flex justify-center'>
                <img className='w-[250px] h-[250px] rounded-[15px]' src={imgURL} alt="demo_image" />
            </div>
            <h1 className='text-center mt-5 font-extrabold text-red-500'>USD {price}</h1>
            <p className='text-violet-500 font-bold text-center m-2'>{product_brand}</p>
            
            <div className='flex justify-center mt-2'>
                {startRate}
            </div>

            <div className='flex justify-center mt-2'>
                <button className='w-[150px] h-[40px] bg-violet-400 rounded-[15px] shadow-xl hover:bg-violet-200 font-extrabold'>Add To Cart</button>
            </div>
        </div>
   </>
  )
}

export default Cart