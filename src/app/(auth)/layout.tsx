'use client'
import { usePathname } from "next/navigation"
import Link from 'next/link'
import './styles.css'

const links = [
    {name:'register',href:'/register'},
    {name:'forget password',href:'/forget-pass'},
    {name:'login',href:'/login'},
]
export default function AuthLayout ({children}:{children:React.ReactNode}){
  const pathName = usePathname();

    return(
        <>
              {links.map((link)=>{
            const isActive = pathName.startsWith(link.href)
            return(
                <Link 
                    href={link.href} 
                    key={link.name}
                    className={isActive ? "text-3xl font-bold": "text-2xl text-blue"}
                >{link.name}</Link>
            )
           })}
          {children}
          <h1  className="text-4xl">hello layout from auth folden</h1>
        </>
    )

}