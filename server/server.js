const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userController = require('./controllers/users-controller');
const itemsController = require('./controllers/items-controller');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-TypeError, Accept');
  next();
});

app.get('/user/:email', (req, res) => {
  // joins user table and item table
  res.status(200);
});

app.get('/item/:id', itemsController.getOneItem, (req, res) => {
  res.status(200).json(res.locals.oneItem);
});

app.get('/search/:item_name', itemsController.searchItem, (req, res) => {
  res.status(200).json(res.locals.search);
});

app.get('/category/:category', itemsController.searchCategory, (req, res) => {
  res.status(200).json(res.locals.category);
});

app.get('/allItems', itemsController.getAllItems, (req, res) => {
  res.status(200).json(res.locals.items);
});

app.post('/addUser', userController.addUser, (req, res) => {
  res.status(200).json(res.locals.data);
});

app.post('/addItem', itemsController.addItem, (req, res) => {
  res.status(200).json(res.locals.data);
});

app.delete('/deleteItem', itemsController.deleteItem, (req, res) => {
  // deletes item from database
  res.status(200);
});

app.use(express.static(path.resolve(__dirname, '../build')));

app.listen(port, () => console.log(`Listening on port ${port}`));
