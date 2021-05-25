import React, { useEffect, useState } from 'react';

const PostComment = ({ comments, setComments, id }) => {
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    PostComment(id, newComment);
  }, [newComment]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // setComments(newComment);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postComment">Leave a comment: </label>
        <input
          type="text"
          id="postComment"
          value={newComment}
          placeholder="Your comment"
          onChange={(event) => {
            console.log(event.target.value);
            setNewComment(event.target.value);
          }}
        ></input>
        <button>Post</button>
      </form>
    </div>
  );
};

export default PostComment;
