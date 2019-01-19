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

const styleString = `background-image: url({props.info.photo})`


// const Card = (props) => {
//   console.log('in cards for item', props.info.item_name)
//   return (
//     <div className="card" className="col-4">
//     <div className="card-container">
//         <div className="row">
//             <img src={props.info.photo} className="level" id="projectlogo" />
//             <p id="projectname" className="title level">{props.info.item_name}</p>
//             <p>props.info.item_name</p>
//             <p>{props.info.item_details}</p>
//             <p>{props.info.created_at}</p>
//         </div>
//       </div>
//     </div>
//   )
// };

const Card = (props) => {
  console.log('in cards for item', props.info.item_name)
  const  styles = {backgroundImage: 'url(' + props.info.photo + ')',}
  return (

    <div className="card col-3">
        <div className="card-container">
            <div className="card-image" style={styles}></div>
            <div className="title-container">
                <p className="title">{props.info.item_name}</p><span className="subtitle">${props.info.price}</span>
            </div>
        </div>
        <div className="content">
            <p>{props.info.item_details}</p>

        </div>
    </div>

  )
};

export default Card;
