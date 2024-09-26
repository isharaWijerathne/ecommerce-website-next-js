import HeaderMain from '@/components/HeaderMain'
import UserSideNav from '@/components/UserSideNav'
import React from 'react'

function page() {
  return (
    <>
        <HeaderMain />
       

        <div className='flex justify-center mt-5'>

            <div className='grid grid-cols-4'>

                <div>
                    <UserSideNav />
                </div>

                <div className='col-span-3 h-[360px] m-2 rounded-[15px] p-3'>
                    <p className='text-right mb-3 text-red-400 text-[50px] font-extrabold'>My Orders</p>
                  
                        <div className='grid grid-cols-1 bg-white p-2 m-1 rounded-[10px]'>
                           <table className='table-fixed border-2'>
                                <tr className='border-2'>
                                    <th>Order ID</th>
                                    <th>Product ID</th>
                                    <th>Product Details</th>
                                    <th>Orded Item Count</th>
                                    <th>Total Value</th>
                                    <th>Order Status</th>
                                </tr>

                                <tr className='border-2'>
                                    <td>Order ID</td>
                                    <td>Product ID</td>
                                    <td>Product Details</td>
                                    <td>Orded Item Count</td>
                                    <td>Total Value</td>
                                    <td>Order Status</td>
                                </tr>
                           </table>
                        </div>

                        <div>
                            <button className='p-1 m-1 w-[30px] bg-blue-400 text-white font-extrabold rounded-[5px] hover:bg-blue-300'>{"<"}</button>
                            <button className='p-1 m-1 w-[30px] bg-blue-400 text-white font-extrabold rounded-[5px] hover:bg-blue-300 '>{">"}</button>
                        </div>
                  
                </div>

            </div>
        </div>
    </>
  )
}

export default page