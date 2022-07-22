import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Cta, Brand, Navbar, Contact } from './components';
import { Artworks, Footer, Header } from './containers';

const App = () => {
  return (
    <div className="App">
      <div className="body">
        <Navbar />
        <Header />
      </div>
      <Artworks />
      <Brand />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
