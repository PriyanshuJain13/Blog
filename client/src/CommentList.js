import React from "react";

export default({comments})=>{
    const renderComment = comments.map((comment)=>{
           
        let content;
        if(comment.status === 'approved')
        {
            content = comment.content;
        }else if(comment.status === 'pending')
        {
            content = 'This comment is awaiting moderation'
        }else if(comment.status === 'rejected')
        {
            content = 'This comment has been rejected'
        }

        return(
            <li key={comment.id}>{content}</li>
        )
    })

    return(
        <ul>{renderComment}</ul>
    )
}