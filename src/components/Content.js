import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import FAIcon from './FAIcon';
import qwixxImg from '../images/qwixx-app.jpg';

const useStyles = makeStyles((theme) => ({
  block: {
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
          <Grid item className={classes.grow}>
            <Grid container justify='space-between' className={classes.header}>
              <Grid item>
                <Typography variant='h5'>
                  QWIXX
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  href="https://sutherlandon.com/qwixx-app"
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
              App: <a href='https://sutherlandon.com/qwixx-app'>Launch QWIXX App</a><br />
              Source: <a href='https://github.com/sutherlandon/qwixx-app'>QWIXX App on Github</a>
              </div>
            </div>

          </Grid>
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