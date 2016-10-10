var express = require('express');
var parser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var Burrito = require('./burrito.js');
var User = require('./user.js');

var secret = "thereisaspoon";

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


var router = express.Router();

router.get('/burritos', function(req, res) {
  Burrito.find({})
    .exec(function(err, results) {
      if (err) throw err;
      res.json(results);
    });
});
//                     v - route parameter
router.get('/burritos/:order_number', function(req, res) {
  if (!isNaN(req.params.order_number)) {
    Burrito.findOne({
        order_number: Number(req.params.order_number)
      })
      .exec(function(err, result) {
        if (err) throw err;
        res.json(result);
      });
  } else {
    res.status(400)
      .json({
        error: "No order number provided."
      })
  }
});

router.post('/burritos', function(req, res) {
  var order_number;
  Burrito.findOne({})
    .sort({
      order_number: -1
    })
    .exec(function(err, result) {
      if (err) throw err;
      if (result == null) {
        order_number = 1;
      } else {
        order_number = result.order_number + 1;
      }
      Burrito.create({
        tortilla: req.body.tortilla,
        meat: req.body.meat,
        guac: req.body.guac,
        beans: req.body.beans,
        rice: req.body.rice,
        weight: req.body.weight,
        salsas: req.body.salsas,
        time_made: new Date(),
        order_number: order_number
      }, function(err, newBurrito) {
        if (err) throw err;
        res.json(newBurrito);
      });
    })

});

router.put('/burritos/:order_number', function(req, res) {
  if (!isNaN(req.params.order_number)) {
    Burrito.findOne({
        order_number: Number(req.params.order_number)
      })
      .exec(function(err, result) {
        if (err) throw err;
        result.tortilla = req.body.tortilla;
        result.meat = req.body.meat;
        result.guac = req.body.guac;
        result.beans = req.body.beans;
        result.rice = req.body.rice;
        result.weight = req.body.weight;
        result.salsas = req.body.salsas;
        result.time_made = new Date();
        result.save(function(err, b) {
          if (err) throw err;
          res.json(b);
        });
      });
  } else {
    res.status(400)
      .json({
        error: "No order number provided."
      })
  }
});

router.delete('/burritos/:order_number', function(req, res) {
  var user = jwt.verify(req.body.token, secret);
  if (!user.admin) {
    return res.status(401)
      .json({
        error: "Unauthorized"
      });
  }
  if (!isNaN(req.params.order_number)) {
    Burrito.remove({
        order_number: Number(req.params.order_number)
      })
      .exec(function(err, result) {
        if (err) throw err;
        if (result.ok == 1) {
          res.json({
            message: "Order " + req.params.order_number + "cancelled."
          });
        } else {
          res.json({
            error: "No matching order"
          });
        }
      });
  } else {
    res.status(400)
      .json({
        error: "No order number provided."
      })
  }
});

router.post('/register', function(req, res) {
  User.create({
    username: req.body.username,
    password: req.body.password,
  }, function(err, user) {
    if (err) throw err;
    res.json(user);
  });
});

router.post('/token', function(req, res) {
  User.findOne({
      username: req.body.username
    })
    .exec(function(err, user) {
      if (err) throw err;
      if (user == null) {
        return res.status(400)
          .json({
            error: "Invalid username"
          });
      }
      if (user.password != req.body.password) {
        return res.status(401)
          .json({
            error: "Invalid pasword"
          });
      }
      jwt.sign({
        username: user.username,
        admin: user.admin
      }, secret, {
        expiresIn: "1 year"
      }, function(err, token) {
        if (err) throw err;
        res.json({
          token: token
        });
      });
    })
});

app.use('/restaurant', router);

app.listen(3000);
