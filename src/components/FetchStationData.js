import React from "react";
import "./FetchStationData.css"


export default class FetchStationData extends React.Component {
  state = {
    loading: true,
    station: null
  };


  async componentDidMount() {
    const url = "https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json";
    const response = await fetch(url, {
      method: 'GET',
      headers: { "Client-Identifier": "mittfirma-reiseplanlegger" }
    });
    const data = await response.json();
    this.setState({ station: data.data.stations, loading: false });
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
              <div>Stasjon id: {station.station_id}</div> <br />
            </li>
        ))}
      </ul>
    );
  }
}