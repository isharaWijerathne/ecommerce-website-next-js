import React from 'react'

function SearchBar() {
  return (
    <>
        <div className='flex justify-around items-center gap-5 w-[600px] h-14 rounded-[5px] mt-8 bg-lime-300'>
            <select className='h-[30px] bg-white rounded-[5px] p-1' name="cars" id="cars">
                <option value="Adidus">Volvo</option>
                <option value="Jordan">Saab</option>
                <option value="Guchi">Mercedes</option>
                <option value="BSI">Audi</option>
            </select>

            
            <div className='relative w-[250px] flex justify-center'>
                <input className=' bg-white mb-4 w-[240px]' type="range"/>
                <p className=' absolute  top-5 left-0  text-slate-600 font-semibold'>(min)</p>
                <p className=' absolute top-5 left-[115px]  text-slate-600 font-semibold '>$ 630</p>
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