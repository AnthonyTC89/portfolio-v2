import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AboutInfo } from '../Info.json';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '2rem auto',
    padding: '2rem',
    background: '#F2F9FF',
    textAlign: 'center',
  },
  title: {
    fontWeight: 400,
    fontSize: '3em',
    margin: '1rem',
    color: theme.palette.primary.dark,
  },
  picture: {
    width: '100%',
  },
  img: {
    width: '60%',
    boxShadow: `0px 10px 15px 0px ${theme.palette.primary.main}`,
  },
  columnText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnImg: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    padding: '0 2rem',
    color: theme.palette.primary.dark,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
    width: '90%',
  },
  list: {
    width: '80%',
    margin: '1rem auto',
  },
  listItem: {
    margin: '0.2rem 0.2rem',
    border: '1px solid #052369',
    padding: '0.3rem 0.5rem',
    borderRadius: '4px',
  },
}));

const AboutHome = () => {
  const classes = useStyles();
  const { about, skills } = AboutInfo;

  return (
    <section className={classes.root} id="about">
      <Typography className={classes.title} variant="h2">
        {about.title}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} className={classes.columnText}>
          <Typography
            className={classes.text}
            component="article"
          >
            {about.text}
          </Typography>
          <div className={classes.list}>
            {skills.map((skill) => (
              <Button
                key={uuidv4()}
                className={classes.listItem}
                variant="outlined"
                color="primary"
              >
                {skill}
              </Button>
            ))}
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.columnImg}>
          <Grow in timeout={2000} appear>
            <picture className={classes.picture}>
              <img className={classes.img} src={about.location} alt={about.key} />
            </picture>
          </Grow>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutHome;
