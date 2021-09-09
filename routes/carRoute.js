const express = require("express");
const router = express.Router();
const {
  getAllCars,
  carsNotRented,
  getSingleCar,
  rentedCars,
  getInvoiceofRentedCars,
} = require("../controllers/carController");
router.get("/", getAllCars);
router.get("/notRented", carsNotRented);
router.get("/:id", getSingleCar);
router.post("/create/rent", rentedCars);
router.get("/getRentedCars/:id", getInvoiceofRentedCars);
module.exports = router;
