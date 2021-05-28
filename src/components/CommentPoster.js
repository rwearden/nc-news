import { useContext, useState } from 'react';
import { UserContext } from '../contexts/user';
import { postComment } from '../utils/api';

const CommentPoster = ({ setComments, id }) => {
  const [newComment, setNewComment] = useState('');
  const { user } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(id, user, newComment)
      .then((postedComment) => {
        setComments((currComments) => {
          return [postedComment.comment[0], ...currComments];
        });
        setNewComment('');
      })
      .catch(() => {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="comment-poster">
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
