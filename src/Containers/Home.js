import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import BannerHome from '../Components/BannerHome';
import Footer from '../Components/Footer';

const Home = () => {
  const [Component, setComponent] = useState(<BannerHome />);
  return (
    <>
      <Navbar setComponent={setComponent} />
      <main>
        {Component}
      </main>
      {Component.type.name === 'Banner' ? null : <Footer />}
    </>
  );
};

export default Home;
