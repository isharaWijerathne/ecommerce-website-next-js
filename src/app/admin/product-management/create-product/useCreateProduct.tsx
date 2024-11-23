import axios from "axios";
import { useEffect, useState } from "react"

interface IuseCreateProduct {
    productCatId : string,
    header : string,
    brandName : string,
    imgs : string[],
    stars : number,
    price : number,
    availableCount :number
}


const useCreateProduct = ({productCatId,header,brandName,imgs,stars,price,availableCount}:IuseCreateProduct) =>{

        const [isUploadLoading,setUploadLoading] = useState<boolean>(false);

        
        //request body
        const reqBody = {
            "product_cat_id" : productCatId,
            "header" : header,
            "brand_name" : brandName,
            "imgs" :imgs,
            "stars" : stars,
            "price" : price,
            "available_count" : availableCount
        }

        async function  createProduct(){
            setUploadLoading(true)
            await axios.post(process.env.NEXT_PUBLIC_API_PATH + "/product",reqBody)
                .then((res) =>{
                    console.log(res);
                    setUploadLoading(false);
                })
                .catch((err : any) =>{
                    console.log(err.message);
                    setUploadLoading(false);
                    
                })
            
        }


        
        
        

    return {isUploadLoading,createProduct}
}


export default useCreateProduct