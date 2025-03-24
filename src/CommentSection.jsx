import React from "react";

const CommentSection = ({ comments }) => {
  console.log(comments);
  return (
    <div className="comments-container">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <h4>{comment.email}</h4>
          <p>"{comment.body}"</p>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
