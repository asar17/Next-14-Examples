import Link from 'next/link'
export default function Product (){
    return(
        <div>
            <h1>product details: will teach us dynamic routes</h1>
            <p>
                <Link href="/product/2/catagory/dog/review/300">
                 product one
                </Link>
            </p>
            <a href={`/product/2`}>product two</a><br/>
            <a href={`/product/3`}>product three</a>
        </div>
    )
}