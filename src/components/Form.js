import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import profileServer from '../lib/userServer';
import { withRouter } from 'react-router-dom';

class Form extends Component {

  state = {
    changeQuote: false,
    quote: "",
  }

  handleEdit = event => {
    this.setState({
      quote: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const userId = this.props.profileInfo;
    const userInfo = {
      quote: this.state.quote,
    }
    
    profileServer.editProfile(userInfo, userId)
    .then( game => {
      this.props.handleSubmit(game.quote);
    })
   
  }


  render() {  
    const {quote, image} = this.state;
    const placeholderQuote = this.props.profileInfo.quote;
    
    return (
      <form onSubmit={this.handleSubmit}>
      {/* {foto edit} */}
        <input className="input is-success" placeholder={placeholderQuote} type="text" name="Kill Sentence" value={quote} onChange={this.handleEdit}/>
        <input className="button is-success" type="submit" value="Edit Profile"/>
    </form> 
    )
  }
}

export default withAuth(withRouter(Form));