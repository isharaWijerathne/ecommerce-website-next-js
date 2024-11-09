import axios from "axios";
import { create } from "zustand";

interface IProductCategory {
    isDataSet:boolean;
    values : string[],
    getValues():void;
}

export  const useProductCategory = create<IProductCategory>( (set) => ({
    values : [],
    isDataSet : false,
    getValues : async () =>{
        await axios.get(process.env.NEXT_PUBLIC_API_PATH + "product-cat/")
            .then((data) =>{
                set({values : data.data.data.product_categories})
                set({isDataSet : true})
            })
            .catch((err : any) =>{
               //todo -> handle error
                
            })
    }
}) )