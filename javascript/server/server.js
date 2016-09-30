//We need to start an npm (node package manager)
//project. To do this we say npm init (just like git)

//So in Terminal, create a new folder
// inside that folder run npm init

//Next commands:
//sudo npm install -g nodemon # this installs a process runner globally
//sudo npm install --save express # install express --save means write it to package.json
//sudo npm install --save body-parser # install middleware to handle body

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = express.Router();

var faveNums = [];

router.get('/', function(request, response) {
  response.send("hi");
});

router.get('/data', function(req, res) {
  var obj = {
    name: "Alex",
    faveNums: faveNums,
    pet: {
      name: "Fuzzy",
      species: "Groundhog",
      color: true
    }
  }
  res.json(obj);
});

router.get('/echo', function (req, res) {
  res.json({
    message: "Hello, " + req.query.name,
    query: req.query,
    browser: req.headers["user-agent"]
  });
});

router.post('/data', function (req, res) {
  var newNum = req.body.newNum;
  if(newNum) {
    faveNums.push(newNum);
    return res.json({message: "POST Success!"})
  }
  return res.status(400).json({message: "No newNum"});
});

app.use('/api', router);

app.listen(3000);
