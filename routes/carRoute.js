const express = require("express");
const router = express.Router();
const { getAllCars, carsNotRented } = require("../controllers/carController");
router.get("/", getAllCars);
router.get("/notRented", carsNotRented);
module.exports = router;
