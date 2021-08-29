import React from "react";
import "./FetchStationData.css"


export default class FetchStationData extends React.Component {
  state = {
    loading: true,
    station: null
  };


  async componentDidMount() {
    const url = "https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json";
    const response = await fetch(url);
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
      <div>
        {this.state.station.map((station) => (
            <ul key={station.station_id}>
              <div style={{fontWeight: "bold"}}>Name: {station.name}</div>
              <div>Stasjon id: {station.station_id}</div>
            </ul>
        ))}
      </div>
    );
  }
}