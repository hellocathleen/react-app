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
      <div className='report'>
          <div className='beach-info'>
            <h3>{ report.name }</h3>
          </div>
          <div className='beach-forecast'>
            { this.state.collapse ? dailyForecast[0] : dailyForecast }
            <div className="collapse">
              <button onClick={ this.onClick }>{ this.state.collapse ? 'More' : 'Less' }</button>
            </div>
          </div>
      </div>
    );
  }
}

export default Report;
