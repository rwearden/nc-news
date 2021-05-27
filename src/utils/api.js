import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://rweardens-nc-news.herokuapp.com/api'
});

////////// GET REQUESTS //////////
export const getTopics = async () => {
  const { data } = await newsApi.get('/topics');
  return data.topics;
};

export const getArticles = async ({ topic, order, sortBy }) => {
  const { data } = await newsApi.get('/articles', {
    params: {
      topic: topic,
      order: order,
      sort_by: sortBy
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
};

////////// POST REQUESTS //////////
export const postComment = async (articleId, user, body) => {
  const { data } = await newsApi.post(`/articles/${articleId}/comments`, {
    username: user,
    body: body
  });
  return data;
};
