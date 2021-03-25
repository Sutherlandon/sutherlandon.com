import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import homeIcon from '../images/app-icons/home-192.png';
import profilePhoto from '../images/profile-drawing.jpg';
import qwixxIcon from '../images/app-icons/qwixx-192.png';
import tsweeperIcon from '../images/app-icons/tsweeper-192.png';

const useStyles = makeStyles((theme) => ({
  appCenterWrapper: {
    background: '#f4eeed',
    bottom: 0,
    boxShadow: '0px -10px 20px 12px #f4eeed',
    maxWidth: 600,
    position: 'fixed',
    width: '100%',
  },
  appCenterBorder: {
    background: '#f4eeed',
    borderRadius: 24,
    borderTop: '1px solid #cacaca',
    padding: theme.spacing(2),
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
    background: 'linear-gradient(45deg, #f4eeed 50%, rgba(0,0,0,0) 0%)',
    borderBottom: '1px solid #cacaca',
    borderLeft: '1px solid #cacaca',
    height: 15,
    margin: 'auto',
    marginBottom: 11,
    marginTop: -27,
    transform: 'rotate(-45deg)',
    width: 15,
  },
}));

export default function AppCenter(props) {
  const { index, setIndex } = props;
  const classes = useStyles();

  return (
    <div className={classes.appCenterWrapper}>
      <div className={classes.appCenterBorder}>
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
      </div>
    </div>
  );

}