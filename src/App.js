import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Products from './components/Prdoucts';
import { productData } from './components/Prdoucts/data';
import { Globalstyle } from './globalStyle';

function App() {
  return (
    <Router>
       <Globalstyle />
       <Hero />
       <Products heading='Choose your favorite' data={productData} />
       <Feature />
       <Footer />
    </Router>
  );
}

export default App;
