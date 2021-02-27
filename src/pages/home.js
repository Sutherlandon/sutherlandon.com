import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import FAIcon from '../components/icon_library';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    margin: 'auto',
    marginBottom: 38,
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
        <Grid container className={classes.menu}>
          <Grid item>
            <FAIcon icon='edit' left />
            Micro Blog
          </Grid>
          <Grid item className={classes.grow} />
          <Grid item>
            <FAIcon icon={['fab', 'github']} left />
            Sutherlandon
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
