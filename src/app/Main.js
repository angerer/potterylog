import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../public/Home.js'
import Gallery from '../gallery/Gallery.js'
import Works from '../works/Works.js'
import Login from './Login.js'

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route {...rest} render={props => (
    isLoggedIn() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route exact path='/' component={Home}/>
          <PrivateRoute path='/gallery' component={Gallery} isLoggedIn={this.props.isLoggedIn}/>
          <PrivateRoute path='/works' component={Works} isLoggedIn={this.props.isLoggedIn}/>
        </Switch>
      </main>
    );
  }
}

export default Main
