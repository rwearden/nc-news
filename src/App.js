import './App.css';
import { Switch, Route } from 'react-router-dom';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import { useState } from 'react';
import { UserContext } from './contexts/user';
import Banner from './components/Banner';
import BadTopicsRequest from './components/BadTopicsRequest';

function App() {
  const [user, setUser] = useState('jessjelly');
  const [topics, setTopics] = useState([]);
  const [isError, setIsError] = useState(false);
  const willMatchTopics = ['football', 'coding', 'cooking'];

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
          {/* <Route exact path={`articles/topics/${willNotMatch}`}>
            <BadTopicsRequest />
          </Route> */}
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
