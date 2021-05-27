import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticles } from '../utils/api';
import { convertTime } from '../utils/utils';
import ArticleCard from './ArticleCard';
import OrderSelector from './OrderSelector';
import QuerySelector from './QuerySelector';
import SortBySelector from './SortBySelector';

const Articles = ({ topics }) => {
  const [articles, setArticles] = useState([]);
  const params = useParams();
  const { topic } = params;
  const [order, setOrder] = useState('ASC');
  const [sortBy, setSortBy] = useState('created_at');

  useEffect(() => {
    getArticles({ topic, order, sortBy }).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [topic, order, sortBy]);

  return (
    <div>
      <Typography variant="h5">
        {topic ? `Welcome to shm/${topic}!` : ''}
      </Typography>
      <OrderSelector setOrder={setOrder} />
      <SortBySelector setSortBy={setSortBy} />
      {/* ////////////////////////////////////////////////////////////// */}
      <QuerySelector sortBy={sortBy} setSortBy={setSortBy} />
      {/* ///////////////////////////////////////////////////////////////////// */}
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
