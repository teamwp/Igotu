const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const port = 3000;
require('dotenv').config()
const userController = require('./controllers/users-controller');
const itemsController = require('./controllers/items-controller');
const pg = require('pg');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');



app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

app.get('/', (req, res, err) => {
  // home page
});

app.get('/user/:email', (req, res, err) => {
  // joins user table and item table
});

app.get('/item/:id', (req, res, err) => {
  // gets item from item table
});

app.get('/search/:item', (req, res, err) => {
  // queries item table for item
});

app.get('/category/:category', (req, res, err) => {
  // queries items by category
});
// get all items from items table
app.get('/allItems', itemsController.getAllItems , (req, res, err) => {
  console.log(res.locals.items)
  res.status(200).json(res.locals.items);
})

app.post('/addUser', userController.addUser, (req, res, err) => {
  res.status(200).json(res.locals.data);
});

app.post('/addItem', itemController.addItem, (req, res, err) => {
  res.status(200).json(res.locals.data);
})

app.delete('/deleteItem', (req, res, err) => {
  // deletes item from database
})


app.listen(port, () => console.log('Listening on port ' + port));


