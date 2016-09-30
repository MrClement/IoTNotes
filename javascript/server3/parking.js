var mongoose = require('mongoose');


var parkingSchema = new mongoose.Schema({
  user_name: String,
  number: {
    type: Number, 
    required: true,
    unique: true
  },
  car_type: String,
  in_use: Boolean,
});

var Parking = mongoose.model('ParkingSpot', parkingSchema);

module.exports = Parking;
