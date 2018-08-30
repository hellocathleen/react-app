import React, { Component } from 'react';
import DailyForecast from './DailyForecast.jsx';

class Report extends Component {
  render() {
    const report = this.props.report;
    const fiveDayForecast = report.stormglass.slice(0, 5);

    const forecast = fiveDayForecast.map((obj, i) => {
      const timestamp = Object.keys(obj)[0];
      const surfData = obj[timestamp];

      return <DailyForecast key={ i } timestamp={ timestamp } surfData={ surfData } />
    });

    return (
      <div className='report'>
        <div className='beach-info'>
          <h3>{ report.name }</h3>
          <p>Lat: { report.latitude }</p>
          <p>Lng: { report.longitude }</p>
        </div>
        <div className='beach-forecast'>
          { forecast }
        </div>
      </div>
    );
  }
}

export default Report;
