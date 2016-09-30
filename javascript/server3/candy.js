var mongoose = require('mongoose');

var candySchema = new mongoose.Schema({
  name: String,
  weight: Number,
  color: String,
  best_by: Date,
  peanuts: Boolean,
});

var Candy = mongoose.model('Candy', candySchema);


module.exports = Candy;
