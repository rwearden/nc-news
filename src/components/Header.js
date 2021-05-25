import React from 'react';
import { Link } from 'react-router-dom';
import shmedditLogo from '../img/shmeddit.jpeg';
import Container from '@material-ui/core/Container';

const Header = () => {
  return (
    <Container>
      <div className="title-banner">
        <Link to="/">
          <img
            className="shmeddit-logo"
            src={shmedditLogo}
            alt="shmeddit-logo"
          />
        </Link>
        <h1>Shmeddit: the 3th page of the internet</h1>
      </div>
    </Container>
  );
};

export default Header;
