import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { buttons, ContactInfo } from '../Info.json';

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
  picture: {
    width: '100%',
  },
  img: {
    width: '70%',
    boxShadow: `0px 10px 15px 0px ${theme.palette.primary.main}`,
  },
  columnImg: {
    padding: '1rem 1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: theme.palette.success.dark,
  },
}));

const emptyEmail = {
  from: '',
  body: '',
};

const ContactHome = () => {
  const classes = useStyles();
  const { title, image } = ContactInfo;
  const { wait, submit } = buttons;
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState(emptyEmail);

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
      await new Promise((resolve) => setTimeout(resolve, 2000));
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
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h2">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.columnImg}>
          <Grow in timeout={3000}>
            <picture className={classes.picture}>
              <img className={classes.img} src={image.location} alt={image.key} />
            </picture>
          </Grow>
        </Grid>
        <Grid item xs={12} md={6} className={classes.columnForm}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              margin="dense"
              name="from"
              variant="outlined"
              id="from"
              value={email.from}
              label="email"
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              multiline
              rows="8"
              name="body"
              variant="outlined"
              id="body"
              value={email.body}
              label="body"
              onChange={handleChange}
            />
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
              color="primary"
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
      </Grid>
    </Slide>
  );
};

export default ContactHome;
