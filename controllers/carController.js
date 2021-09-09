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

module.exports.getSingleCar = (req, res) => {
  let query = `SELECT * FROM cars WHERE id='${req.params.id}'`;
  db.pool.query(query, function (err, row) {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    }
    return res.status(200).json({
      valid: true,
      data: row,
    });
  });
};

module.exports.rentedCars = (req, res) => {
  console.log(req.body);
  let query = `INSERT INTO rentedCars (CarId,CarName,Price,DaysRented) VALUES ('${req.body.id}','${req.body.Name}','${req.body.price}','${req.body.DaysRented}')`;
  db.pool.query(query, function (err, row) {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      let query = `UPDATE cars SET cars.isRented='${1}' WHERE cars.id='${
        req.body.id
      }'`;
      db.pool.query(query, function (err, row) {
        if (err) {
          console.log(err);
          res.sendStatus(400);
        }
        res.status(200).json({
          valid: true,
        });
      });
    }
  });
};

module.exports.getInvoiceofRentedCars = (req, res) => {
  console.log(req.params.id);
  let query = `SELECT * FROM rentedCars WHERE rentedCars.CarId='${req.params.id}'`;
  db.pool.query(query, function (err, row) {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    }
    return res.status(200).json({
      valid: true,
      data: row,
    });
  });
};
