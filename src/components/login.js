import React from 'react';
import * as API from '../api'; 

export default class Login extends React.Component {
  render() {
    if (this.props.user)
      return <div className='row'>
        <p>Hi {this.props.user.name}!</p>
        <p><button onClick={this.signout}>Sign Out</button></p>
      </div>
    return <div className='row'>
      <p><input className='u-full-width' placeholder="Username" ref='username' type='text' /></p>
      <p><input className='u-full-width' placeholder="Password" ref='password' type='password' /></p>
      <p><button onClick={this.signin}>Sign In</button></p>
      <p><button onClick={this.signup}>Sign Up</button></p>
    </div>
  }

  signin = evt => {
    var username = React.findDOMNode(this.refs.username).value,
        password = React.findDOMNode(this.refs.password).value,

    API.signin(username, password).then(data => );

  }
}
