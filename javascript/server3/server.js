var express = require('express');
var parser = require('body-parser');
var mongoose = require('mongoose');


var ParkingSpot = require('./parking.js');
var Candy = require('./candy.js');

mongoose.connect("mongodb://localhost/iot", function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database!");
  }
});

var app = express();
app.use(parser.urlencoded({
  extended: true
}));
app.use(parser.json());

app.get('/parkingspots', function(req, res) {
  var limit = 10;
  if (req.query.perPage && !isNaN(req.query.perPage)) {
    limit = Number(req.query.perPage);
  }
  ParkingSpot.find({})
    .limit(limit)
    .exec(function(err, spots) {
      if (err) return res.status(500)
        .json({
          error: err
        });
      return res.json(spots);
    });
});

app.get('/parkingspots/:spotNumber', function(req, res) {
  if (req.params.spotNumber && !isNaN(req.params.spotNumber)) {
    var spotNumber = Number(req.params.spotNumber);
    ParkingSpot.findOne({
        number: spotNumber
      },
      function(err, spot) {
        if (err) throw err;
        res.json(spot)
      }
    )
  } else {
    res.status(400)
      .json({
        error: "spot number required"
      })
  }

});

app.put('/parkingspots/:spotNumber', function(req, res) {
  if (req.params.spotNumber && !isNaN(req.params.spotNumber)) {
    var spotNumber = Number(req.params.spotNumber);
    var body = req.body;
    ParkingSpot.findOne({
        number: spotNumber
      },
      function(err, spot) {
        if (err) throw err;
        if (body.user_name) {
          spot.user_name = body.user_name;
        }
        if (body.in_use) {
          spot.in_use = body.in_use;
        }
        if (body.car_type) {
          spot.car_type = body.car_type;
        }
        spot.save(function(err) {
          if (err) throw err;
          res.json(spot);
        });
      }
    )
  } else {
    res.status(400)
      .json({
        error: "spot number required"
      })
  }
});

app.delete('/parkingspots/:spotNumber', function(req, res) {
  if (req.params.spotNumber && !isNaN(req.params.spotNumber)) {
    var spotNumber = Number(req.params.spotNumber);
    ParkingSpot.remove({
        number: spotNumber
      },
      function(err, spot) {
        if (err) throw err;
        res.json(spot);
      }
    )
  } else {
    res.status(400)
      .json({
        error: "spot number required"
      })
  }
});

app.post('/parkingspots', function(req, res) {
  var spot = {};
  var body = req.body;
  if (body.number && !isNaN(body.number)) {
    spot.number = Number(body.number);
  }
  if (body.user_name) {
    spot.user_name = body.user_name;
  }
  if (body.in_use) {
    spot.in_use = body.in_use;
  }
  if (body.car_type) {
    spot.car_type = body.car_type;
  }
  ParkingSpot.findOne({
      number: spot.number
    },
    function(err, s) {
      if (err) throw err;
      if (s != null) {
        return res.status(400)
          .json({
            error: "Spot already in use"
          });
      } else {
        ParkingSpot.create(spot, function(err, newSpot) {
          if (err) throw err;
          return res.json(newSpot);
        });
      }
    }
  );
});


app.listen(3000);
