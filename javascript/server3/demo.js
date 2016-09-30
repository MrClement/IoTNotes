var mongoose = require('mongoose');
var ParkingSpot = require('./parking.js');

mongoose.connect("mongodb://localhost/iot", function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Connected to database!");
  }
});

// ParkingSpot.create({
//   user_name: "Alex Clement",
//   number: 19,
//   in_use: true,
//   car_type: "extant"
// });
//
// ParkingSpot.create({
//   user_name: "Bob Dole",
//   number: 20,
//   in_use: false,
// });
//
// ParkingSpot.create({
//   user_name: "Frida Kahlo",
//   number: 21,
//   in_use: true,
//   car_type: "Mustang"
// }, function(err, spot) {
//   if(err) {
//     console.log("err: " + err);
//   } else {
//     console.log(spot);
//   }
// });


// ParkingSpot.find({},
//   function(err, result) {
//     if(err) {
//       console.log(err);
//     } else {
//       for(var i = 0; i< result.length; i++) {
//         console.log(result[i].user_name)
//       }
//     }
// });

// ParkingSpot.findOne({number: ""}
//   , function(err, spot) {
//       if(err) throw err;
//       console.log(spot);
// });


//update
ParkingSpot.findOne({number: 19},
  function(err, spot) {
    if(err) throw err;
    console.log(spot);
    spot.in_use = true;
    spot.save();
  }
);

//destroy/delete
// ParkingSpot.remove({},
//   function(err, doc) {
//     if(err) throw err;
//   }
// );
