import React, { Component } from 'react';
import DailyForecast from './DailyForecast.jsx';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    };
    this.buildForecast = this.buildForecast.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ collapse: !this.state.collapse });
  }

  buildForecast(data) {
    return data.reduce((obj, datum) => {
      const key = Object.keys(datum)[0];
      const date = new Date(Number(key)).toDateString();

      if (!obj[date]) {
        obj[date] = [];
      }

      obj[date].push(datum);

      return obj;
    }, {});
  }

  render() {
    const { report } = this.props;
    const builtForecast = this.buildForecast(report.stormglass);
    const dailyForecast = [];
    for (let key in builtForecast) {
      dailyForecast.push(<DailyForecast key={ key } timestamp={ key } surfData={ builtForecast[key] } />)
    }

    return (
      <div className='forecast-card'>
        <div className='beach-info'>
          <h3>{ report.name }</h3>
          <h5>Surf forecast</h5>
        </div>
        <div className='report'>
          <div className='beach-forecast'>
            { this.state.collapse ? dailyForecast[0] : dailyForecast }
          </div>
        </div>
        <div className="collapse">
          <button onClick={ this.onClick }>{ this.state.collapse ? '\u02C5' : '\u02C4' }</button>
        </div>
      </div>
    );
  }
}

export default Report;
