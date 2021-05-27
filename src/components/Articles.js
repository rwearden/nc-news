import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getArticles } from '../utils/api';
import { convertTime } from '../utils/utils';
import ArticleCard from './ArticleCard';
import SortOrderSelector from './SortOrderSelector';

const Articles = ({ topics }) => {
  const [articles, setArticles] = useState([]);
  const params = useParams();
  // console.log(topics);

  useEffect(() => {
    getArticles(params.topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [params.topic]);

  return (
    <div>
      <Typography variant="h5">
        {params.topic ? `Welcome to shm/${params.topic}!` : ''}
      </Typography>
      <div>
        <SortOrderSelector />
        <ul className="articles">
          {articles.map((article) => {
            return <ArticleCard article={article} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Articles;
