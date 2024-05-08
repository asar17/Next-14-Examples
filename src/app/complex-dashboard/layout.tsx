import './styles.css'
export default function ComplexDashboardLayout (
    {children,users,sms,notification,login}:
    {
        children:React.ReactNode;
        users:React.ReactNode;
        sms:React.ReactNode;
        notification:React.ReactNode;
        login:React.ReactNode;
    }){
        const isLogged= false;
return isLogged?(
    <div>
     <div>{children}</div>
     <h3>hello from layout</h3>
    
     <div className="flex">
        <div className="flex-1 border-2 border-solid border-red-500">
           {notification}
        </div>
        <div className="flex flex-col flex-1">
            <div className="border-2 border-solid border-blue-500">
              {users}
            </div>
            <div className="border-2 border-solid border-green-500">
              {sms}
            </div>
        </div>
     </div>
    </div>
):(login)
}