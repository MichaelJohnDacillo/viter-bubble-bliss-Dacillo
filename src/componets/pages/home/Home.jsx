import React from 'react'
import Header from '../../partials/Header';
import Banner from './banner/Banner';
import Types from './types/Types';
import Toppings from './toppings/Toppings';
import Benifits from './benifits/Benefits';
import Contact from './contact/Contact';
import Footer from '../../partials/Footer';

// 🧋

const Home = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <Types/>
        <Toppings/>
        <Benifits/>
        <Contact/>
        <Footer/>
    </>
  );
};

export default Home;