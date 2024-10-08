import React from 'react'
import TailwindCssDropDown from '../TailwindCssDropDown'

function AdminHeader() {
  return (
   <>
        <div className='m-3'>
            <ul className='flex justify-center gap-8'>
                <TailwindCssDropDown 
                dropDownName='Product Management' 
                Textvalues={["Home",'about']}
                links={['/','about']}
                />    

                <TailwindCssDropDown 
                    dropDownName='Product Management' 
                    Textvalues={["Home",'about']}
                    links={['/','about']}
                />    

                <TailwindCssDropDown 
                    dropDownName='Product Management' 
                    Textvalues={["Home",'about']}
                    links={['/','about']}
                />    

                <TailwindCssDropDown 
                    dropDownName='Product Management' 
                    Textvalues={["Home",'about']}
                    links={['/','about']}
                />    
            </ul>
        </div>

        <center> 
        
        </center>
               
   </>
  )
}

export default AdminHeader