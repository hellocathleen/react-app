import React, { Component } from 'react';
import WaveIcon from './WaveIcon.jsx';
import WindIcon from './WindIcon.jsx';
import SurfRating from './SurfRating.jsx';

class DailyForecast extends Component {
  render() {
    const surfData = this.props.surfData;
    let date = new Date(Number(this.props.timestamp)).toUTCString();
    let idx = date.indexOf('201');
    date = date.slice(0, idx);

    let starRating = [];
    for (let i = 0; i < surfData.surfRating; i++) {
      starRating.push(<SurfRating key={ i }/>);
    }

    return (
      <div className='daily-forecast'>
        <h4>{ date }</h4>
        <div className='wave-div'>
          <WaveIcon />
          <span className='wave-data'>{ surfData.waveHeight } m &nbsp;&nbsp; { Math.round(surfData.wavePeriod) } s</span>
        </div>
        <div className='wind-div'>
          <WindIcon />
          <span className='wind-data'>{ Math.round(surfData.windSpeed) } km/h &nbsp; { surfData.windDirection }°</span>
        </div>
        <div className='surf-rating'>{ starRating }</div>
      </div>
    );
  }
}

export default DailyForecast;
