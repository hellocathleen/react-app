import React, { Component } from 'react';
import HourlyForecast from './HourlyForecast.jsx';

class DailyForecast extends Component {
  render() {
    const { surfData, timestamp } = this.props;

    const hourlyForecast = surfData.map((data, i) => {
      return <HourlyForecast key={ i } surfData={ data } />
    });

    return (
      <div className='daily-forecast'>
        <h3 className='date'>{ timestamp }</h3>
        <div className='hourly-forecast'>
          { hourlyForecast }
        </div>
      </div>
    );
  }
}

export default DailyForecast;
