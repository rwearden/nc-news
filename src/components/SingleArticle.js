import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSingleArticle } from '../utils/api';
import ArticleVoter from './ArticleVoter';
import Comments from './Comments';
import { convertTime } from '../utils/utils';
import { Card, CardContent, Typography } from '@material-ui/core';
import { ErrorContext } from '../contexts/error';

const SingleArticle = () => {
  const [article, setArticle] = useState([[]]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { setHasError } = useContext(ErrorContext);

  useEffect(() => {
    getSingleArticle(params.article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
      });
  }, [params.article_id]);

  return (
    <div className="articles-page">
      {isLoading ? (
        <p>...loading</p>
      ) : (
        <div>
          <Card>
            <CardContent className="single-article-card-content">
              <Typography variant="caption">smh/{article[0].topic}</Typography>
              <Typography variant="caption">
                Posted by: {article[0].author}
              </Typography>
              <Typography variant="caption">
                Posted on: {convertTime(article[0].created_at)}
              </Typography>
              {/* WONT LET ME CONVERT THIS  TIME ^^^ */}
              <Typography variant="h5" className="article-title">
                {article[0].title}
              </Typography>
              <Typography>{article[0].body}</Typography>
              <div className="votes">
                <ArticleVoter
                  votes={article[0].votes}
                  id={article[0].article_id}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      <div>
        {isLoading ? (
          <p>...loading</p>
        ) : (
          <Comments id={article[0].article_id} />
        )}
      </div>
    </div>
  );
};

export default SingleArticle;
