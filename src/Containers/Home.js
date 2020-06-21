import React from 'react';
// import PropTypes from 'prop-types';
import Navbar from '../Components/Navbar';
import BannerShow from '../Components/BannerShow';
import AboutHome from '../Components/AboutHome';

const Home = () => (
  <body>
    <Navbar />
    <main>
      <BannerShow />
      <AboutHome />
    </main>
  </body>
);

export default Home;
