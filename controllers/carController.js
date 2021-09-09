const db = require("../db");

module.exports.getAllCars = (req, res) => {
  let query = "SELECT * FROM cars";
  db.pool.query(query, function (err, row) {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).json({
      valid: true,
      data: row,
    });
  });
};

module.exports.carsNotRented = (req, res) => {
  let query = `SELECT * FROM cars WHERE isRented='${0}'`;
  db.pool.query(query, function (err, row) {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).json({
      valid: true,
      data: row,
    });
  });
};
