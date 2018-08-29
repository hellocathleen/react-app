import React, { Component } from 'react';
import Report from './Report.jsx';

class ReportList extends Component {
  render() {
    const beachReports = this.props.reports;
    const reportList = beachReports.map(report =>
      <Report key={ report.id } report={ report } />
    );

    return (
      <div className='beach-reports'>
        { reportList }
      </div>
    );
  }
}

export default ReportList;
