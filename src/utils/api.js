import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://rweardens-nc-news.herokuapp.com/api'
});

////////// GET REQUESTS //////////
export const getTopics = async () => {
  const { data } = await newsApi.get('/topics');
  return data.topics;
};

export const getArticles = async (topic) => {
  const { data } = await newsApi.get('/articles', {
    params: {
      topic: topic,
      sort_by: 'title',
      order: 'asc'
    }
  });
  return data.articles;
};

export const getSingleArticle = async (articleId) => {
  const { data } = await newsApi.get(`/articles/${articleId}`);
  return data.article;
};

export const getCommentsByArticle = async (articleId) => {
  const { data } = await newsApi.get(`/articles/${articleId}/comments`);
  return data.comments;
};

////////// PATCH REQUESTS //////////
export const patchArticleVote = async (articleId, num) => {
  const { data } = await newsApi.patch(`/articles/${articleId}`, {
    inc_votes: num
  });
  console.log(data);
};

////////// POST REQUESTS //////////
export const postComment = async (articleId, body) => {
  const { data } = await newsApi.post(`/articles/${articleId}/comments`, {
    username: 'pickle_rick_96',
    body: body
  });
  console.log(data);
};
