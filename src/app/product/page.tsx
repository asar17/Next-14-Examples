'use client'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
export default function Product (){
    const router = useRouter();
    const handleClick = () =>{
        router.push("/")
    }
    return(
        <div>
            <h1>product details: will teach us dynamic routes</h1>
            <p>
                <Link href="">
                 product one
                </Link>
            </p>
            <a href="">product two</a><br/>
            <a href="">product three</a>
            <button onClick={handleClick}>home page</button>
        </div>
    )
}