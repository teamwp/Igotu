import React from 'react';

// class Card extends Component {
//   render() {
//     return (
//       <div id={this.props.id}>
//         <p>{this.props.itemName}</p>
//       </div>
//     );
//   }
// }

const Card = props => {
  console.log('in cards for item', props.info.item_name);
  return (
    <div className="card" id={props.info.id}>
      <img src={props.info.photo} />
      <p>{props.info.item_name}</p>
      <p>{props.info.price}</p>
      <p>{props.info.item_details}</p>
      <p>{props.info.created_at}</p>
    </div>
  );
};

export default Card;
