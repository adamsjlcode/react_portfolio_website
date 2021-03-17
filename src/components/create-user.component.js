import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);        
    this.onChangeLastName = this.onChangeLastName.bind(this);      
    this.onChangeEmail = this.onChangeEmail.bind(this);      
    this.onChangePhone = this.onChangePhone.bind(this);        
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: '',
      url: '',
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value
    })
  }
  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }
  onChangeUrl(e) {
    this.setState({
      url: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      url: this.state.url,
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: '',
      url: '',
      
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
            <label>First Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.first_name}
                onChange={this.onChangeFirstName}
                />
            <label>Last Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.last_name}
                onChange={this.onChangeLastName}
                />
            <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
            <label>Phone: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.phone}
                onChange={this.onChangePhone}
                />
            <label>Url: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.url}
                onChange={this.onChangeUrl}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}