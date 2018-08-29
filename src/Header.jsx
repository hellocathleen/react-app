import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Header extends Component {
  constructor(props){
    super(props);
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
      } 
    })
    .catch((res) => {
      console.log("error", res);
    }); 
  }

  render() {
    return (
      <header>
          <nav>
            <h2><Link to='/'>Surf Buddy</Link></h2>
            <ul>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/register'>Register</Link></li>
              <button type="submit" onClick={this.handleSubmit}>Logout</button>
            </ul>
          </nav>
        </header>
    )
  }
}

export default Header;
