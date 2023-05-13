import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Portfolio from './component/Portfolio/Portfolio';
import Contacts from './component/Contacts/Contacts';


function App() {
  return (
    <div className="App">
    <Header />
    <About  />
    <Skills />
    <Portfolio />
    <Contacts />
    </div>
  );
}

export default App;
