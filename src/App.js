
import React, { Component } from 'react';
import './App.css';
import FetchStationData from './components/FetchStationData';
import Header from "./components/Header.js";


class App extends Component {
    state = {
      station: []
    }
    



  render() {
    return (
      <div className="App">
        <Header/>
        <div className="Main"></div>
        <FetchStationData />
      </div>
    );
  }
}

export default App;
