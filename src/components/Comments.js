import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCommentsByArticle } from '../utils/api';
import Button from '@material-ui/core/Button';
import UpIcon from '@material-ui/icons/ArrowUpward';
import DownIcon from '@material-ui/icons/ArrowDownward';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const params = useParams();

  useEffect(() => {
    getCommentsByArticle(params.article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [params.article_id]);

  return (
    <div>
      <h2>Comments:</h2>
      <ul className="comments-section">
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id} className="comment">
              <p>{comment.author}</p>
              <p>{comment.created_at}</p>
              <p>{comment.body}</p>
              <div className="votes">
                <p>Votes: {comment.votes}</p>
                <Button startIcon={<UpIcon />}></Button>
                <Button startIcon={<DownIcon />}></Button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
