// var readline = require("readline");
//
// var input = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// input.question("What is your name?",
//   function(response) {
//   console.log("Hello, " + response);
//   input.close();
// });


function pow(b, e) {
  if(e === undefined) {
    // treats e as 0
    return 1;
  }
  var result = 1;
  for(var i = 0; i < e; i++) {
    result *= b;
  }
  return result;
}

module.exports = [5, 6, 7];
//
// function repeater(name,  callback) {
//   for (var i = 0; i < 2; i++) {
//     console.log(name);
//   }
//   return callback();
// }
//
// //console.log(repeater("Alex", pow));
// repeater("Alex", function () {
//   console.log("repeater done")
// });
//
//
// var bob = {
//   speak: function () {
//     console.log("bob");
//   },
//   drawers: [5, 6, 7]
// }
//
// //function bob()
//
// bob.speak();
// console.log(bob.drawers);
// bob.speak
