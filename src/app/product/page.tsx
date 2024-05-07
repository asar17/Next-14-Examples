export default function Product (){
    return(
        <div>
            <h1>product details: will teach us dynamic routes</h1>
            <a href={`/product/1/reviews/500`}>product one</a><br/>
            <a href={`/product/2`}>product two</a><br/>
            <a href={`/product/3`}>product three</a>
        </div>
    )
}