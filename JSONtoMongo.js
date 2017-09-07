'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
    

const connectToMongo = () => {
  mongoose.connect(config.db.uri, {
    useMongoClient: true
  })
    .once('open', uploadListings)
    .on('error', (error) => {
      console.error(error);
  })
}

const uploadListings = () => {
 listingData.entries.forEach((listing) => {
    const newListing = new Listing(listing);
    newListing.save();
  })
}