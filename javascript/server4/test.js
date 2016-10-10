var jwt = require('jsonwebtoken');


var message = "This is a super secret message";

var secret = ``;


// jwt.sign({
//   message: message,
//   name: "Alex Clement"
// }, secret, {
//   expiresIn: "1 min"
// }, function(err, token) {
//   if (err) throw err;
//   console.log(token);
// });

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiVGhpcyBpcyBhIHN1cGVyIHNlY3JldCBtZXNzYWdlIiwibmFtZSI6IkFsZXggQ2xlbWVudCIsImlhdCI6MTQ3NTc2NTgwNCwiZXhwIjoxNDc1NzY1ODY0fQ.AHAR6fh_zWVHq4fYbspSgfuRXnff-Pj7yHlJHkY36Sw";


jwt.verify(token, secret, {
  ignoreExpiration: true
}, function(err, payload) {
  if (err) {
    console.log("Token invalid")
  } else {
    console.log(payload);
  }
});
