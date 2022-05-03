import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import FAIcon from './FAIcon';
import qwixxImg from '../images/qwixx-app.jpg';
import tsweeperImg from '../images/tsweeper.jpg';

const useStyles = makeStyles((theme) => ({
  block: {
    fontSize: 16,
    marginBottom: theme.spacing(2),
  },
  content: {
    overflowY: 'auto',
  },
  contentWrapper: {
    padding: theme.spacing(),
  },
  grow: {
    flexGrow: 1,
  },
  header: {
    marginBottom: theme.spacing(4),
  },
  heroImg: {
    display: 'block',
    width: '100%',
  },
  noPageHeader: {
    paddingTop: `${theme.spacing(9)}px !important`,
  },
  page: {
    height: 'calc(100% - 16px)',
    padding: theme.spacing(),
    paddingBottom: 144,
  },
}));

export default function Content(props) {
  const { index } = props;
  const classes = useStyles();

  return (
    <div className={classes.contentWrapper}>
      <div className={classes.page}>
        <Grid container spacing={2} wrap='nowrap' alignItems='center'>
          {index === 0 &&
            <Grid item className={clsx(classes.grow, classes.noPageHeader)}>
              <div className={classes.content}>
                <div className={classes.block} style={{ textAlign: 'center' }}>
                  <Typography variant='h4'>
                    "I code because I'm a creative and I can't draw!"
                  </Typography>
                </div>
                <div className={classes.block}>
                  Well... actually I love coding, I always have.  So much so that I have a master's
                  degree in Computer Science and coding in my full time job.  I'm a full-stack
                  Software Developer even though I would rather spend my time on the front end.
                  I build things that I think are cool and in turn, make the world a better place.
                  Hi, my name is Landon.
                </div>
              </div>
            </Grid>
          }
          {index === 1 &&
            <Grid item className={classes.grow}>
              <Grid container justify='space-between' className={classes.header}>
                <Grid item>
                  <Typography variant='h5'>
                    T*Sweeper  
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    href="https://tsweeper.sutherlandon.com"
                    target="_"
                    variant='contained'
                  >
                    Launch <FAIcon icon='external-link-alt' right size='lg' />
                  </Button>
                </Grid>
              </Grid>

              <div className={classes.content}>
                <div className={classes.block}>
                  <img
                    src={tsweeperImg}
                    alt='T*Sweeper App preview'
                    className={classes.heroImg}
                  />
                </div>

                <div className={classes.block}>
                  T*Sweeper is a text based minesweeper game.  I was inspired by a terminal based
                  minesweeper game that I wrote as an assignment in high school.  This game uses 
                  nothing but text for graphics and layout, and accepts typed commands, simulating a 
                  unix terminal. Built purely in React, it is also a Progressive Web App, so you can 
                  install it on your phone.<br/>
                  <br/>
                  App: <a href="https://tsweeper.sutherlandon.com">tsweeper.sutherlandon.com</a><br/>
                  Source: <a href="https://github.com/sutherlandon/tsweeper">T*Sweeper on Github</a>
                </div>
              </div>
            </Grid>
          }
          {index === 2 &&
            <Grid item className={classes.grow}>
              <Grid container justify='space-between' className={classes.header}>
                <Grid item>
                  <Typography variant='h5'>
                    QWIXX
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    href="https://qwixx.sutherlandon.com"
                    target="_"
                    variant='contained'
                  >
                    Launch <FAIcon icon='external-link-alt' right size='lg' />
                  </Button>
                </Grid>
              </Grid>

              <div className={classes.content}>
                <div className={classes.block}>
                  <img
                    src={qwixxImg}
                    alt='QWIXX App preview'
                    className={classes.heroImg}
                  />
                </div>

                <div className={classes.block}>
                  QWIXX is a table top game played with six dice and score cards.  I enjoyed the game so much
                  that I built this web app as a passion project. The main goal of this project was to make the
                  game more accessible because it is not always practicle to roll dice, for example, in the car
                  or on an airplane.  To support that goal, this app scales to any size screen gracefully and
                  is a Progressive Web App so you can install it on your device to have offline access to it
                  everywhere. You'll find a link to the rules in the app.<br />
                  <br />
                  App: <a href='https://qwixx.sutherlandon.com'>qwixx.sutherlandon.com</a><br />
                  Source: <a href='https://github.com/sutherlandon/qwixx-app'>QWIXX App on Github</a>
                </div>
              </div>
            </Grid>
          }
        </Grid>
        {/* <Grid item>
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
      </Grid> */}
        {/* <Typography variant='h4'>
            Round every corner
                  </Typography>
          <Typography variant='h4'>
            Lies fleeting hope of respite
                  </Typography>
          <Typography variant='h4'>
            Focus on next step
                  </Typography> */}
        {/* <Typography variant='h3' className={classes.header}>
          Home
        </Typography>
        <Grid container spacing={2} wrap='nowrap'>
          <Grid item>
            <Typography variant='body1'>
              Husband, Father, Creative.
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={profilePhoto} 
              alt='headshot photo'
              className={classes.headshot}
            />
          </Grid>
        </Grid> */}
      </div>
    </div>
  );
}