import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FooterInfo } from '../Info.json';

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '1rem',
    bottom: 0,
    width: '100%',
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: '0',
    left: '0',
    opacity: '90%',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${FooterInfo.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: '-999',
  },
  list: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '2rem',
    margin: '0.5rem',
  },
});

const Footer = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();
  const { authorName, copyright, socialNetworks } = FooterInfo;

  return (
    <footer className={classes.footer}>
      <CssBaseline />
      <div className={classes.background} />
      {socialNetworks.length === 0 ? null : (
        <div className={classes.list}>
          {socialNetworks.map((item) => (
            <a
              key={uuidv4()}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.icon} src={item.src} alt={`${item.name}-icon`} />
            </a>
          ))}
        </div>
      )}
      <Container maxWidth="sm">
        <Typography variant="body2" align="center">
          {`${year} © ${authorName}` }
        </Typography>
        <Typography variant="body2" align="center">
          {copyright}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
