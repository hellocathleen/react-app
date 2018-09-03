import React, { Component } from 'react';
import DailyForecast from './DailyForecast.jsx';

class Report extends Component {
  constructor(props) {
    super(props);
    this.buildForecast = this.buildForecast.bind(this);
  }

  buildForecast(data) {
    return data.reduce((obj, datum) => {
      const key = Object.keys(datum)[0];
      const date = new Date(Number(key)).toDateString();

      if (!obj[date]) {
        obj[date] = [];
      }

      obj[date].push(datum);

      return obj;
    }, {});
  }

  render() {
    const { report } = this.props;
    const builtForecast = this.buildForecast(report.stormglass);
    const dailyForecast = [];
    for (let key in builtForecast) {
      dailyForecast.push(<DailyForecast key={ key } timestamp={ key } surfData={ builtForecast[key] } />)
    }

    return (
      <div className='report'>
        <div className='beach-info'>
          <h3>{ report.name }</h3>
          <p>Lat: { report.latitude }</p>
          <p>Lng: { report.longitude }</p>
        </div>
        <div id="report-header">
          <h4>Time</h4>
          <h4>icon</h4>
          <h4>Wave Height</h4>
          <h4>Wave period</h4>
          <h4>icon</h4>
          <h4>Wind Speed</h4>
          <h4>Wave Direction</h4>
          <h4>Swell Rating</h4>
        </div> 
        <div className='beach-forecast'>
          { dailyForecast }
        </div>
      </div>
    );
  }
}

export default Report;
