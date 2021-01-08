import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Main from './Main.js'

class Auth extends Component {
  constructor(props){
    // Pass props to parent class
    super(props);

    // Set initial state
    this.state = {
      authToken: ""
    }

    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  isAuthenticated() {
    return this.state.authToken !== null && this.state.authToken !== "";
  }

  authenticate(username, password) {
    // TODO: Get a new token
    this.setState({authToken:"Blah blah blah"})
//    this.setState({authToken:res.data});
  }

  signout() {
    // TODO: Log out on the server
    this.setState({authToken:""})
  }
}

class App extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      auth: null
    }
  }

  render() {
    const authInstance => () { return (<Auth/>) };

    return (
      <div>
        <Header isAuthenticated={this.state.Auth.isAuthenticated}/>
        <Main isLoggedIn={this.state.Auth.isAuthenticated}/>
      </div>
    );
  }
}

export default (App);
