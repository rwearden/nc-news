import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCommentsByArticle } from '../utils/api';
import Button from '@material-ui/core/Button';
import UpIcon from '@material-ui/icons/ArrowUpward';
import DownIcon from '@material-ui/icons/ArrowDownward';
import CommentPoster from './CommentPoster';
import { convertTime } from '../utils/utils';

const Comments = ({ id }) => {
  // console.log(id);
  const [comments, setComments] = useState([]);
  const params = useParams();

  useEffect(() => {
    getCommentsByArticle(params.article_id).then((commentsFromApi) => {
      // const reversedComments = commentsFromApi.sort((comment)=>{
      //   comment.created_at
      // })
      setComments(commentsFromApi.reverse());
    });
  }, [params.article_id]);

  return (
    <div>
      <CommentPoster comments={comments} setComments={setComments} id={id} />
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
