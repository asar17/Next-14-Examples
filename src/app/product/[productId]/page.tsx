'use client'
import { useRouter } from 'next/navigation'
type ParamsProps = {
    params:{
        productId: string;
    }
}



export default function roductDetails ({params}:ParamsProps) {
    const router= useRouter();
    const viewProductDetails = () =>{
        router.push(`/product/${params.productId}/catagory/dog/review/400`)
    }
    return(
        <div>
           Product Details {params.productId} 
           <button onClick={viewProductDetails}>View Product</button>
        </div>
    )
}
// /product/${params.productId}/catagoy/dog/review/400`
// '/product/3/catagory/dog/review/400'