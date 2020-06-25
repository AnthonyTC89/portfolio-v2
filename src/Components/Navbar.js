/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import Hidden from '@material-ui/core/Hidden';
import AboutHome from './AboutHome';
import ContactHome from './ContactHome';
import ProjectsHome from './ProjectsHome';
import ExperienceHome from './ExperienceHome';
import EducationHome from './EducationHome';
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
    margin: '0.5rem',
    alignSelf: 'center',
  },
  img: {
    width: '2rem',
  },
  drawer: {
    zIndex: '999',
  },
});

const Navbar = ({ setComponent }) => {
  const classes = useStyles();
  const { contact, experience, projects, education } = NavbarInfo;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleComponent = (Component) => {
    setComponent(<Component />);
  };

  const handleClose = (Component) => {
    if (Component != null) {
      setComponent(<Component />);
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.root} color="inherit">
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={() => setDrawerOpen(!drawerOpen)}
              edge="start"
              className={classes.drawer}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Grid container className={classes.container}>
            <Hidden smDown>
              <Divider orientation="vertical" flexItem />
              <Button
                onClick={() => handleComponent(ContactHome)}
                color="primary"
                className={classes.link}
              >
                {contact}
              </Button>
            </Hidden>
            <Hidden xsDown>
              <Divider orientation="vertical" flexItem />
              <Button
                onClick={() => handleComponent(ProjectsHome)}
                color="primary"
                className={classes.link}
              >
                {projects}
              </Button>
            </Hidden>
            <Divider orientation="vertical" flexItem />
            <IconButton
              onClick={() => handleComponent(AboutHome)}
              className={classes.link}
            >
              <HomeIcon color="primary" />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <Hidden xsDown>
              <Button
                onClick={() => handleComponent(ExperienceHome)}
                color="primary"
                className={classes.link}
              >
                {experience}
              </Button>
              <Divider orientation="vertical" flexItem />
            </Hidden>
            <Hidden smDown>
              <Button
                onClick={() => handleComponent(EducationHome)}
                color="primary"
                className={classes.link}
              >
                {education}
              </Button>
              <Divider orientation="vertical" flexItem />
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => handleClose(null)}>
        <Button
          onClick={() => handleClose(ContactHome)}
          color="primary"
          className={classes.link}
        >
          {contact}
        </Button>
        <Button
          onClick={() => handleClose(ProjectsHome)}
          color="primary"
          className={classes.link}
        >
          {projects}
        </Button>
        <Button
          onClick={() => handleClose(ExperienceHome)}
          color="primary"
          className={classes.link}
        >
          {experience}
        </Button>
        <Button
          onClick={() => handleClose(EducationHome)}
          color="primary"
          className={classes.link}
        >
          {education}
        </Button>
      </Drawer>
    </>
  );
};

Navbar.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default Navbar;
