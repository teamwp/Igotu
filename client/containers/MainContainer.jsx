/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './NavigationContainer.jsx';
import Cards from './CardsContainer.jsx';
import types from '../constants/actionTypes';
import TestiButton from '../components/TestiButton.jsx';
import { fetchItemsData } from '../actions/actions';

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
  fetchAllItems: dispatch(fetchItemsData)
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <Navigation />
      <div>
        <TestiButton fetchAllItems={this.props.fetchAllItems} />
        {/* <Cards /> */}
        testin
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
