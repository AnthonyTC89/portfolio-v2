/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
    margin: '1rem',
    alignSelf: 'center',
  },
  img: {
    width: '2rem',
  },
});

const Navbar = ({ setComponent }) => {
  const classes = useStyles();
  const { contact, experience, projects, education, text } = NavbarInfo;

  const handleComponent = (Component) => {
    setComponent(<Component />);
  };

  return (
    <AppBar position="fixed" className={classes.root} color="inherit">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {text}
        </Typography>
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
          <Button
            onClick={() => handleComponent(AboutHome)}
            className={classes.link}
          >
            <HomeIcon color="primary" />
          </Button>
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
  );
};

Navbar.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default Navbar;
