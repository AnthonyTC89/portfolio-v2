import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AboutInfo } from '../Info.json';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5rem 1rem',
    textAlign: 'center',
    minHeight: window.innerHeight,
    backgroundImage: `url(${AboutInfo.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  title: {
    fontWeight: 400,
    fontSize: '3em',
    color: 'lightgray',
  },
  subtitle: {
    fontWeight: 400,
    color: 'lightgray',
  },
  picture: {
    width: '100%',
  },
  img: {
    width: '6rem',
    boxShadow: '0px 10px 10px 0px gray',
    borderRadius: '50%',
  },
  text: {
    textAlign: 'center',
    padding: '0 2rem',
    margin: '8rem auto 4rem auto',
    color: 'lightgray',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
    width: '90%',
  },
  list: {
    margin: '1rem auto',
  },
  listItem: {
    margin: '0.2rem 0.2rem',
    border: '1px solid black',
    padding: '0.3rem 0.5rem',
    borderRadius: '4px',
    color: 'white',
  },
}));

const AboutHome = () => {
  const classes = useStyles();
  const { about, skills } = AboutInfo;

  return (
    <Slide direction="up" in timeout={1000}>
      <Grid component="section" container className={classes.root}>
        <Grid item xs={12} className={classes.columnImg}>
          <Grow in timeout={3000}>
            <picture className={classes.picture}>
              <img className={classes.img} src={about.location} alt={about.key} />
            </picture>
          </Grow>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h2">
            {about.title}
          </Typography>
          <Typography className={classes.subtitle} variant="h6">
            {about.subtitle}
          </Typography>
          <Typography className={classes.text}>
            {about.text}
          </Typography>
          <div className={classes.list}>
            {skills.map((skill) => (
              <Button
                key={uuidv4()}
                className={classes.listItem}
                variant="outlined"
              >
                {skill}
              </Button>
            ))}
          </div>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default AboutHome;
