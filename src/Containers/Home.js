import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import AboutHome from '../Components/AboutHome';
import Footer from '../Components/Footer';

const Home = () => {
  const [Component, setComponent] = useState(<AboutHome />);
  return (
    <>
      <Navbar setComponent={setComponent} />
      <main>
        {Component}
      </main>
      <Footer />
    </>
  );
};

export default Home;
