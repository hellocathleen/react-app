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
    if (this.state.name) {
      greeting = <h2>Hey, {this.state.name}. Ready to hit the waves? </h2>
    }
    const userId = localStorage.getItem('id')
    return (
      <header>
          <nav>
            <h2><Link to='/'>Surf Buddy</Link></h2>
            <ul>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/register'>Register</Link></li>
              <li><Link to={`/user/${userId}`}>Profile</Link></li>
              <button type="submit" onClick={this.handleSubmit}>Logout</button>
              {greeting}
            </ul>
          </nav>
        </header>
    )
  }
}

export default Header;
