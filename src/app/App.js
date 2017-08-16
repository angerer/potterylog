import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Main from './Main.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }

//   componentDidUpdate(prevProps) {
//     const { dispatch, redirectUrl } = this.props
//     const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
//     const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn
//
//     if (isLoggingIn) {
//       dispatch(navigateTo(redirectUrl))
//     } else if (isLoggingOut) {
//       // do any kind of cleanup or post-logout redirection here
//     }
//   }
}
//
// function mapStateToProps(state) {
//   return {
//     isLoggedIn: state.loggedIn,
//     redirectUrl: state.redirectUrl
//   }
// }
//
// export default connect(mapStateToProps)(App);
export default (App);
