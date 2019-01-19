/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './NavigationContainer.jsx';
import Cards from './CardsContainer.jsx';
import types from '../constants/actionTypes';
import actions from '../actions/actions';

const mapStateToProps = store => ({
  items: store.items,
  cards: store.cards
});

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
    return (
      <div id="cardsdiv">
        <Cards items={this.props.items} />
        testin
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
