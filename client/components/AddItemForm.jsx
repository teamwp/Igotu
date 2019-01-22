import React, { Component } from 'react';

const ItemAddBySearch = (props) =>{
  <form>
    <label for='search'>Add by UPC or Item Name</label>
    <input type='text' id='search'></input>
  </form>
}

const ItemForm = (props) => {
  
  return (
    <div id="modal-form">
      <h3>Add an item</h3>
      <form >
       <label for='search'>Add by UPC or Item Name</label>
       <input type='text' id='search'></input>
       <input type='submit' value='Search For Item' />
      </form>
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