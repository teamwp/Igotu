const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const port = 3000;
require('dotenv').config()
const userController = require('./controllers/users-controller');
const pg = require('pg');
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));


// home page
app.get('/', (req, res, err) => {
  // home page
});


// add a user/sign up
app.post('/addUser', userController.addUser, (req, res, err) => {
  console.log(res.locals.data)
  res.status(200).json(res.locals.data);
});


app.listen(port, () => console.log('Listening on port ' + port));


