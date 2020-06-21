import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Navbar from '../Components/Navbar';
import BannerHome from '../Components/BannerHome';

const Home = () => {
  const [Component, setComponent] = useState(<BannerHome />);
  return (
    <>
      <Navbar setComponent={setComponent} />
      <main>
        {Component}
      </main>
    </>
  );
};

export default Home;
