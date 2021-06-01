import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSingleArticle } from '../utils/api';
import ArticleVoter from './ArticleVoter';
import Comments from './Comments';
import { convertTime } from '../utils/utils';
import {
  Card,
  CardContent,
  CircularProgress,
  Typography
} from '@material-ui/core';
import Page404 from './Page404';

const SingleArticle = () => {
  const [article, setArticle] = useState([[]]);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getSingleArticle(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setHasError(true);
      });
  }, [article_id, setHasError]);

  return (
    <div>
      {hasError ? (
        <Page404 />
      ) : (
        <div className="articles-page">
          {isLoading ? (
            <CircularProgress color="primary" />
          ) : (
            <div>
              <Card>
                <CardContent className="single-article-card-content">
                  <Typography variant="caption">
                    smh/{article[0].topic}
                  </Typography>
                  <Typography variant="caption">
                    Posted by {article[0].author} -{' '}
                    {convertTime(article[0].created_at)}
                  </Typography>
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
            <Comments id={article_id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleArticle;
