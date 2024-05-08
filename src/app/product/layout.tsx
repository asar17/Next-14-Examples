'use client';
import {useState} from 'react'
export default function ProductLayout ({children}:{children:React.ReactNode}) {
    const [input,setInput]= useState("athar")
    if(input === 'ath'){
        throw new Error("not athar")
    }
return(
    <>
    <h1>hello layout {input}</h1>
    {children}
    </>
)
}