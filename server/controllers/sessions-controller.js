
// COME BACK TO THIS!!!
// DELAYING SESSION SIGN IN UNTIL POST ITEMS AND QUERY DB ARE COMPLETED


const pg = require('pg');  // postgres library
const sessionsController = require('./users-controller');


const sessionController = {};

sessionController.setCookie = (req, res, next) => {
  res.cookie('codesmith', 'hi');
  res.cookie('secret', Math.floor(Math.random() * 99));
  console.log('Here\'s the res.cookie: ' + res.cookie);
  next();
};

module.exports = sessionController;