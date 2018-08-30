import React, {Component} from 'react';
import axios from 'axios';

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
    axios.get(`http://localhost:8080/api/beaches`)
      .then((res) => {
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
        console.log("Something")
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

  render() {
    return (
      <header>
          <nav>
          <h2>{this.state.name}'s profile </h2>
            <label>Your favorite beaches:</label><br/>
            {this.state.userBeaches.map((beach) => {
              return <div key={beach.id}>{beach.name} <button type="submit" name={beach.id} onClick={this.deleteBeach}>Delete</button> </div>
                })}
          <br/>
          <label>Add more favorite beaches:</label>
            {this.state.beaches.map((beach) => {
                return <div key={beach.id}><input type="checkbox" className="checks" name={beach.name} /><label>{beach.name}</label></div>
              })}
          <br/>
          <button type="submit" onClick={this.addBeaches}>Submit</button>
          </nav>
        </header>
    )
  }
}

export default UserProfile;
