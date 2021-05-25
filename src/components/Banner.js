import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';

const Banner = () => {
  return (
    <div>
      <AppBar>
        <IconButton>
          <Menu></Menu>
        </IconButton>
      </AppBar>
    </div>
  );
};

export default Banner;
