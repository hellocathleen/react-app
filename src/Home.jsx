import React, { Component } from 'react';
import ReportList from './ReportList.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [
        {
          id: 1,
          name: "French Beach",
          longitude: "-123.95",
          latitude: "48.39",
          stormglass: [
        {
          weekday: "Saturday",
          swellHeight: 0.05,
          waveHeight: 0.07
        },
        {
          weekday: "Sunday",
          swellHeight: 0.15,
          waveHeight: 0.3
        },
        {
          weekday: "Monday",
          swellHeight: 0.1,
          waveHeight: 0.15
        },
        {
          weekday: "Tuesday",
          swellHeight: 0.02,
          waveHeight: 0.03
        },
        {
          weekday: "Wednesday",
          swellHeight: 0.03,
          waveHeight: 0.04
        },
        {
          weekday: "Thursday",
          swellHeight: 0.05,
          waveHeight: 0.31
        }
        ],
          created_at: null,
          updated_at: "2018-08-25T21:45:47.567Z"
        },
        {
          id: 3,
          name: "China Beach",
          longitude: "-124.09",
          latitude: "48.43",
          stormglass: [
        {
          weekday: "Saturday",
          swellHeight: 1.35,
          waveHeight: 1.4
        },
        {
          weekday: "Sunday",
          swellHeight: 1.12,
          waveHeight: 1.18
        },
        {
          weekday: "Monday",
          swellHeight: 1.64,
          waveHeight: 1.67
        },
        {
          weekday: "Tuesday",
          swellHeight: 1.62,
          waveHeight: 1.66
        },
        {
          weekday: "Wednesday",
          swellHeight: 1.46,
          waveHeight: 1.47
        },
        {
          weekday: "Thursday",
          swellHeight: 1.18,
          waveHeight: 1.57
        }
        ],
          created_at: null,
          updated_at: "2018-08-25T21:45:47.997Z"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <ReportList reports={ this.state.reports } />
      </div>
    )
  }
}

export default Home;
