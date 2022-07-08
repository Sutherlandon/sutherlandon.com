import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import FAIcon from './FAIcon';
import qwixxImg from '../images/qwixx-app.jpg';
import tsweeperImg from '../images/tsweeper.jpg';
import cribbageImg from '../images/cribbage_showcase.jpg';

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
                    "I'm a Creative. Code is my outlet."
                  </Typography>
                </div>
                <div className={classes.block}>
                  I fell in love with code at the first "Hello World". I'm a full-stack Software
                  Developer even though I would rather spend my time on the front end.  I build
                  things that I think are cool and also make the world a better place.
                </div>
                <div className={classes.block}>
                  This site is my showcase.  Click the app icons below to explore my favorite projects.
                </div>
                <div className={classes.block}>
                  Hi, my name is Landon. 👋
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
                  install it on your phone.<br />
                  <br />
                  App: <a href="https://tsweeper.sutherlandon.com">tsweeper.sutherlandon.com</a><br />
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
                  everywhere. You'll find a link to the rules in the app.
                </div>
                <div className={classes.block}>
                  App: <a href='https://qwixx.sutherlandon.com'>qwixx.sutherlandon.com</a><br />
                  Source: <a href='https://github.com/sutherlandon/qwixx-app'>QWIXX App on Github</a>
                </div>
              </div>
            </Grid>
          }
          {index === 3 &&
            <Grid item className={classes.grow}>
              <Grid container justify='space-between' className={classes.header}>
                <Grid item>
                  <Typography variant='h5'>
                    Cribbage
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    href="https://crib.sutherlandon.com"
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
                    src={cribbageImg}
                    alt='Cribbage Board Showcase'
                    className={classes.heroImg}
                  />
                </div>

                <div className={classes.block}>
                  Cribbage is a classic game that can be traced back to the 1700's. There are many different types of
                  boards out there. There are even many electronic versions where you can play against other players
                  online or against a computer. But what if you want to play with another person, you have your own
                  cards, and you want to be able to do that anywhere? This project solves that use case.
                </div>
                <div className={classes.block}>
                  Cribbage Board is simply that, a board to keep score in your own game of Cribbage. It is a progressive
                  web app so you can install it to your computer or mobile device and have it anywhere you go. The
                  controls are intuative and keep the board font and center. There are also serveral options to change
                  the experience including themes and cotrol orientations. There is even a scoring cheat sheet in the
                  menu as well as a link to the rules of play in case you need a reference.
                </div>
                <div className={classes.block}>
                  App: <a href='https://crib.sutherlandon.com'>crib.sutherlandon.com</a><br />
                  Source: <a href='https://github.com/sutherlandon/cribbage-board'>Cribbage Board on Github</a>
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