// import React from 'react';
import { useEffect, useState } from 'react';
import { postComment } from '../utils/api';

const CommentPoster = ({ setComments, id }) => {
  const [newComment, setNewComment] = useState('');

  // useEffect(() => {
  //   .then((response) => {
  //     // console.log(response);
  //   });
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newComment);
    setComments((currComments) => {
      const templateComment = {
        author: 'jessjelly',
        created_at: 'Just now',
        body: newComment,
        comment_id: newComment
      };

      return [templateComment, ...currComments];
    });
    postComment(id, newComment).catch(() => {
      setNewComment('');
    });
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
            // console.log(event.target.value);
            setNewComment(event.target.value);
          }}
        ></input>
        <button>Post</button>
      </form>
    </div>
  );
};

export default CommentPoster;
