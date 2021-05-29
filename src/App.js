import './App.css';
import { Switch, Route } from 'react-router-dom';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import { useState } from 'react';
import { UserContext } from './contexts/user';
import Banner from './components/Banner';
import Page404 from './components/Page404';

function App() {
  const [user, setUser] = useState('jessjelly');
  // const [topics, setTopics] = useState([]);
  const [articles, setArticles] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Banner />
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
          <Route exact path={`/articles/*`}>
            <Page404 />
          </Route>
          <Route exact path={`/topics/*/articles`}>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
