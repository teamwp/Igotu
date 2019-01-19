const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const port = 3000;
require('dotenv').config();
const pg = require('pg');
const bodyParser = require('body-parser');
const userController = require('./controllers/users-controller');
const itemsController = require('./controllers/items-controller');

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-TypeError, Accept');
  next();
});
// home page
app.get('/', (req, res, err) => {
  // home page
});

// get all items from items table
app.get('/allItems', itemsController.getAllItems, (req, res, err) => {
  console.log(res.locals.items);
  res.status(200).json(res.locals.items);
});

// add a user/sign up
app.post('/addUser', userController.addUser, (req, res, err) => {
  console.log(res.locals.data);
  res.status(200).json(res.locals.data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
