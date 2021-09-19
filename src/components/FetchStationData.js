import React from "react";
import "./FetchStationData.css"


export default class FetchStationData extends React.Component {
  state = {
    loading: true,
    station: null
  };


  async componentDidMount() {
    const url = " http://localhost:8080/api/v1/stations/";
    const response = await fetch(url, {
      method: 'GET',
      headers: { "Client-Identifier": "mittfirma-reiseplanlegger" }
    });
    const data = await response.json();
    console.log(data)
    this.setState({ station: data, loading: false });
  }
  

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.station.length) {
      return <div>didn't get a station</div>;
    }

    return (
      <ul>
        {this.state.station.map((station) => (
            <li key={station.station_id}>
              <div style={{fontWeight: "bold"}}>Navn: {station.name}</div>
              <div>Stasjon Id: {station.station_id}</div> <br />
              <div>Ledige Sykler: {station.numBikesAvailable}</div> <br />
              <div>Ledige Docks: {station.numDockAvailable}</div> <br />
            </li>
            
        ))}
      </ul>
    );
  }
}