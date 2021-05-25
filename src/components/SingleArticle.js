import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSingleArticle } from '../utils/api';
import Comments from './Comments';
import ArticleVote from './ArticleVote';

const SingleArticle = () => {
  const [article, setArticle] = useState([[]]);
  const params = useParams();
  // console.log(article);

  useEffect(() => {
    getSingleArticle(params.article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [params.article_id]);
  //   const newDate = new Date(article.created_at);
  //   HOW TO CONVERT TIME ???

  return (
    <div>
      <div className="article-body-card">
        <p>smh/{article[0].topic}</p>
        <p>Posted by: {article[0].author}</p>
        <p>Posted on: Date...</p>
        <h2 className="article-title">{article[0].title}</h2>
        <p>{article[0].body}</p>
        <div className="votes">
          <ArticleVote votes={article[0].votes} id={article[0].article_id} />
        </div>
      </div>
      <div>
        <Comments id={article[0].article_id} />
      </div>
    </div>
  );
};

export default SingleArticle;
