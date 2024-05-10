import {type NextRequest} from 'next/server';
import {comments} from './data'
//to get all comments
export async function GET(request:NextRequest){
    const searchParams= request.nextUrl.searchParams;
    const query= searchParams.get("query")
    const filterComments= query?comments.filter((comment)=>comment.comment.includes(query)):comments;
    return Response.json(filterComments)
}

//to inserts new object
export async function POST(request:Request){

    const body = await request.json()
    const {comment}= body;

    const newcomment={
        id:comments.length +1,
        comment:comment
    }

    comments.push(newcomment);

    return new Response(JSON.stringify(newcomment),{
        headers:{
                    "Content-Type":"application/json"
        
                },
                status:201
    })
}