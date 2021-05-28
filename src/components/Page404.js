import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import shmedditLogo from '../img/shmeddit.jpeg';

const Page404 = () => {
  return (
    <div className="error-message-404">
      <Typography variant="h3">
        404: Sorry, that article does not exist
      </Typography>
      <Link to="/">
        <div className="home-button-404">
          <img
            className="shmeddit-logo-404"
            src={shmedditLogo}
            alt="shmeddit-logo"
          />
        </div>
      </Link>
    </div>
  );
};

export default Page404;
