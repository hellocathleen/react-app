import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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
