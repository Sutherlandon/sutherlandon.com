import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../images/Gg/Gg-1.1.svg';
import forest from '../images/forest-faded.jpg';
import dip from '../images/dip-mask.svg';

const useStyles = makeStyles((theme) => ({
  header: {
    height: 266,
    backgroundImage: `url(${forest})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    maskImage: `url(${dip})`,
    maskPosition: 'center bottom',
    maskRepeat: 'no-repeat',
  },
  logoWrapper: {
    height: '100%',
    minWidth: 400,
    padding: theme.spacing(),
    textAlign: 'center',
    width: '100%',
  },
  logo: {
    height: '100%',
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>
        <div className={classes.logoWrapper}>
          <img src={logo} className={classes.logo} alt='Gg Logo' />
        </div>
      </div>
    </>
  );
}

export default Header;
