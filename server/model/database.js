const pg = require('pg');

const db = {};
//const uri = 'igotu-master.cu4n5g8jahnw.us-west-2.rds.amazonaws.com/igotu';
const uri = 'stardust-igotu-dev.cu4n5g8jahnw.us-west-2.rds.amazonaws.com/igotu'

//postgres://igotu:stardustgotchu@stardust-igotu-dev.cu4n5g8jahnw.us-west-2.rds.amazonaws.com:5432/igotu

pg.connect(uri, (err, db_) => {
  if (err) throw new Error(err);
  db.conn = db_;
});

module.exports = db;