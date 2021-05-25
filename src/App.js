import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Articles from './components/Articles';
import Nav from './components/Nav';
import SingleArticle from './components/SingleArticle';
import { useState } from 'react';

function App() {
  const [topics, setTopics] = useState([]);
  return (
    <div className="App">
      <Header />
      <Nav topics={topics} setTopics={setTopics} />
      <Switch>
        <Route exact path={'/'}>
          <Articles />
        </Route>
        <Route exact path={'/articles/topics/:topic'} topics={topics}>
          <Articles />
        </Route>
        <Route exact path={'/articles/:article_id'}>
          <SingleArticle />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
