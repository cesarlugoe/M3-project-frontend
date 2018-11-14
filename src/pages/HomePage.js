import React, { Component } from 'react';
import Signup from '../components/Signup';
import Login from '../components/Login';


class HomePage extends Component {

  state = {
    showSignup: true
  }

  handleLogin = () => {
    this.setState({
      showSignup: !this.state.showSignup,
    })
  }

  


  render() {
    const {showSignup} = this.state
    return (
      <div className="home-page">
      <img className="logo" src="/img/paranoia.png" alt="paranoia logo"/>
      <h3 className="slogan">Frase descriptiva</h3>
      {showSignup ? <Signup handleLogin={this.handleLogin}/> : <Login handleSignup={this.handleLogin}/>}
      </div>
    )
  }
}

export default HomePage;