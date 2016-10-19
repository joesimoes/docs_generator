import React from "react";
import Router from 'react-router';
import {RouteHandler} from "react-router";

export default class App extends React.Component {
  state = { user: USER }

  render () {
    return <div>
        <div className="row">
          <div className="three columns">
            <h1>Wicker</h1>
            Login
            PageList
          </div>
          <div className="nine columns">
            <RouteHandler user={this.state.user} />
          </div>
        </div>
      </div>
  }
}
