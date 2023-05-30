const assignAllSeatsService = require( "../services/assignAllSeats.service");
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
  try{
  const asignedSeats=assignAllSeatsService (req.seats, req.passengers)
  res.send(asignedSeats)
  }
  catch(error)
  {
    res.status(500)
  }
}
);

module.exports = router;
