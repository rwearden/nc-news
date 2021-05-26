import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getArticles } from '../utils/api';
import { convertTime } from '../utils/utils';
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
      <h2>{params.topic ? `Welcome to shm/${params.topic}!` : ''}</h2>
      <div>
        <SortOrderSelector />
        <ul className="articles">
          {articles.map((article) => {
            return (
              <li key={article.article_id} className="article-card">
                <Link to={`/articles/${article.article_id}`}>
                  <p>smh/{article.topic}</p>
                  <p>Posted by: {article.author}</p>
                  <p>Posted on: {convertTime(article.created_at)}</p>
                  <h3 className="article-title">{article.title}</h3>
                  <p>Votes: {article.votes}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Articles;
