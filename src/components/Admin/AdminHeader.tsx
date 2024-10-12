import React from 'react'
import TailwindCssDropDown from '../TailwindCssDropDown'

function AdminHeader() {
  return (
   <>
        <div className='m-3'>
            <ul className='flex justify-center gap-8'>
                <TailwindCssDropDown 
                dropDownName='Order Management' 
                Textvalues={["Order List",'Order Change State']}
                links={['/admin/order-management/order-list','/admin/order-management/order-change-state']}
                />    

                <TailwindCssDropDown 
                dropDownName='Product Management' 
                Textvalues={["Create Product",'Edit Product','Change Product Status']}
                links={['/admin/product-management/create-product','/admin/product-management/edit-product',"/admin/product-management/change-product-status"]}
                />    

                <TailwindCssDropDown 
                dropDownName='User Management' 
                Textvalues={["User List",'User Status']}
                links={['/admin/user-management/user-list','/admin/user-management/user-status']}
                />  

                <TailwindCssDropDown 
                dropDownName='Admin Management' 
                Textvalues={["Create New Admin",'Change Admin Details']}
                links={['/admin/admin-account/create-new-admin','/admin/admin-account/change-admin-details']}
                />    

                <button className='px-5 py-2.5  text-[13px] bg-blue-700  text-white rounded-lg '>Logout</button>
            </ul>
        </div>

        <center> 
        
        </center>
               
   </>
  )
}

export default AdminHeader