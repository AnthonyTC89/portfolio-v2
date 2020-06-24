import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { EducationInfo } from '../Info.json';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4rem 1rem',
    background: '#F2F9FF',
    textAlign: 'center',
    minHeight: window.innerHeight - 109,
  },
  title: {
    fontWeight: 400,
    fontSize: '3em',
    margin: '1rem',
    color: theme.palette.primary.dark,
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subtitle: {
    fontWeight: 300,
    fontSize: '2rem',
    margin: '1rem',
    color: 'black',
  },
  caption: {
    fontSize: '1rem',
  },
  picture: {
    width: '100%',
  },
  img: {
    boxShadow: `0px 10px 15px 0px ${theme.palette.primary.main}`,
    maxHeight: '5rem',
    maxWidth: '90%',
    margin: '1rem',
  },
  columnInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  columnImg: {
    padding: '1rem 1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: '1rem',
    display: 'flex',
  },
  iconList: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: '0 1rem',
  },
  icon: {
    width: '2rem',
  },
}));

const EducationHome = () => {
  const classes = useStyles();
  const { title, education } = EducationInfo;
  return (
    <Slide direction="up" in timeout={1000}>
      <Grid component="section" container className={classes.root}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h2">
            {title}
          </Typography>
        </Grid>
        {education.map((item) => (
          <Grid key={uuidv4()} item xs={12} md={6} component="article">
            <Typography variant="caption">
              {item.date}
            </Typography>
            <Typography variant="h4">
              <Link className={classes.subtitle} href={item.href} target="_blank" rel="noreferrer">
                {item.institution}
              </Link>
            </Typography>
            <Grow in timeout={3000}>
              <picture className={classes.picture}>
                <img className={classes.img} src={item.image} alt={item.institution} />
              </picture>
            </Grow>
            <Typography variant="h6">
              {item.grade}
            </Typography>
            <Typography variant="body2">
              {item.goals}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Slide>
  );
};

export default EducationHome;
