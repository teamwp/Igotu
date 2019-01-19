import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div id={props.key}>
        <p>{this.props.itemName}</p>
      </div>
    );
  }
}
