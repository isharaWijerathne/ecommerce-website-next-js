'use client'
import Link from 'next/link';
import React from 'react'


//componet inteface
// Text value ->get text fild form but
//links ->urls
interface IDropDownButoon 
{
    dropDownName :string,
    Textvalues : string[],
    links : string[]
}


const TailwindCssDropDown : React.FC<IDropDownButoon> = ({dropDownName,Textvalues,links}) => {

    const [isBtnClicked,setBtnClicked] = React.useState<boolean>(false);
    const dropDownDiv = React.useRef<HTMLDivElement>(null);

    //Btn clied function
    function btnClicked() : void 
    {
       isBtnClicked ? setBtnClicked(false) : setBtnClicked(true);
       
    }


  return (
    <>
                <button onClick={btnClicked}  id="dropdownHoverButton" className=" relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> {dropDownName} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>

                    
                        <div id="dropdownHover" ref={dropDownDiv}  className={ `top-10  right-[-5px]  absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700  ${isBtnClicked ? ' ' : ' hidden '} `  }>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                            
                            {
                                Textvalues.map((value,index) =>
                                    {
                                        return  <li key={index}>
                                                    <Link href={links[index]} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> {value} </Link>
                                                </li>
                                    })
                            }
                            </ul>
                        </div>

                </button>

    </>
  )
}

export default TailwindCssDropDown