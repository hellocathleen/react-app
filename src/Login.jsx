import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirectToHome: false
    }
    this.loginUser = this.loginUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  loginUser(event) {
    event.preventDefault();
    const element = event.target.elements;
    const user = { email: element.email.value, 
      password: element.password.value
    }
    console.log(user)
    axios.post(`https://point-break-server.herokuapp.com/login`, user, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })
      .then(res => {
        console.log("res.data:", res.data);
        if (res.data === "Wrong password") {
          alert("Wrong password")
        } else if (res.data === "No email") {
          alert("Enter your email")
        } else if (res.data === "Email not registered") {
          alert("Email not registered")
        } else {
          console.log("You're logged in")
          element.email.value = null;
          element.password.value = null;
          const name = res.data[0].first_name
          const id = res.data[0].id
          const email = res.data[0].email
          localStorage.setItem('name', name);
          localStorage.setItem('id', id)
          localStorage.setItem('email', email)
          this.setState(() => ({
            redirectToHome: true
          }))
        }
      })
      .catch((res) => {
        console.log("error", res);
      }); 
    
  }
  render() {
    if (this.state.redirectToHome === true) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <img id="background" src="public/images/wave.png"></img>
        <div className="login-container">
          <div className="login-form">
            <form onSubmit={this.loginUser} action="/login" method="POST">
              <label htmlFor="email"></label>
              <input id="email" type="email" name="email" placeholder="Email" onChange={this.handleChange} /><br/>
              <label htmlFor="password"></label>
              <input id="password" type="password" placeholder="Password" name="password" onChange={this.handleChange} /><br/>
              <input id="login-input" type="submit" value="Log in" />
              <p>Don't have an account?</p>
              <Link id="register" to='/register'>Register</Link>
            </form>
            </div>
      </div>
      <div className="info">
          <p>Welcome back to Point Break</p>
          <p>There are predefined Surf Alarms for<br/> 
            all beaches that are helpful for the spots<br/> 
             you are not familiar with or if you are new<br/> 
              to the fine art of reading forecasts.</p><br/>
              <p>     It's possible to set up Surf Alarms 
            for each <br/>beach, which means you can have one alarm<br/> 
            telling you when it's time to pack your longboard<br/> 
            and head to Cox Bay and another one letting<br/> you 
            know to take the weekend off and<br/> hike into Bear Beach.</p><br/>
            <div>
            <Link id="link" to='/'>Return</Link>  
            </div>
        </div>
    </div>
    );
  }
}

export default Login;
