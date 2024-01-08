import React, { useState } from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import FAIcon from '../components/FAIcon';
import Header from '../components/Header';

import Content from '../components/Content';
import AppCenter from '../components/AppCenter';

const useStyles = makeStyles((theme) => ({
  column: {
    height: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menu: {
    margin: 'auto',
    maxWidth: 600,
    padding: theme.spacing(2),
    position: 'relative',
    top: -30,
  },
  pageWrapper: {
    height: 'calc(100vh - 216px)',
    margin: 'auto',
    maxWidth: 600,
    position: 'relative',
    top: -50,
    width: '100%',
  },
}));

function Home(props) {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  return (
    <>
      <Header />
      <div className={classes.pageWrapper}>
        <Content index={index} />
        <AppCenter
          index={index}
          setIndex={setIndex}
        />
      </div>
    </>
  );
}

export default Home;
