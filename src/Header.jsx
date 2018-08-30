import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: localStorage.getItem('name')
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    axios.post(`http://localhost:8080/logout`, {
     headers: {'Content-Type': 'application/x-www-form-urlencoded' },
      withCredentials: true
    }).then(res => {
      console.log("res.data:", res.data);
      if (res.data === "Logged out") {
        alert("You are logged out!")
        localStorage.clear();
        window.location.reload();
      } 
    })
    .catch((res) => {
      console.log("error", res);
    }); 
  }

  render() {
    let greeting;
    let profileLink;
    let loginLink;
    const userId = localStorage.getItem('id')
    if (this.state.name) {
      greeting = <h2>Hey, {this.state.name}. Ready to hit the waves? </h2>
      profileLink = <Link className="profile" to={`/user/${userId}`}>Profile</Link>
      loginLink = <button className="logout" type="submit" onClick={this.handleSubmit}>Logout</button>
    }
    if (!this.state.name) {
      loginLink = <div><Link className="login" to='/login'>Login</Link>
                  <Link className="register" to='/register'>Register</Link></div>
    }
    return (
      <header>
          <nav>
            <div>
            {loginLink}
            {greeting}
            {profileLink}
            </div>
            <h2><Link className="title" to='/'>POINT <br />BREAK</Link></h2>
          </nav>
      </header>
    )
  }
}

export default Header;
