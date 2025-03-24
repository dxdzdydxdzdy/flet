import React, { useState } from "react";
import CommentSection from "./CommentSection";

const Options = ({ comments }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function likePost() {
    setIsLiked(!isLiked);
  }
  function openCommentSection() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="buttons">
        <button onClick={likePost}>
          <i
            className="fa-regular fa-heart"
            style={{ color: isLiked ? "red" : "white" }}
          ></i>
        </button>
        <button onClick={openCommentSection}>
          <i className="fa-regular fa-comments"></i>
        </button>
      </div>
      {isOpen ? <CommentSection comments={comments} /> : <></>}
    </>
  );
};

export default Options;
