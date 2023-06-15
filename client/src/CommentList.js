import React from "react";

export default({comments})=>{
    const renderComment = comments.map((comment)=>{
        return(
            <li key={comment.id}>{comment.content}</li>
        )
    })

    return(
        <ul>{renderComment}</ul>
    )
}