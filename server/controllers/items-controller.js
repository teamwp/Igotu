const pg = require('pg');  // postgres library

// change to get/show all items
userController.getUsers((req, res, next) => {
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