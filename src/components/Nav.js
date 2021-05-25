import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../utils/api';
import Container from '@material-ui/core/Container';

const Nav = ({ topics, setTopics }) => {
  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, [setTopics]);
  // ^^^ WHY ADD THIS ? ^^^
  return (
    <Container>
      <div>
        <nav className="nav-bar">
          {/* <Link to="/topics">shm/all </Link> */}
          {topics.map((topic) => {
            return (
              <Link
                key={topic.description}
                to={`/articles/topics/${topic.slug}`}
              >
                shm/{topic.slug}
              </Link>
            );
          })}
        </nav>
      </div>
    </Container>
  );
};

export default Nav;
