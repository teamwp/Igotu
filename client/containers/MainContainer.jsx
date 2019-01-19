/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './NavigationContainer.jsx';
import Cards from './CardsContainer.jsx';
import types from '../constants/actionTypes';
import * as actions from '../actions/actions';

// use this.props.cards to access state in our components below
const mapStateToProps = store => ({
  cards: store.cards
});

// need to add all our action creators here
const mapDispatchToProps = dispatch => ({
  fetchAllItems: () => {
    dispatch(actions.fetchItemsData());
  }
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {
    console.log('here are ur props man ',this.props);
    return (
      <div id="cardsdiv">
        <Cards items={this.props.cards.items } fetchFlag={this.props.cards.fetching} loading={this.props}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
