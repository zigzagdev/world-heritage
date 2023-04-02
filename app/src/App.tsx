import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Body from "./Body";

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
