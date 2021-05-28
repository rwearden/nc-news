import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import { Link } from 'react-router-dom';
import shmedditLogo from '../img/shmeddit.jpeg';
import { getTopics } from '../utils/api';

// react.school/material-ui

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: green[500]
  },
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));

const Banner = ({ topics, setTopics }) => {
  const classes = useStyles();
  const [example, setExample] = useState('primary');
  const isCustomColor = example === 'customColor';
  const isCustomHeight = example === 'customHeight';

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, [setTopics]);
  return (
    <React.Fragment>
      <AppBar color="primary" className="banner">
        <Toolbar>
          <Link to="/">
            <div className="logo-container">
              <img
                className="shmeddit-logo"
                src={shmedditLogo}
                alt="shmeddit-logo"
              />
            </div>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Shmeddit: the 3th page of the internet
          </Typography>
          <div>
            <nav className="nav-bar">
              {topics.map((topic) => {
                return (
                  <Link
                    className="sub-shmeddit-link"
                    key={topic.description}
                    to={`/topics/${topic.slug}/articles`}
                  >
                    shm/{topic.slug}
                  </Link>
                );
              })}
            </nav>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default Banner;
