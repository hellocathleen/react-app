import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUserId: null
    };
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
        headers: { 'Content-Type': 'application/json' }
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
      <h1>Login</h1>
        <form onSubmit={this.loginUser} action="/login" method="POST">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" onChange={this.handleChange} /><br/>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" name="password" onChange={this.handleChange} /><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
