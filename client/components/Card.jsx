import React, { Component } from 'react';

// class Card extends Component {
//   render() {
//     return (
//       <div id={this.props.id}>
//         <p>{this.props.itemName}</p>
//       </div>
//     );
//   }
// }

function Card(props) {
  return (
    <div id={props.id}>
      <p>{props.itemName}</p>
    </div>
  );
}

export default Card;
