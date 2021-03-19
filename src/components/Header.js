import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../images/Gg/Gg-1.1.svg';
import forest from '../images/forest.jpg';
import dip from '../images/dip-mask.svg';

const useStyles = makeStyles({
  header: {
    height: 266,
    backgroundImage: `url(${forest})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    maskImage: `url(${dip})`,
    maskPosition: 'center bottom',
    maskRepeat: 'no-repeat',
    opacity: 0.8,
  },
  logoWrapper: {
    minWidth: 400,
    position: 'absolute',
    top: 10,
    textAlign: 'center',
    width: '100%',
  },
  logo: {
    height: 240,
  },
});

function Header(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}></div>
      <div className={classes.logoWrapper}>
        <img src={logo} className={classes.logo} alt='Gg Logo' />
      </div>
    </>
  );
}

export default Header;
