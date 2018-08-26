import React, { Component } from 'react';

class DailyForecast extends Component {
  render() {
    const forecast = this.props.forecast;
    return (
      <div className='daily-forecast'>
        <h4>{ forecast.weekday }</h4>
        <p>Swell: { forecast.swellHeight }</p>
        <p>Wave: { forecast.waveHeight }</p>
      </div>
    );
  }
}

export default DailyForecast;
