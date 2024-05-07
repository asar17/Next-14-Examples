export default function roductDetails ({params}:{
    params:{
        productId: string;
    }
}) {
    return(
        <div>
           Product Details {params.productId}
        </div>
    )
}