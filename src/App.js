
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
        <div class="Main">
        <div class="Data"><FetchStationData/></div>
        <div class="Status"><FetchStationStatus/></div>
        </div>
      </div>
    );
  }
}

export default App;
