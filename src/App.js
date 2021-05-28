import './App.css';
import { Switch, Route } from 'react-router-dom';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import { useState } from 'react';
import { UserContext } from './contexts/user';
import { ErrorContext } from './contexts/error';
import Banner from './components/Banner';
import Page404 from './components/Page404';

function App() {
  const [user, setUser] = useState('jessjelly');
  const [topics, setTopics] = useState([]);
  const [hasError, setHasError] = useState(false);
  const willMatchTopics = ['football', 'coding', 'cooking'];
  const [articles, setArticles] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ErrorContext.Provider value={{ hasError, setHasError }}>
        <div className="App">
          {hasError && (
            <Route exact path={`/articles/999`}>
              <Page404 />
            </Route>
          )}
          <Banner topics={topics} setTopics={setTopics} />
          <Switch>
            <Route exact path={'/'}>
              <Articles articles={articles} setArticles={setArticles} />
            </Route>
            <Route exact path={'/topics/:topic/articles'}>
              <Articles articles={articles} setArticles={setArticles} />
            </Route>
            <Route exact path={'/articles/:article_id'}>
              <SingleArticle />
            </Route>
          </Switch>
        </div>
      </ErrorContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
