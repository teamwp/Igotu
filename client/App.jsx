/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import NavigationContainer from './containers/NavigationContainer';
import CardsContainer from './containers/CardsContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavigationContainer />
        <CardsContainer />
      </div>
    );
  }
}

export default App;
