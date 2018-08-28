import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
      <h1>Login</h1>
        <form action="/login" method="POST">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" /><br/>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" name="password" /><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
