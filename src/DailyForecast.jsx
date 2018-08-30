import React, { Component } from 'react';
import WaveIcon from './WaveIcon.jsx';
import WindIcon from './WindIcon.jsx';
import SurfRating from './SurfRating.jsx';

class DailyForecast extends Component {
  render() {
    const surfData = this.props.surfData;
    const date = new Date(Number(this.props.timestamp));
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekday = days[date.getDay()];
    let rating = [];

    for (let i = 0; i < surfData.surfRating; i++) {
      rating.push(<SurfRating key={ i }/>);
    }

    return (
      <div className='daily-forecast'>
        <h4>{ weekday }</h4>
        <p><WaveIcon /> { surfData.waveHeight } m &nbsp;&nbsp; { Math.round(surfData.wavePeriod) } s</p>
        <p><WindIcon /> { Math.round(surfData.windSpeed) } km/h &nbsp; { surfData.windDirection }°</p>
        <p>{ rating }</p>
      </div>
    );
  }
}

export default DailyForecast;
