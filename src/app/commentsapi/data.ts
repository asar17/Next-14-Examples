export const comments =[
    {id:1,comment:"hello comment one"},
    {id:2,comment:"hello comment two"},
    {id:3,comment:"hello comment three"},
    {id:4,comment:"hello comment four"},
]
// export async function POST (request:Request){

//     const comment= await request.json()

//     const newcomment = {
//         id:comments.length +1,
//         text:comment.text,
//     }
    
//     comments.push(newcomment)

//     return new Response(JSON.stringify(newcomment),{
//         headers:{
//             'Content-Type':'application/json'
//         },
//         status:201,
//     })


//}