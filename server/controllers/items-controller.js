const pg = require('pg');  // postgres library


itemsController = {};

// change to get/show all items
itemsController.getUsers = ((req, res, next) => {
  // code here
  const uri = 'postgresql://igotu:eyegotchu@igotu-master.cu4n5g8jahnw.us-west-2.rds.amazonaws.com:5432/igotu';
  const pool = new pg.Pool({
    connectionString: uri,
  });
  const query = {
    text: 'SELECT * FROM users',
  }
  pool.query(query.text, (err, res) => {
    if (err) {
      console.log('Here\'s the error: ' + err);
    } else {
      console.log(res.rows);
    };
  });
  next();
});

itemsController.getAllItems = ( (req,res, next) => {

  const uri = 'postgresql://igotu:eyegotchu@igotu-master.cu4n5g8jahnw.us-west-2.rds.amazonaws.com:5432/igotu';
  
  const pool = new pg.Pool({
    connectionString: uri,
  });

  const query = {
    text: 'SELECT * FROM items'
  }

  pool.query(query.text, (err, items) => {
    if (err) {
      console.log('Here\'s the error: ' + err);
    } else {
      console.log(items.rows);
      res.locals.items = items.rows;
      next();
    };
  });
});

module.exports = itemsController;