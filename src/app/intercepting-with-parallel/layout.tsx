export default function InterWithParLayout(
    {children,modal}:
    {
        children:React.ReactNode;
        modal:React.ReactNode

    }
){
    return(
        <>
            {modal}
            {children}
            <h1 className="text-3xl">hello from layout</h1>
        </>
    )
} 