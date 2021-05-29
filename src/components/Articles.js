import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticles } from '../utils/api';
import ArticleCard from './ArticleCard';
import OrderSelector from './OrderSelector';
import Page404 from './Page404';
import SortBySelector from './SortBySelector';

const Articles = ({ articles, setArticles }) => {
  const params = useParams();
  const { topic } = params;
  const [order, setOrder] = useState('ASC');
  const [sortBy, setSortBy] = useState('created_at');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getArticles({ topic, order, sortBy })
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
      })
      .catch((err) => {
        setHasError(true);
        // WHY NO WORK?
      });
  }, [topic, order, sortBy, setArticles]);

  return (
    <div>
      {hasError ? (
        <Page404 />
      ) : (
        <div className="articles-page">
          <Typography className="subshmeddit-title" variant="h5">
            {topic ? `Welcome to shm/${topic}!` : ''}
          </Typography>
          <div className="query-selectors">
            <SortBySelector sortBy={sortBy} setSortBy={setSortBy} />
            <OrderSelector order={order} setOrder={setOrder} />
          </div>
          <div>
            <ul className="articles">
              {articles.map((article) => {
                return (
                  <ArticleCard key={article.article_id} article={article} />
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Articles;
