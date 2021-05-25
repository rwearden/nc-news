import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSingleArticle } from '../utils/api';
import Comments from './Comments';
import Button from '@material-ui/core/Button';
import UpIcon from '@material-ui/icons/ArrowUpward';
import DownIcon from '@material-ui/icons/ArrowDownward';

const SingleArticle = () => {
  const [article, setArticle] = useState([[]]);
  const params = useParams();

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
          <p>Votes: {article[0].votes}</p>
          <Button startIcon={<UpIcon />}></Button>
          <Button startIcon={<DownIcon />}></Button>
        </div>
      </div>
      <div>
        <Comments />
      </div>
    </div>
  );
};

export default SingleArticle;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchSingleItem } from '../utils/api';

// const SingleItem = () => {
//   const params = useParams();
//   const [item, setItem] = useState({});

//   useEffect(() => {
//     fetchSingleItem(params.item_id).then((data) => setItem(data.item));
//   }, [params.item_id]);

//   return (
//     <div>
//       <h1>{item.item_name}</h1>
//       <img src={item.img_url} alt={item.item_name} width="500"></img>
//       <h2>£{item.price / 100}</h2>
//       <p>{item.description}</p>
//     </div>
//   );
// };

// export default SingleItem;
