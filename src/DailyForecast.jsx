import React, { Component } from 'react';
import HourlyForecast from './HourlyForecast.jsx';

class DailyForecast extends Component {
  render() {
    const { surfData, timestamp } = this.props;
    const year = timestamp.match(/\b20\d\d\b/);
    const date = timestamp.slice(0, timestamp.indexOf(year));

    const hourlyForecast = surfData.map((data, i) => {
      return <HourlyForecast key={ i } surfData={ data } />
    });

    return (
      <div className='daily-forecast'>
        <div className='forecast-header'>
          <h3 className='date'>{ date }</h3>
          <span>Swell</span>
          <span>Height</span>
          <span>Period</span>
          <span>Wind</span>
          <span>Speed</span>
          <span>Direction</span>
          <span>Rating</span>
        </div>
        <div>
          { hourlyForecast }
        </div>
      </div>
    );
  }
}

export default DailyForecast;
