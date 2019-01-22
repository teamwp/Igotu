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

const CardsContainer = props => {
  console.log('here are the props inside CardsContainer ', props);

  const createCard = item => {
    console.log('in create card for: ', item.item_name);
    return <Card key={uuid()} info={item} />;
  };

  const cards = props.items.map(createCard);

  // const cardRows = [];

  // let counter = 0;

  // for (let i = 0; i <= cards.length / 4; i++) {
  //   const currentCards = [];

  //   for (let j = 0; j < 4; j++) {
  //     currentCards.push(cards[counter]);
  //     counter++;
  //   }

  //   const currentRow = (
  //     <div className="row" key={uuid()}>
  //       {' '}
  //       {currentCards}
  //     </div>
  //   );
  //   cardRows.push(currentRow);
  // }

  let Loading;

  if (props.fetchFlag) {
    Loading = (
      <div className="cardgrid">
      {/* <div className="col-3"> */}
        <button
          className="animated loading center loading-white loading-right white"
          id="loadButton"
        >
          Loading Data
        </button>
      </div>
    );
  }

  return (
    // <div className="cardgrid card-container col-4">
    <div className="cardgrid">
      {Loading}
      {/* {cardRows} */}
      {cards}
    </div>
  );
};
// <Card
//   itemName={item.item_name}
//   itemPrice={item.price}
//   itemPhoto={item.photo}
//   itemDetails={item.item_details}
//   key={item.id}
// />
// }

// function checkRender(props) {
//   console.log(props.items);
//   if (typeof props.items === 'undefined') return null;
//   return props.items.map(cardFunction);
// }

// function CardsContainer(props) {
//   return <div id="cards-container">{checkRender(props)}</div>;
// }

export default CardsContainer;
