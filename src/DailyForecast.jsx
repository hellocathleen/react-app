import React, { Component } from 'react';
import WaveIcon from './WaveIcon.jsx';
import WindIcon from './WindIcon.jsx';
import SurfRating from './SurfRating.jsx';

class DailyForecast extends Component {
  render() {
    const { surfData, timestamp } = this.props;
    const hour = new Date(Number(timestamp)).getHours();
    const time = hour === 0 ? '12 AM' : hour < 12 ? hour + ' AM' : (hour - 12) + ' PM';

    let starRating = [];
    for (let i = 0; i < surfData.surfRating; i++) {
      starRating.push(<SurfRating key={ i }/>);
    }

    return (
      <div className='hourly-forecast'>
        <h4>{ time }</h4>
        <WaveIcon />
        <span className='wave-data'>{ (Math.round(surfData.waveHeight * 10) / 10).toFixed(1) } m </span>
        <span className='wave-data'>{ Math.round(surfData.wavePeriod) } s </span>
        <WindIcon />
        <span className='wind-data'>{ Math.round(surfData.windSpeed) } km/h </span>
        <span className='wind-data'>{ Math.round(surfData.windDirection) }° </span>
        <div className='surf-rating'>{ starRating }</div>
      </div>
    );
  }
}

export default DailyForecast;
