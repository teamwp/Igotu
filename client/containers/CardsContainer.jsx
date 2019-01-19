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


const CardsContainer = (props) => {
  
  console.log('here are the props inside CardsContainer ', props);

  const createCard = (item) => {

    console.log('in create card for: ' ,item.item_name)
    return <Card   key={uuid()} info={item}></Card>

  }


  let cards = props.items.map(createCard);

  let cardRows = [];

  // loop through the cards


  let counter =0;

  for(let i =0; i<= cards.length/4; i++){


    let currentCards =[];

    for(let j =0; j<4; j++){
      currentCards.push(cards[counter]);
      counter++;
    }

    let currentRow = <div className="row"> {currentCards}</div>
    cardRows.push(currentRow);

  }
 
 
  let Loading;
 
  if(props.fetchFlag){
     Loading =  (<div className="col-fluid">
    <button className="animated loading center loading-white loading-right white" id="loadButton">Loading Data</button>
</div>)
  }

  return (
    <div className="card-container">
      {Loading}
      {cardRows}
    </div>
  )
  
  }
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
