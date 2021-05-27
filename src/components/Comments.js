import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCommentsByArticle } from '../utils/api';
import Button from '@material-ui/core/Button';
import { ThumbUp, ThumbDown } from '@material-ui/icons';
import CommentPoster from './CommentPoster';
import { convertTime } from '../utils/utils';
import { Card, CardContent, Typography } from '@material-ui/core';

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const params = useParams();

  useEffect(() => {
    getCommentsByArticle(params.article_id).then((commentsFromApi) => {
      setComments(commentsFromApi.reverse());
      // ^^^ ONLY DOING THIS FOR NOW AS DONT HAVE QUERIES SET UP IN BACKEND ^^^
    });
  }, [params.article_id]);

  return (
    <div>
      <CommentPoster comments={comments} setComments={setComments} id={id} />
      <Typography varitant="h5">Comments:</Typography>
      <ul className="comments-section">
        {comments.map((comment) => {
          return (
            <Card key={comment.comment_id}>
              <CardContent className="card-content">
                <Typography variant="caption">{comment.author}</Typography>
                <Typography variant="caption">
                  {convertTime(comment.created_at)}
                </Typography>
                <Typography>{comment.body}</Typography>
                <div className="votes">
                  <Typography>Votes: {comment.votes}</Typography>
                  <Button startIcon={<ThumbUp />}></Button>
                  <Button startIcon={<ThumbDown />}></Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
