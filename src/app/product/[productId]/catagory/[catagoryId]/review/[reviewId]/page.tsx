export default function ToProductReviews ({params}:{
    params:{
        productId: string;
        catagoryId: string;
        reviewId: string;
    }
}){

        return(
            <div>
               This is Review {params.reviewId} for {params.productId} catagory {params.catagoryId}
            </div>
        )

    
  
}