'use client'
import './styles.css'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {useState} from 'react'
export default function BlogLayout ({children}:{children:React.ReactNode}){
    const links = [
        {name:'first',href:'/blog/first'},
        {name:'second',href:'/blog/second'},
    ]
    const pathName= usePathname();
    const [input,setInput]=useState("")
    if(input === 'athar'){
        throw new Error('Name should\'t be athar')
    }
    return(
        <>
        <input value={input} onChange={(e)=>setInput(e.target.value)}/>
        {links.map((link)=>{
            const isActive= pathName.startsWith(link.href)
            return(
                <Link 
                    href={link.href} 
                    key={link.name} 
                    className={isActive? "font-bold text-3xl":"text-blue text-xl"}
                >
                    {link.name}
                </Link>
            )
        })}
          {children}
          <h2>hello from layout</h2>
        </>
    )

}