import React, {Component} from 'react';
import axios from 'axios';

class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      beaches: [],
      name: localStorage.getItem('name'),
      email: localStorage.getItem('email'),
      id: localStorage.getItem('id')
    }
    this.deleteBeach = this.deleteBeach.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/user/${this.state.id}`, {
     headers: {'Content-Type': 'application/json' },
      withCredentials: true
    }).then(res => {
      console.log("res.data:", res.data);
      const beaches = res.data;
      this.setState({ beaches });
      console.log("STATE", this.state)
    })
    .catch((res) => {
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
    })
  }

  render() {
    let greeting;
    if (this.state.name) {
      greeting = <h2>{this.state.name}'s profile </h2>
    }
    return (
      <header>
          <nav>
          {greeting}
            <label>Your favorite beaches:</label>
            {this.state.beaches.map((beach) => {
              return <div key={beach.id}>{beach.name} <button type="submit" name={beach.id} onClick={this.deleteBeach}>Delete</button> </div>
                })}
          <br/>
          </nav>
        </header>
    )
  }
}

export default UserProfile;
