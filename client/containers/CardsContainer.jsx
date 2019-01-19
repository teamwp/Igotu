/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Card from '../components/Card.jsx';

const uuid = require('uuid/v1');

class CardsContainer extends Component {
  cardFunction(item) {
    return (
      <Card
        itemName={item.item_name}
        itemPrice={item.price}
        itemPhoto={item.photo}
        itemDetails={item.item_details}
        key={uuid()}
      />
    );
  }

  render() {
    const cards = props.cards.map(this.cardFunction, this);

    return <div id="cards-container">{cards}</div>;
  }
}
