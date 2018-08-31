import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';


class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      beaches: [],
      favBeaches: [],
      redirectToHome: false,
      notification: "email"
    };
    this.addUser = this.addUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/beaches`)
      .then((res) => {
        const beaches = res.data;
        this.setState({ beaches });
      })
  };

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    console.log("State:", this.state)
  }

  addUser(event) {
    event.preventDefault();
    const element = event.target.elements;
    const favBeaches = [];
    const checks = document.getElementsByClassName('checks')
    for (let i = 0; i < checks.length; i++) {
      if (checks[i].checked === true) {
        favBeaches.push(checks[i].name)
      }
    }
    const user = {first_name: element.first_name.value, 
                  last_name: element.last_name.value, 
                  email: element.email.value, 
                  phone_number: element.phone_number.value, 
                  password: element.password.value,
                  notification_type: element.notification.value,
                  favBeaches: favBeaches}

    axios.post(`http://localhost:8080/register`, user, {
      headers: { 'Content-Type': 'application/json'},
      withCredentials: true
    })
    .then(res => {
      console.log("res.data:", res.data);
      if (res.data === "Already registered") {
        alert("Email already registered!")
      } else if (res.data === "Fill out all the forms!") {
        alert("Fill out all the forms!")
      } else {
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
        <img id="background-register" src="public/images/beach2.png"></img>
        <div className="login-register-container">  
          <p>Start getting notifications</p>
          <form onSubmit={this.addUser} action="/register" method="POST">
            <label htmlFor="first_name" ></label>
            <input id="first_name" name="first_name" placeholder="First name" onChange={this.handleChange} /><br/>
            <label htmlFor="last_name"></label>
            <input id="last_name" placeholder="Last name" name="last_name" onChange={this.handleChange} /><br/>
            <label htmlFor="email"></label>
            <input id="email" type="email" name="email" placeholder="Email" onChange={this.handleChange} /><br/>
            <label htmlFor="phone"></label>
            <input id="phone" type="tel" name="phone_number" placeholder="Phone Number" onChange={this.handleChange} /><br/>
            <label htmlFor="password"></label>
            <input id="password" type="password" name="password" placeholder="Password" onChange={this.handleChange} /><br/>
            <br/>

            <label>Select your favorite beaches</label>
                {this.state.beaches.map((beach) => {
                  return <div key={beach.id}><input type="checkbox" className="checks" name={beach.name} onChange={this.handleChange} /><label>{beach.name}</label></div>
                    })}
              <br/>
              <label>Notification Type</label><br/>
              <select value={this.state.notification} name="notification" onChange={this.handleChange}>
                <option value="email">Email</option>
                <option value="text">Text</option>
              </select><br/>
              <button id="register" type="submit">Register</button>
          </form>
        </div>
        <div className="info">
          <p>Register with Point Break</p>
          <p>Getting started is easy. Fill in our 
            register<br/> form and select the beaches you 
            wish to<br/> receive surf notifications for.</p>
            <p><br/>Already have an account?</p>
            <div>
            <Link id="link" to='/login'>Log in</Link>
            <Link id="link" to='/'>Return</Link>  
            </div>
        </div>
      </div>
    );
  }
}

export default Register;
