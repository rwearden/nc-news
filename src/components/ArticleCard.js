import React from 'react';
import { Link } from 'react-router-dom';
import { convertTime } from '../utils/utils';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';
import { ThumbUp } from '@material-ui/icons';

const ArticleCard = ({ article }) => {
  return (
    <div key={article.article_id} className="article-card">
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
              {/* <Divider /> */}
              <Typography variant="caption">Votes: {article.votes}</Typography>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default ArticleCard;
