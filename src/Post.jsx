import React from "react";
import Options from "./Options";

const Post = ({ userName, postTitle, postBody, comments }) => {
  return (
    <div className="postItem">
      <div className="postHeader">
        <h2>"{postTitle}"</h2>
        <b>by {userName}</b>
      </div>
      <div className="postBody">
        <p>{postBody}</p>
      </div>
      <hr />
      <Options comments={comments} />
    </div>
  );
};

export default Post;
