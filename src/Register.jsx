import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div>
      <h1>Register</h1>
      <form action="/register" method="POST">
        <label for="first_name">First name:</label>
        <input id="first_name" name="first_name" /><br/>
        <label for="last_name">Last name:</label>
        <input id="last_name" name="last_name" /><br/>
        <label for="email">Email:</label>
        <input id="email" type="email" name="email" /><br/>
        <label for="phone">Phone number:</label>
        <input id="phone" type="tel" name="phone" /><br/>
        <label for="password">Password:</label>
        <input id="password" type="password" name="password" /><br/>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Register;
