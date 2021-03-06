import React, { Component } from 'react';
import Header from './Header.jsx';
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
    axios.get('https://point-break-server.herokuapp.com/api/beaches')
      .then(response => {
        console.log(response);
        this.setState({ reports: response.data });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
      <Header />
        <div>
          <img id="background" src="public/images/bw2.png"></img>
        </div>

        <div className="container">
            <div className="circle" id="bell-circle">
              <img id="icon" src="public/images/bell.png"/>
              <span className="notification-hidden">
                Never miss a day on the water again. Activate 
                Surf Alarms and get notifications when the 
                conditions will be just the way you like them 
                at your favourite spots. Point Break sends 
                you an email or sms message when our forecast 
                predicts a day coming that you don’t want to miss.
              </span>
            </div>
            <div className="circle" id="wave-circle">
              <img id="icon" src="public/images/waves.png"/>
              <span className="notification-hidden">
              Compare multiple surf forecasts and increase the
              chance to be at the right spot at the right time.
              Find frequently updated forecasts with wind direction
              and height, wave height and period. We've also included
              a rating system for those new to reading forecasts.
              Have we missed your favorite forecast source? Let us know!</span>
            </div>
            <div className="circle" id="avatar-circle">
              <img id="icon" src="public/images/avatar.png"/>
              <span className="notification-hidden">
                Register with Point Break to stay in the loop! Add your own 
                personal preferences to get today’s and 
                upcoming surf forecasts. Receive notifications 
                for beaches of your choosing by selecting the 
                beach on registration. Add or remove any beaches 
                from your notifications email or sms at anytime 
                by editing your profile.
              </span>
            </div>
            <a id="down" href="#forecast">
            <span className="down-hidden">
              Check out today's forecast</span>
          <img id="icon-down" src="public/images/down-arrow.png"/></a>
          </div>
        <a name="forecast"></a>
        <MyFancyComponent reports={ this.state.reports }/>
        <ReportList reports={ this.state.reports } />
        </div>
    )
  }
}

export default Home;
