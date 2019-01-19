/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <router>
        <div>{<MainContainer />}</div>
      </router>
    );
  }
}

export default App;
