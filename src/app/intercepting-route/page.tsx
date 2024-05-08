import Link from 'next/link'
export default function InterceptingRoute (){
    return(
        <div>
            <h1>Intercepting Route</h1>
            <Link href="/intercepting-route/f1">
              folder one
            </Link><br/>
            <Link href="/about">
              about
            </Link>
        </div>
    )
}