// Core Module


// External Module
const express = require('express');
const hostRouter = express.Router();


// Local Module


hostRouter.get("/add-home", (req, res, next) => {
  res.render('addHome', {pagetitle: 'Add Home'}
  )
});
const registeredHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
  
  registeredHomes.push({houseName: req.body.houseName, location: req.body.location,pricePerNight: req.body.price, imageUrl: req.body.image,rating: req.body.rating});
  res.render( 'homeEdit', {pagetitle: 'Home Edit'});
}
)

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
