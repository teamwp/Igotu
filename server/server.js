const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const port = 3000;
require('dotenv').config();
const pg = require('pg');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userController = require('./controllers/users-controller');
const itemsController = require('./controllers/items-controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-TypeError, Accept');
  next();
});

app.get('/user/:email', (req, res, err) => {
  // joins user table and item table
  res.status(200);
});

app.get('/item/:id', (req, res, err) => {
  // gets one item from item table by its name
  res.status(200);
});

app.get('/search/:item_name', itemsController.searchItem, (req, res, err) => {
  res.status(200).json(res.locals.search);
});

app.get('/category/:category', (req, res, err) => {
  // queries items by category
  res.status(200);
});

app.get('/allItems', itemsController.getAllItems, (req, res, err) => {
  res.status(200).json(res.locals.items);
});

app.post('/addUser', userController.addUser, (req, res, err) => {
  res.status(200).json(res.locals.data);
});

app.post('/addItem', itemsController.addItem, (req, res, err) => {
  res.status(200).json(res.locals.data);
});

app.delete('/deleteItem', (req, res, err) => {
  // deletes item from database
  res.status(200);
});

app.use(express.static(path.resolve(__dirname, '../build')))



app.listen(port, () => console.log(`Listening on port ${port}`));