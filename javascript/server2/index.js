var express = require('express');
var parser = require('body-parser');


//barebones
// var app = express();
//
// app.get('/', function(request, response) {
//   response.send("Hello, world!");
// });
//
// app.listen(3000);

var app = express();
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

var router = express.Router();

var nums = [];

router.get('/homework', function(req, res){
  var obj = {
    title: "Clement Assignment",
    hours_spent: true,
    content: {1: "A", 2: 'B', 3: 'A', 4: 'A', 5:'A'},
  };
  res.json(obj); //obj['title']
});

router.post('/homework', function (req, res){
  var body = req.body;
  res.json(body);
});


router.get('/nums', function(res, res) {
  res.json({nums: nums});
});

router.post('/nums', function(req, res) {
  var body = req.body;
  if(body.newNum) {
    nums.push(body.newNum);
    res.status(201).json({message: body.newNum + " added"});
  } else {
    res.status(400).json({error: "No newNum"})
  }
});

app.use('/api', router);
app.listen(3000);
