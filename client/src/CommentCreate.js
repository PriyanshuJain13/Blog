import React, { useState } from "react";
import axios from "axios";

export default ({ postId }) => {
  const [content, setContent] = useState('');

    const handleComment = async(event) => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{
            content
        });

        setContent('');   
    }


  return (
    <div>
      <form onSubmit={handleComment}>
        <div className="form-group">
          <label className="form-label">New Comment</label>
          <input
            value={content}
            onChange={e => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" style={{marginTop:"10px"}}>Submit</button>
      </form>
    </div>
  );
};
