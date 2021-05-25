import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getArticles } from '../utils/api';
import Button from '@material-ui/core/Button';
import UpIcon from '@material-ui/icons/ArrowUpward';
import DownIcon from '@material-ui/icons/ArrowDownward';

const Articles = ({ topics }) => {
  const [articles, setArticles] = useState([]);
  const params = useParams();
  console.log(topics);

  useEffect(() => {
    getArticles(params.topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [params.topic]);

  return (
    <div>
      <h2>Welcome to shm/{params.topic}!</h2>
      <div className="articles">
        {/* <h2>{params.topic ? 'truthy value' : 'falsey value'}</h2> */}
        {/* wanted to use topic description as tag line for subredit */}
        <ul>
          {articles.map((article) => {
            return (
              <li key={article.article_id} className="article-card">
                <Link to={`/articles/${article.article_id}`}>
                  <p>smh/{article.topic}</p>
                  <p>Posted by: {article.author}</p>
                  <p>{article.created_at}</p>
                  <h3 className="article-title">{article.title}</h3>
                </Link>
                <div className="votes">
                  <p>Votes: {article.votes}</p>
                  <Button startIcon={<UpIcon />}></Button>
                  <Button startIcon={<DownIcon />}></Button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

/* <li key="item.item_id">
              <Link to={`/items/${item.item_id}`}>
                <h2>{item.item_name}</h2>
                <img src={item.img_url} alt={item.item_name} width="250" />
                <h2>{`£${item.price / 100}`}</h2>
              </Link>
            </li> */

export default Articles;
