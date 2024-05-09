import { comments } from "../data";

//to update comment
export async function PATCH (request:Request,{params}:{params:{commentId:string}}){
    const {comment}= await request.json();
    const index=comments.findIndex((comment)=>comment.id === parseInt(params.commentId));
    comments[index].comment = comment;
    return Response.json(comments[index]);
}

// to delete comment
export async function DELETE (request:Request,{params}:{params:{commentId:string}}){

    const index= comments.findIndex((comment)=>comment.id === parseInt(params.commentId));
     const deleteIndex=comments[index]
    comments.splice(index,1);

    return Response.json(deleteIndex);

}