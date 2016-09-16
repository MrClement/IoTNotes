var name = "Alex Clement";
var x = 5;
var d = 8.0;
var b = true;

name = "Bob Dole";
x = 6 + 7;

//Strings are enclosed in single ' or double " quotes


//Print command in Node is
//console.log()

console.log(name + " " + x + " "+ b);

//We can math

x = 6 + 7;
console.log(x);
x = 6 - 7;
console.log(x);
x = x + 7;
console.log(x);

//Conditionals
var t = false;
var name = "0";
//code that tries to get a name
if (name) {
  console.log("Hello, " + name);
} else {
  console.log("Who dis?");
}

//Unthuthy values:
// - false
// - 0
// - undefined
// - null

if(name === "Alex Clement") {
  console.log("You get admin access");
} else if(name) {
  console.log("Welcome, " + name);
} else {
  console.log("Who dis?");
}

//other booleans
var b = true;
b = 5 < 7;
b = 5 === 5;
b = 5 >= 9; //< or > first

//two types for loops
var x = 0;
while(x < 10) {
  console.log("Hello!");
  x = x + 1; //x++, x+=1
}

for(var i = 0;i < 10; i++) {
  console.log(i);
}


function five() {
  return 5;
}

var y = five();
console.log(y);

function add(a, b) {
  return a + b;
}

y = add(5, 6);
console.log(y);
console.log(add(5, 6));

function auth(username) {
  if(username.toLowerCase() === "admin") {
    return "Winning";
  } else {
    return "Losing";
  }
}


console.log(auth("adMiN"))
