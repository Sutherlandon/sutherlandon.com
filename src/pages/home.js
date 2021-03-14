import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import FAIcon from '../components/icon_library';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
  appCenterWrapper: {
    padding: theme.spacing(2),
  },
  appCenter: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: theme.spacing(2),
  },
  appIconContainer: {
    backgroundColor: 'gray',
  },
  content: {
    flexGrow: 1,
  },
  column: {
    height: '100%',
  },
  pageWrapper: {
    height: 'calc(100vh - 201px)',
    margin: 'auto',
    maxWidth: 1000,
    position: 'relative',
    top: -65,
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

  return (
    <>
      <Header />
      <div className={classes.pageWrapper}>
        <Grid container direction='column' className={classes.column}>
          <Grid item>
            <Grid container className={classes.menu}>
              <Grid item>
                <FAIcon icon='edit' left />
                Blog
              </Grid>
              <Grid item className={classes.grow} />
              <Grid item>
                <FAIcon icon={['fab', 'github']} left />
                Github
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.content}>
          </Grid>
          <Grid item className={classes.appCenterWrapper}>
            <Paper className={classes.appCenter}>
              <Grid container spacing={2} justify='space-around'>
                <Grid item className={classes.appIconContainer}>
                  A
                </Grid>
                <Grid item className={classes.appIconContainer}>
                  B
                </Grid>
                <Grid item className={classes.appIconContainer}>
                  C
                </Grid>
                <Grid item className={classes.appIconContainer}>
                  D
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
