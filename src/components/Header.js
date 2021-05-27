import React from 'react';
import { Link } from 'react-router-dom';
import shmedditLogo from '../img/shmeddit.jpeg';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const Header = () => {
  return (
    <Container>
      <div className="title-banner">
        <Link to="/">
          <div className="logo-container">
            <img
              className="shmeddit-logo"
              src={shmedditLogo}
              alt="shmeddit-logo"
            />
          </div>
        </Link>
        <Typography variant="h6">
          Shmeddit: the 3th page of the internet
        </Typography>
      </div>
    </Container>
  );
};

export default Header;
