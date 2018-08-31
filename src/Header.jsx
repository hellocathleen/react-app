import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      name: localStorage.getItem('name')
    })
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
        this.setState({
          name: null
        })
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
    let registerLink;
    const userId = localStorage.getItem('id')
    if (this.state.name) {
      profileLink = <Link className="profile" to={`/user/${userId}`}>{this.state.name}<img className="profile-avatar" src="public/images/avatar.png"/></Link>
      loginLink = <button className="logout" type="submit" onClick={this.handleSubmit}>Logout</button>
    }
    if (!this.state.name) {
      loginLink = <Link className="login" to='/login'>Log in</Link>
      registerLink = <Link className="register" to='/register'>Register</Link>
    }
    return (
      <header>
          <nav>
            <div>
            {loginLink}
            {registerLink}
            {profileLink}
            </div>
            {greeting}
            <h2><Link className="title" to='/'>POINT <br />BREAK</Link></h2>
          </nav>
      </header>
    )
  }
}

export default Header;
