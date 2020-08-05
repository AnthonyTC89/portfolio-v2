/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMaps from './GoogleMaps';
import { buttons, ContactInfo } from '../Info.json';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    padding: '5rem 1rem',
    textAlign: 'center',
  },
  background: {
    position: 'absolute',
    top: '0',
    left: '0',
    opacity: '80%',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${ContactInfo.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: '-999',
  },
  title: {
    fontWeight: 400,
    fontSize: '3em',
    margin: '1rem',
  },
  picture: {
    width: '100%',
  },
  columnImg: {
    padding: '0 5rem',
  },
  columnForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    padding: '0 2rem',
  },
}));

const emptyEmail = {
  from_name: '',
  from_email: '',
  to_name: 'AnthonyTC',
  message_html: '',
};

const ContactHome = () => {
  const classes = useStyles();
  const { title, zoom, lat, lng, googleMapsKey, userID, serviceID, templateID } = ContactInfo;
  const { wait, submit } = buttons;
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState(emptyEmail);

  const googleMapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${googleMapsKey}`;
  const containerElement = <div style={{ height: '100%' }} />;
  const mapElement = <div style={{ height: '100%' }} />;
  const loadingElement = <CircularProgress />;

  const handleChange = (e) => {
    e.persist();
    setEmail((prev) => (
      { ...prev, [e.target.name]: e.target.value }
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await emailjs.send(serviceID, templateID, email, userID);
      setMessage('Thank you!');
      setEmail(emptyEmail);
    } catch (err) {
      setMessage('error!');
    } finally {
      setLoading(false);
    }
  };
  return (
    <Slide direction="up" in timeout={1000}>
      <Grid component="section" container className={classes.root}>
        <div className={classes.background} />
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h2">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.columnForm}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              margin="dense"
              name="from_name"
              variant="outlined"
              id="from_name"
              value={email.from_name}
              label="your name (optional)"
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              type="email"
              name="from_email"
              variant="outlined"
              id="from_email"
              value={email.from_email}
              label="email"
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              multiline
              rows="8"
              name="message_html"
              variant="outlined"
              id="message_html"
              value={email.message_html}
              label="type here"
              onChange={handleChange}
              required
            />
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
              color="inherit"
              disabled={loading}
            >
              {loading ? wait : submit}
            </Button>
            {message === null ? null : (
              <Typography variant="caption" className={classes.text}>
                {message}
              </Typography>
            )}
          </form>
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} md={6} className={classes.columnImg}>
            <Grow in timeout={3000}>
              <GoogleMaps
                googleMapURL={googleMapURL}
                containerElement={containerElement}
                mapElement={mapElement}
                loadingElement={loadingElement}
                zoom={zoom}
                lat={parseFloat(lat)}
                lng={parseFloat(lng)}
              />
            </Grow>
          </Grid>
        </Hidden>
      </Grid>
    </Slide>
  );
};

export default ContactHome;
