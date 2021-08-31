
import React, { Component } from 'react';
import './App.css';
import FetchStationStatus from "./components/FetchStationStatus.js";
import FetchStationData from './components/FetchStationData';
import Header from "./components/Header.js";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="Main">
        <div className="Data"><FetchStationData/></div>
        <div className="Status"><FetchStationStatus/></div>
        </div>
      </div>
    );
  }
}

export default App;
