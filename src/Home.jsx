import React, { Component } from 'react';
import ReportList from './ReportList.jsx';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/beaches')
      .then(response => {
        console.log(response);
        this.setState({ reports: response.data });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>Surf Forecast</h2>
        <ReportList reports={ this.state.reports } />
      </div>
    )
  }
}

export default Home;
