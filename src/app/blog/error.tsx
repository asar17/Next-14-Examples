'use client'
export default function ErrorBoundary ({error,rest}:{error:Error,rest:()=>void}){
    return(
        <div>
            {error.message}
            <button onClick={rest}>try again</button>
        </div>
    )
}