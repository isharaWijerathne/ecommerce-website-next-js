import React from 'react'

function Cart() {
   let number : number = 4;
   let index : number = 0;
   const startRate = []
   while(index < number)
    {
        startRate.push(<i className='fa-solid fa-star m-1' style={{color: '#ff151c'}}></i>)
        index++;
    }
  return (
   <>
        <div className='m-5 w-[300px] h-[500px] bg-yellow-100 rounded-[15px] shadow-xl'>
            <p className='p-5 text-center font-extrabold '>This Is Product Name</p>
            <div className='flex justify-center'>
                <img className='w-[250px] h-[250px] rounded-[15px]' src="https://bata.lk/wp-content/uploads/2023/09/5-side.jpg" alt="demo_image" />
            </div>
            <h1 className='text-center mt-5 font-extrabold text-red-500'>USD 350.00</h1>
            <p className='text-violet-500 font-bold text-center m-2'>adidas</p>
            
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