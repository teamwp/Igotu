/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Card from '../components/Card.jsx';

const uuid = require('uuid/v1');

// class CardsContainer extends Component {
//   cardFunction(item) {
//     return (
//       <Card
//         itemName={item.item_name}
//         itemPrice={item.price}
//         itemPhoto={item.photo}
//         itemDetails={item.item_details}
//         key={item.id}
//       />
//     );
//   }

//   render() {
//     const cards = this.props.items.map(this.cardFunction, this);
//     return <div id="cards-container">{cards}</div>;
//   }
// }

function cardFunction(item) {
  return (
    <Card
      itemName={item.item_name}
      itemPrice={item.price}
      itemPhoto={item.photo}
      itemDetails={item.item_details}
      key={item.id}
    />
  );
}

function checkRender(props) {
  if (typeof props.items === 'undefined') return null;
  return props.items.map(cardFunction);
}

function CardsContainer(props) {
  return <div id="cards-container">{checkRender(props)}</div>;
}

export default CardsContainer;
