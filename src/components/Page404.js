import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      <h2>Sorry, that article does not exist</h2>
      <Link to="/">Homepage</Link>
    </div>
  );
};

export default Page404;
