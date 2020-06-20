import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  big: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    height: window.innerHeight,
    marginTop: window.innerHeight / 3,
  },
  small: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
  },
});

const LoadingGif = ({ visible, home }) => {
  const classes = useStyles();
  if (home) {
    return (
      <picture className={classes.big}>
        <CircularProgress />
      </picture>
    );
  }
  return (
    visible ? (
      <picture className={classes.small}>
        <CircularProgress />
      </picture>
    ) : null
  );
};

LoadingGif.propTypes = {
  visible: PropTypes.bool.isRequired,
  home: PropTypes.bool,
};

LoadingGif.defaultProps = {
  home: false,
};

export default LoadingGif;
