import React, { Component } from 'react';
import DailyForecast from './DailyForecast.jsx';

class Report extends Component {
  render() {
    const report = this.props.report;
    const forecast = report.stormglass.map((forecast, i) =>
      <DailyForecast key={ i } forecast={ forecast } />
    );

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
