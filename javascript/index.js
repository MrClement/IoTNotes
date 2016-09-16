//array
var arr = [];
arr.push(1);
arr.push(2);
for(var i =0; i < 10; i++) {
  arr.push(i+7);
}

// console.log(arr);

arr.push('Hello');
 console.log(arr);

arr[0] = true;
// console.log(arr);

var x = arr[3];

// console.log(x);

//console.log(arr.length);

//console.log(arr[arr.length - 1]);

for(var i = 0; i < arr.length; i++){
  console.log(arr[i]);
}


var obj = {}

obj["name"] = "Alex Clement";
obj[5] = "Bob";
obj[true] = "Bob";
obj["truth"] = true;

console.log(obj);
console.log(obj['5']);
console.log(obj["truth"] === true);

obj["obj"] = {};
obj["arr"] = [];

obj["arr"][10] = 1;

console.log(obj);

var s = JSON.stringify(obj);
console.log(s);
var o = JSON.parse(s);
console.log(o);
