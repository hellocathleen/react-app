import React, {Component} from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';


class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      beaches: [],
      userBeaches: [],
      name: localStorage.getItem('name'),
      email: localStorage.getItem('email'),
      id: localStorage.getItem('id')
    }
    this.deleteBeach = this.deleteBeach.bind(this);
    this.addBeaches = this.addBeaches.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/user/${this.state.id}`, {
     headers: {'Content-Type': 'application/json' },
      withCredentials: true
    }).then(res => {
      console.log("res.data:", res.data);
      const userBeaches = res.data;
      this.setState({ userBeaches });
      console.log("STATE", this.state)
    }).catch((res) => {
      console.log("error", res);
    }); 
    axios.get(`http://localhost:8080/api/user/beaches`, {
    withCredentials: true })
    .then((res) => {
      console.log(res)
      const beaches = res.data;
      this.setState({ beaches });
    }).catch((res) => {
      console.log("error", res);
    });


  }

  deleteBeach(event) {
    const beach = { id: event.target.name, userId: this.state.id }
    console.log("Target:", event.target.name)
    axios.post(`http://localhost:8080/beach/delete`, beach, {
      headers: { 'Content-Type': 'application/json'},
      withCredentials: true
    }).then((results) => {
      console.log("Beaches deleted:", results)
     axios.get(`http://localhost:8080/user/${this.state.id}`, {
        headers: {'Content-Type': 'application/json' },
         withCredentials: true
       }).then(res => {
         console.log("res.data:", res.data);
         let userBeaches = res.data;
         this.setState({ userBeaches });
         console.log("STATE", this.state)
       })
       .catch((res) => {
         console.log("error", res);
       }); 

       axios.get(`http://localhost:8080/api/user/beaches`, {
        withCredentials: true })
        .then((res) => {
          console.log(res)
          const beaches = res.data;
          this.setState({ beaches });
        }).catch((res) => {
          console.log("error", res);
        });
    })
  }
  addBeaches(event) {
    event.preventDefault();
    const favBeaches = [];
    const checks = document.getElementsByClassName('checks')
    for (let i = 0; i < checks.length; i++) {
      if (checks[i].checked === true) {
        favBeaches.push(checks[i].name)
      }
    }
    const newBeaches = { favBeaches: favBeaches, userId: this.state.id }
    axios.post(`http://localhost:8080/beach/add`, newBeaches, {
      headers: { 'Content-Type': 'application/json'},
      withCredentials: true
    }).then((results) => {
      console.log("results:", results);
      if (results.data.includes("You already favorited")){
        alert(results.data)
      } else {
        axios.get(`http://localhost:8080/user/${this.state.id}`, {
          headers: {'Content-Type': 'application/json' },
          withCredentials: true
         }).then(res => {
           console.log("Got user beaches again:", res);
           let userBeaches = res.data;
           this.setState({ userBeaches });
           console.log("STATE", this.state)
         }).catch((res) => {
           console.log("error", res);
         })
         axios.get(`http://localhost:8080/api/user/beaches`, {
          withCredentials: true })
          .then((res) => {
            console.log(res)
            const beaches = res.data;
            this.setState({ beaches });
          }).catch((res) => {
            console.log("error", res);
          });
      }
    }).catch((res) => {
      console.log("error", res);
    })
    for (let i = 0; i < checks.length; i++) {
      if (checks[i].checked === true) {
        checks[i].checked = false;
      }
    }
  }

  saveSettings(event) {
    const value = event.target.value;
    console.log(value)
    const notification = { setting: value }
    axios.post(`http://localhost:8080/api/user/notifications`, notification, {
      withCredentials: true
    }).then((results) => {
      console.log("results:", results);
      if (results.data === "Updated setting") {
        alert("Your notification setting has been updated.")
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
      <img id="background" src="../public/images/wave4.png"></img>
      <div className="login-register-container"> 
      <div className="circle" id="avatar">
      <img id="icon" src="../public/images/avatar.png"/>{this.state.name}</div><br/>
        <label>Your favorite beaches</label><br/>
        {this.state.userBeaches.map((beach) => {
          return <div className="beach" key={beach.id}> <button id="beach-button" type="submit" name={beach.id} onClick={this.deleteBeach}>{beach.name} x</button> </div>
          })}
      <br/>
      <label>Add more favorite beaches</label><br/>
        {this.state.beaches.map((beach, index) => {
          return <div className="beach" key={index}><label id="beach-button">{beach}</label>
          <label className="switch">
          <input type="checkbox" className="checks" name={beach} /><span className="slider round"></span>
          </label></div>
          })}<br/>
      <button className="profile" id="submit" type="submit" onClick={this.addBeaches}>Submit</button>
      <div id="notifications">
      <label>Notifications</label><br/>
        <select value={this.state.notification} onChange={this.saveSettings}>
          <option value="on">On</option>
          <option value="off">Off</option>
        </select>
      </div>  
      </div>
        <div className="info">
            <p>Update your preferences.<br/><br/>
            Each alarm is set for the most optimal surf<br/>
            conditions to notify you when to grab your board and <br/>
            head to the beach. Add or remove beaches to determine <br/>
            which surf notifications you will recieve. <br/>
            <br/>Select the beaches from which you'd like to recieve a forecast <br/>
            and let Point Break take care of the rest.</p><br/>
            <div>
              <Link id="link" to='/'>Return</Link>
            </div>  
          </div>
      </div>
    )
  }
}

export default UserProfile;
