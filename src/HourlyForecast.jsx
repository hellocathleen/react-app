import React, { Component } from 'react';
import WaveIcon from './WaveIcon.jsx';
import WindIcon from './WindIcon.jsx';
import ArrowIcon from './ArrowIcon.jsx';
import SurfRating from './SurfRating.jsx';

class HourlyForecast extends Component {
  render() {
    const { surfData } = this.props;
    const key = Object.keys(surfData)[0];
    const hour = new Date(Number(key)).getHours();
    const time = hour === 0 ? '12 AM' : hour < 12 ? hour + ' AM' : (hour - 12) + ' PM';

    let starRating = [];
    for (let i = 0; i < surfData[key].surfRating; i++) {
      starRating.push(<SurfRating key={ i }/>);
    }

    return (
      <div className='hourly-forecast'>
        <h4>{ time }</h4>
        <WaveIcon />
        <span className='wave-data'>{ (Math.round(surfData[key].waveHeight * 10) / 10).toFixed(1) } m </span>
        <span className='wave-data'>{ Math.round(surfData[key].wavePeriod) } s </span>
        <WindIcon />
        <span className='wind-data'>{ Math.round(surfData[key].windSpeed) } km/h </span>
        <ArrowIcon windDirection={ surfData[key].windDirection }/>
        <div className='surf-rating'>{ starRating }</div>
      </div>
    );
  }
}

export default HourlyForecast;
