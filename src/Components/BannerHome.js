import React from 'react';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { BannerInfo } from '../Info.json';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    maxHeight: window.innerHeight,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    width: '100%',
  },
  img: {
    height: window.innerHeight,
  },
  text: {
    position: 'absolute',
    top: '33%',
    left: '49%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'aliceblue',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '8vw',
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: '4.8vw',
  },
  body: {
    fontWeight: 'bold',
    fontSize: '3.2vw',
  },
  caption: {
    fontWeight: 'bold',
    fontSize: '1.6vw',
  },
});

const Banner = () => {
  const classes = useStyles();
  const { banner } = BannerInfo;

  return (
    <Grow in timeout={2500}>
      <section className={classes.root}>
        <picture className={classes.picture}>
          <img className={classes.img} src={banner.location} alt={banner.key} />
        </picture>
        <div className={classes.text}>
          {banner.subtitle.trim() === '' ? null : (
            <Typography className={classes.subtitle} variant="subtitle2" gutterBottom>
              {banner.subtitle}
            </Typography>
          )}
          {banner.title.trim() === '' ? null : (
            <Typography className={classes.title} variant="h2" gutterBottom>
              {banner.title}
            </Typography>
          )}
          {banner.body.trim() === '' ? null : (
            <Typography className={classes.body} variant="body1" gutterBottom>
              {banner.body}
            </Typography>
          )}
          {banner.caption.trim() === '' ? null : (
            <Typography className={classes.caption} variant="caption" gutterBottom>
              {banner.caption}
            </Typography>
          )}
        </div>
      </section>
    </Grow>
  );
};

export default Banner;
