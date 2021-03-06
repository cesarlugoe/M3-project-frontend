import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';

class Button extends Component {

  handleButton = () => {
    this.props.handleButton(this.props.state, this.props);
  }

  render() {
    return (
      <button className="btn" onClick={this.handleButton}>{this.props.children}</button>
    )
  }
}

export default withAuth(Button);
