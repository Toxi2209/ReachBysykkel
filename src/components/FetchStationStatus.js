import React from "react";
import "./FetchStationStatus.css"



export default class FetchStationStatus extends React.Component {
  state = {
    loading: true,
    station: null
  };


  async componentDidMount() {
    const url = "https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json";
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
                <div>Ledige Låser: {station.num_docks_available} </div>
               <div> Ledige Sykler: {station.num_bikes_available} </div> <br />
            </li>
        ))}
      </ul>
    );
  }
}