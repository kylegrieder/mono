import React from 'react';
import axios from 'axios'

import '../App.css';

import Card from './Card'
import Details from './Details'

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      users: [],
      input: '',
      detailsUser: {}
    }
  }
  
  render() {
    return (
      <div className="container p-2">
        <div className="row">
          <div className="col">
            <label htmlFor="name-input">Name</label>
            <input
              className="mx-2"
              id="name-input"
              value={this.state.input}
              onChange={this.handleInputChange}
              />
            <button 
              className="btn btn-primary" 
              type="button"
              onClick={this.addNewUser}
              >
              Add User
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {
              this.state.users.map((user, index) => {
                return (
                  <div onClick={(e) => {this.setDetailsUser(user)}} key={index} >
                    <Card name={user.name} user={user}></Card>
                  </div>
                )
              }) 
            }
          </div>
          <div className="col">
            <Details user={this.state.detailsUser}></Details>
          </div>
        </div>
      </div>
    )
  }
    
  getUsers = () => {
    axios.get('/users').then((response) => {
      this.setState({
        users: response.data
      })
    })
  }
  
  addNewUser = () => {
    axios.post('/users/new', {
      name: this.state.input
    }).then(() => {
      this.getUsers()
    })
  }
  
  handleInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  setDetailsUser = (user) => {
    this.setState({
      detailsUser: user
    })
  }
  
  componentDidMount() {
    this.getUsers()
  }
}
  
export default App;
  