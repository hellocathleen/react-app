import React, { Component } from 'react';

class DailyForecast extends Component {
  render() {
    const surfData = this.props.surfData;
    const date = new Date(Number(this.props.timestamp));
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekday = days[date.getDay()];

    return (
      <div className='daily-forecast'>
        <h4>{ weekday }</h4>
        <p>Wave: { surfData.waveHeight } m | { surfData.wavePeriod } s</p>
        <p>Wind: { surfData.windSpeed } km/h | { surfData.windDirection }°</p>
        <p>Rating: { surfData.surfRating } / 5</p>
      </div>
    );
  }
}

export default DailyForecast;
