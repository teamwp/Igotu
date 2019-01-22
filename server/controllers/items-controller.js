const pg = require('pg'); // postgres library

const itemController = {};
const uri =
  'postgres://igotu:stardustgotchu@stardust-igotu-dev.cu4n5g8jahnw.us-west-2.rds.amazonaws.com:5432/igotu';

const pool = new pg.Pool({
  connectionString: uri
});

itemController.getOneItem = (req, res, next) => {
  const query = {
    text: 'SELECT * FROM items WHERE id = $1',
    values: [req.params.id]
  };
  pool.query(query.text, query.values, (err, items) => {
    if (err) res.send(err).end();
    else {
      res.locals.oneItem = items.rows;
      pool.end();
      next();
    }
  });
};

itemController.addItem = (req, res, next) => {
  const query = {
    text:
      'INSERT INTO items(photo, price, item_name, item_details, created_at) VALUES($1, $2, $3, $4, $5) RETURNING *',
    values: [
      req.body.photo,
      req.body.price,
      req.body.item_name,
      req.body.item_details,
      req.body.created_at
    ]
  };
  pool.query(query.text, query.values, (err, user) => {
    if (err) res.send(err).end();
    else {
      res.locals.data = user.rows[0];
      pool.end();
      next();
    }
  });
};

itemController.getAllItems = (req, res, next) => {
  const query = {
    text: 'SELECT * FROM items'
  };
  pool.query(query.text, (err, items) => {
    if (err) res.send(err).end();
    else {
      res.locals.items = items.rows;
      pool.end();
      next();
    }
  });
};

itemController.searchItem = (req, res, next) => {
  const query = {
    text: 'SELECT * FROM items WHERE item_name = $1',
    values: [req.params.item_name]
  };
  pool.query(query.text, query.values, (err, items) => {
    if (err) res.send(err).end();
    else {
      res.locals.search = items.rows;
      pool.end();
      next();
    }
  });
};

itemController.searchCategory = (req, res, next) => {
  const query = {
    text: 'SELECT * FROM items WHERE category = $1',
    values: [req.params.category]
  };
  pool.query(query.text, query.values, (err, items) => {
    if (err) res.send(err).end();
    else {
      res.locals.category = items.rows;
      pool.end();
      next();
    }
  });
};

module.exports = itemController;
