'use client'
export default function InterParError ({error}:{error:Error}){
    return(
        <div>
            {error.message}
        </div>
    )
}