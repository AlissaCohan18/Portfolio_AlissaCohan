import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
 
  return (
    <div>
      <Nav
      ></Nav>
     <Header/>
     <Project/>
     <Footer/>
    </div>
  );
}

export default App;
