import React, { Component } from 'react';

const ItemForm = (props) => {
  
  return (
    <div id="modal-form">
      <h3>Add an item</h3>
      <form>
        Item Name<br></br>
        <input type="text"></input>
        Description<br></br>
        <textarea></textarea>
        Price<br></br>
        <input type="number"></input>
        Image Url<br></br>
        <input type="url"></input>
        <button></button>
      </form>
    </div>
  )

}

export default ItemForm;