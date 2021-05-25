import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://rweardens-nc-news.herokuapp.com/api'
});

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
