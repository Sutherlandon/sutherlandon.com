import React, { useState } from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import FAIcon from '../components/icon_library';
import Header from '../components/Header';

import qwixxIcon from '../images/app-icons/qwixx-192.png';
import tsweeperIcon from '../images/app-icons/tsweeper-192.png';
import homeIcon from '../images/app-icons/home-192.png';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appCenterWrapper: {
    borderRadius: 24,
    borderTop: '1px solid #cacaca',
    padding: theme.spacing(2),
    maxWidth: 600,
    margin: 'auto',
    width: '100%',
  },
  appCenter: {
    //backgroundColor: 'rgba(0,0,0,0.2)',
    //padding: theme.spacing(2),
  },
  appIconContainer: {
    textAlign: 'center',
  },
  appIcon: {
    backgroundColor: '#3a3a3a',
    borderRadius: 8,
    boxShadow: '#717171 1px 1px 5px 0px',
    cursor: 'pointer',
    width: 70,
    height: 70,
  },
  appName: {
    textAlign: 'center',
  },
  homeIcon: {
    padding: 4,
    height: 62,
    width: 62,
    backgroundColor: '#b7a171',
  },
  indicator: {
    borderLeft: '1px solid #cacaca',
    borderBottom: '1px solid #cacaca',
    height: 15,
    width: 15,
    backgroundColor: '#f4eeed',
    transform: 'rotate(-45deg)',
    margin: 'auto',
    marginTop: -27,
    marginBottom: 11
  },
  contentWrapper: {
    flexGrow: 1,
    overflowY: 'auto',
    overflow: 'hidden',
    padding: theme.spacing(),
  },
  content: {
    height: 'calc(100% - 16px)',
    padding: theme.spacing(),
    textAlign: 'center',
  },
  column: {
    height: '100%',
  },
  pageWrapper: {
    height: 'calc(100vh - 216px)',
    margin: 'auto',
    maxWidth: 800,
    position: 'relative',
    top: -50,
    width: '100%',
  },
  menu: {
    margin: 'auto',
    maxWidth: 600,
    padding: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
}));

function Home(props) {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  return (
    <>
      <Header />
      <div className={classes.pageWrapper}>
        <Grid container direction='column' className={classes.column}>
          <Grid item>
            <Grid container className={classes.menu}>
              <Grid item>
                <FAIcon icon={['fab', 'github']} left />
                Github
              </Grid>
              <Grid item className={classes.grow} />
              <Grid item>
                <FAIcon icon='edit' left />
                Blog
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.contentWrapper}>
            <div className={classes.content}>
              <Typography variant='h3'>
                Home
              </Typography>
              <Typography variant='body1'>
                I am a creative who takes pride in building beautiful
                web apps that makes someone's day just a little better.
              </Typography>
            </div>
          </Grid>
          <Grid item className={classes.appCenterWrapper}>
            <div className={classes.appCenter}>
              <Grid container spacing={2} justify='space-around' wrap='nowrap'>
                <Grid item className={classes.appIconContainer}>
                  {index === 0 && <div className={classes.indicator}></div>}
                  <img 
                    src={homeIcon}
                    className={clsx(classes.appIcon, classes.homeIcon)}
                    onClick={() => setIndex(0)}
                  />
                  <div className={classes.appName}>Home</div>
                </Grid>
                <Grid item className={classes.appIconContainer}>
                  {index === 1 && <div className={classes.indicator}></div>}
                  <img 
                    src={tsweeperIcon}
                    className={classes.appIcon}
                    onClick={() => setIndex(1)}
                  />
                  <div className={classes.appName}>T*Sweeper</div>
                </Grid>
                <Grid item className={classes.appIconContainer}>
                  {index === 2 && <div className={classes.indicator}></div>}
                  <img 
                    src={qwixxIcon}
                    className={classes.appIcon}
                    onClick={() => setIndex(2)}
                  />
                  <div className={classes.appName}>QWIXX</div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
