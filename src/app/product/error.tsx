'use client'
export default function ProductError ({error}:{error:Error}){
    return(
        <div>
           ERROR IS: {error.message}
        </div>
    )

}