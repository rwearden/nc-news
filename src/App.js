import './App.css';
import { Switch, Route } from 'react-router-dom';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import { useState } from 'react';
import { UserContext } from './contexts/user';
import Banner from './components/Banner';

function App() {
  const [user, setUser] = useState('jessjelly');
  const [topics, setTopics] = useState([]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Banner topics={topics} setTopics={setTopics} />
        {/* <Nav topics={topics} setTopics={setTopics} /> */}
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
    </UserContext.Provider>
  );
}

export default App;
