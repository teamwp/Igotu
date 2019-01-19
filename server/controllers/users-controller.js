const pg = require('pg');  // postgres library


userController = {};
    
userController.addUser = (req, res, next) => {  
  const uri = 'postgresql://igotu:eyegotchu@igotu-master.cu4n5g8jahnw.us-west-2.rds.amazonaws.com:5432/igotu';
  const pool = new pg.Pool({
    connectionString: uri,
  });
  const query = {
    text: 'INSERT INTO users(user_name, user_password, user_email_address) VALUES($1, $2, $3) RETURNING *',
    values: [req.body.user_name, req.body.user_password, req.body.user_email_address]
  }
  pool.query(query.text, query.values, (err, user) => {
    if (err) {
      console.log('Here\'s the error: ' + err);
    } else {
      res.locals.data = user.rows[0];
      next();
    };
  });
};

module.exports = userController;