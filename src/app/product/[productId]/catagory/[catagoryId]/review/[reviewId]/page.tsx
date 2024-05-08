import {notFound} from 'next/navigation'
import { Metadata } from 'next';
type ParamsProps ={
    params:{
        productId: string;
        catagoryId: string;
        reviewId: string;
    }
}
export const generateMetadata = async({params}:ParamsProps):Promise<Metadata> => {
    const title= await  new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(`your product is : ${params.productId} from catagory: ${params.catagoryId}`)
        },1000)

    })
    return{
        title:`${title}`
    }

}
export default function ToProductReviews ({params}:ParamsProps){
        if(parseInt(params.reviewId)>500){
            return(
            notFound()
            )
        }
        return(
            <div>
               This is Review {params.reviewId} for {params.productId} catagory {params.catagoryId}
            </div>
        )

    
  
}