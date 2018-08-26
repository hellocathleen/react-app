import React, { Component } from 'react';

class Report extends Component {
  render() {
    const report = this.props.report;

    return (
      <div className='report'>
        <div className='beach-info'>
          <h3>{ report.name }</h3>
          <p>Lat: { report.latitude }</p>
          <p>Lng: { report.longitude }</p>
        </div>
      </div>
    );
  }
}

export default Report;
