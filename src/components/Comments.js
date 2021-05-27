import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCommentsByArticle } from '../utils/api';
import Button from '@material-ui/core/Button';
import { ThumbUp, ThumbDown } from '@material-ui/icons';
import CommentPoster from './CommentPoster';
import { convertTime } from '../utils/utils';
import { Card, CardContent, Typography } from '@material-ui/core';

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
      <Typography varitant="h5">Comments:</Typography>
      <ul className="comments-section">
        {comments.map((comment) => {
          return (
            <Card key={comment.comment_id}>
              <CardContent>
                <Typography variant="caption">{comment.author}</Typography>
                <Typography variant="caption">{comment.created_at}</Typography>
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

/* <div key={article.article_id} className="article-card">
      <Link to={`/articles/${article.article_id}`}>
        <Card variant="outlined">
          <CardContent>
            <div className="article-card-content">
              <Typography variant="caption">smh/{article.topic}</Typography>
              <Typography variant="caption">
                Posted by: {article.author}
              </Typography>
              <Typography variant="caption">
                Posted on: {convertTime(article.created_at)}
              </Typography>
              <Divider />
              <Typography variant="h6">{article.title}</Typography>
              {/* <Divider /> */

// <Typography variant="caption">Votes: {article.votes}</Typography>
//         </div>
//       </CardContent>
//     </Card>
//   </Link>
// </div> */}

export default Comments;
