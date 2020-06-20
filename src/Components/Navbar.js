/* eslint-disable object-curly-newline */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import Hidden from '@material-ui/core/Hidden';
import { NavbarInfo } from '../Info.json';

const useStyles = makeStyles({
  root: {
    opacity: '70%',
  },
  title: {
    flexGrow: 1,
  },
  container: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    justifyContent: 'center',
  },
  link: {
    margin: '1rem',
    alignSelf: 'center',
  },
  img: {
    width: '2rem',
  },
});

const Navbar = () => {
  const classes = useStyles();
  const { about, contact, products, services, text, logo } = NavbarInfo;

  return (
    <AppBar position="fixed" className={classes.root} color="inherit">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {text}
        </Typography>
        <Grid container className={classes.container}>
          <Hidden xsDown>
            <Link href="#products" color="inherit" className={classes.link}>
              {products}
            </Link>
            <Divider orientation="vertical" flexItem />
          </Hidden>
          <Hidden smDown>
            <Link href="#about" color="inherit" className={classes.link}>
              {about}
            </Link>
            <Divider orientation="vertical" flexItem />
          </Hidden>
          <Link href="#home" color="inherit" className={classes.link}>
            {logo.location == null ? <HomeIcon /> : (
              <img className={classes.img} src={logo.location} alt={logo.key} />
            )}
          </Link>
          <Hidden smDown>
            <Divider orientation="vertical" flexItem />
            <Link href="#contact" color="inherit" className={classes.link}>
              {contact}
            </Link>
          </Hidden>
          <Hidden xsDown>
            <Divider orientation="vertical" flexItem />
            <Link href="#services" color="inherit" className={classes.link}>
              {services}
            </Link>
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
