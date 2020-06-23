import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grow from '@material-ui/core/Grow';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ProjectsInfo, UrlIcons } from '../Info.json';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4rem 1rem',
    background: '#F2F9FF',
    textAlign: 'center',
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
    maxHeight: '20rem',
    maxWidth: '90%',
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

const AboutHome = () => {
  const classes = useStyles();
  const { title, projects } = ProjectsInfo;
  return (
    <Slide direction="up" in timeout={1000}>
      <Grid component="section" container className={classes.root}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h2">
            {title}
          </Typography>
        </Grid>
        {projects.map((item) => (
          <Grid container key={uuidv4()} component="article" className={classes.row}>
            <Hidden mdUp>
              <Grid item xs={12}>
                <Typography className={classes.links} variant="h2">
                  <Link className={classes.subtitle} href={item.live} target="_blank" rel="noreferrer">
                    {item.title}
                  </Link>
                  <Link className={classes.caption} href={item.source} target="_blank" rel="noreferrer">
                    Source
                  </Link>
                </Typography>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={6} className={classes.columnImg}>
              <Grow in timeout={3000}>
                <picture className={classes.picture}>
                  <img className={classes.img} src={item.screenshots[0]} alt="screenshot" />
                </picture>
              </Grow>
            </Grid>
            <Grid item xs={12} md={6} className={classes.columnInfo}>
              <Hidden smDown>
                <Typography className={classes.links} variant="h2">
                  <Link className={classes.subtitle} href={item.live} target="_blank" rel="noreferrer">
                    {item.title}
                  </Link>
                  <Link className={classes.caption} href={item.source} target="_blank" rel="noreferrer">
                    Source
                  </Link>
                </Typography>
              </Hidden>
              <ul className={classes.iconList}>
                {item.skills.map((skill) => (
                  <li key={uuidv4()}>
                    <img src={UrlIcons[skill]} alt="icon-skill" className={classes.icon} />
                  </li>
                ))}
              </ul>
              <Typography className={classes.text} variant="body1">
                {item.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Slide>
  );
};

export default AboutHome;
