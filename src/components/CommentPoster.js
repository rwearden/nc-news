import { useState } from 'react';
import { postComment } from '../utils/api';

const CommentPoster = ({ setComments, id }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newComment);
    postComment(id, newComment)
      .then((postedComment) => {
        setComments((currComments) => {
          return [postedComment.comment[0], ...currComments];
        });
      })
      .catch(() => {
        setNewComment('');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postComment">Leave a comment: </label>
        <input
          required
          type="text"
          id="postComment"
          value={newComment}
          placeholder="Your comment"
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        ></input>
        <button>Post</button>
      </form>
    </div>
  );
};

export default CommentPoster;
