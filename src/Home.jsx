import React, { Component } from 'react';
import ReportList from './ReportList.jsx';
import axios from 'axios';
import MyFancyComponent from './MapContainer.jsx';

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
        <body>
        <div id="background">
          <img src="public/images/bw2.png"></img>
        </div>

        <div className="container">
            <div className="circle" id="bell-circle">
              <img id="icon" src="public/images/bell.png"/>
              <span className="notification-hidden">
              Activate Surf Alarms and get notifications 
              when the conditions will be just the way 
              you like them at your favorite spots.</span>
            </div>
            <div className="circle" id="wave-circle">
              <img id="icon" src="public/images/waves.png"/>
              <span className="notification-hidden">
              Compare multiple surf forecasts and increase the 
              chance to be at the right spot at the right time. 
              Find frequently updated forecasts with wind direction 
              and height, wave height and period. We've also included 
              a rating system for those new to reading forecasts.
              Have we missed 
              your favorite forecast source? Let us know!</span>
            </div>
            <div className="circle" id="avatar-circle">
              <img id="icon" src="public/images/avatar.png"/>
              <span className="notification-hidden">
              Add your own personal preferences to get forecasts and set 
              up Surf Alarms when you want.</span>
            </div>
          </div>

        <MyFancyComponent reports={ this.state.reports }/> 
        <h2>Surf Forecast</h2>
          <ReportList reports={ this.state.reports } />
      </body>
    )
  }
}

export default Home;
