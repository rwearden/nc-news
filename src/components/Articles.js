import { Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ErrorContext } from '../contexts/error';
import { getArticles } from '../utils/api';
import ArticleCard from './ArticleCard';
import OrderSelector from './OrderSelector';
import SortBySelector from './SortBySelector';

const Articles = ({ articles, setArticles }) => {
  const params = useParams();
  const { topic } = params;
  const [order, setOrder] = useState('ASC');
  const [sortBy, setSortBy] = useState('created_at');
  const { setHasError } = useContext(ErrorContext);

  useEffect(() => {
    getArticles({ topic, order, sortBy })
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
      })
      .catch(() => {
        setHasError(true);
      });
  }, [topic, order, sortBy, setArticles, setHasError]);

  return (
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
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Articles;
