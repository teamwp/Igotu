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
  // search: store.search
});

// need to add all our action creators here
const mapDispatchToProps = dispatch => ({
  fetchAllItems: () => {
    dispatch(actions.fetchItemsData());
  },
  fetchSearchedItems: () => {
    dispatch(actions.fetchSearchedItems());
  }
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllItems();
  }

  render() {
    // console.log('here are ur props ',this.props.cards.items);
    return (
      <div>
        <div id="navdiv">
          <Navigation fetchSearchedItems={this.props.fetchSearchedItems} />
        </div>
        <div id="cardsdiv">
          <Cards items={this.props.cards.items} />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
