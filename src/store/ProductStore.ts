import axios from "axios";
import { create } from "zustand"



interface IProductShow{
    isDataSet : boolean,
    values : string[],
    getData(productCatId:string ,priceLevel:number,page :number) : void
}

export const useProductShow = create<IProductShow>(( (set) => ({
    isDataSet : false,
    values : ["","",""],
    getData : async (productCatId = "any", priceLevel = 100,page = 1) => {

        set({isDataSet : false})
        await axios.get(process.env.NEXT_PUBLIC_API_PATH + `/product/search?id=${productCatId}&price=${priceLevel}&page=${page}`)
            .then((data) =>{

                const _api_data = data.data.data;
                
                //set data array
                set({values : _api_data});

                //set isdataSet -> true
                set({isDataSet : true})
                
            })
            .catch((err : any) =>{
                //todo --> handle error
            })
    },
}) ));