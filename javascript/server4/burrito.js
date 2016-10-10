var mongoose = require('mongoose');

var burSchema = mongoose.Schema({
  "tortilla": {
    type: Boolean,
    default: true
  },
  "meat": String,
  "guac": {
    type: Boolean,
    default: false
  },
  "beans": String,
  "rice": String,
  "weight": Number,
  "salsas": Array,
  "time_made": Date,
  "order_number": {
    type: Number,
    unique: true,
    required: true
  }
});

var Burrito = mongoose.model('Burrito', burSchema);

module.exports = Burrito;
