/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../containers/NavigationContainer';
import Cards from '../containers/CardsContainer';
import types from '../constants/actionTypes';

const mapStateToProps = store => ({
  
});

const mapDispatchToProps = dispatch => ({
  getAllItems: {store.dispatch({type: types.GET_ALL_ITEMS_START}),
   
}
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigation />
      <Cards />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
