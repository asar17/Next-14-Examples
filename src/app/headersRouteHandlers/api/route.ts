import { NextRequest} from 'next/server'
import {headers,cookies} from 'next/headers'
export async function GET(request:NextRequest){
    //get header by request
    // const requestHeader= new Headers(request.headers)
    // console.log('User-Agent',requestHeader.get('User-Agent'));
    // console.log('Accept',requestHeader.get('Accept'));
    // console.log('Authorization',requestHeader.get('Authorization'));

    //get header by headers method
    // const header= headers();
    // console.log('User-Agent from headers method',header.get('User-Agent'));
    // console.log('Accept from headers method',header.get('Accept'));
    // console.log('Authorization from headers method',header.get('Authorization'));

    //get cookies by reuest
    console.log("cookies",request.cookies.get("them"))


    //set cookies by cookies method
    cookies().set("name","athar");
    //get cookies by cookies method
    console.log("cookies two",cookies().get('name'))



    return new Response('<h1>hello header</h1>',{
        headers:{
        'Content-Type':"application/json",
        "Set-Cookie":"them=dark"
        }
    })
}