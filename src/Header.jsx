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
          <ul>
            <div>
            <Link className="login" to='/login'>Log in</Link>
            <Link className="register" to='/register'>Register</Link>
            <button className="logout" type="submit" onClick={this.handleSubmit}>Logout</button>

            </div>
            </ul>
              <h2><Link className="title" to='/'>POINT <br />BREAK</Link></h2>
          </nav>
        </header>
    )
  }
}

export default Header;
