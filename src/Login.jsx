import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      
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
    console.log("STATE:", this.state)
  }

  loginUser(event) {
    event.preventDefault();
    const element = event.target.elements;
    const user = { email: element.email.value, 
      password: element.password.value
    }
    console.log(user)
    axios.post(`http://localhost:8080/login`, user, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })
      .then(res => {
        console.log("res.data:", res.data);
        if (res.data === "Wrong password") {
          alert("Wrong password")
        } else if (res.data === "No email") {
          alert("Enter your email")
        } else {
          console.log("You're logged in")
          element.email.value = null;
          element.password.value = null;
          this.props.history.push("/");
        }
      })
      .catch((res) => {
        console.log("error", res);
      }); 
    
  }
  render() {
    return (
      <div>
        <img id="background" src="public/images/wave.png"></img>
        <div className="login-register-container">
          <div className="login-form">
            <form onSubmit={this.loginUser} action="/login" method="POST">
              <label htmlFor="email"></label>
              <input id="email" type="email" name="email" placeholder="Email" onChange={this.handleChange} /><br/>
              <label htmlFor="password"></label>
              <input id="password" type="password" placeholder="Password" name="password" onChange={this.handleChange} /><br/>
              <input id="login-input" type="submit" value="Log in" />
              <p>Don't have an account?</p><br/>
              <a id="register" href="/register">Register</a>
            </form>
            </div>
      </div>
    </div>
      
    );
  }
}

export default Login;
