/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

const GoogleMaps = ({ zoom, lat, lng }) => (
  <GoogleMap defaultZoom={zoom} defaultCenter={{ lat, lng }}>
    <Marker position={{ lat, lng }} />
  </GoogleMap>
);

GoogleMaps.propTypes = {
  zoom: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default withScriptjs(withGoogleMap(GoogleMaps));
