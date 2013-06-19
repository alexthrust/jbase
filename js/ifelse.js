//If
if (0) {
	console.log("0 is true");
}

if ("") {
	console.log("empty string is true");
}

if (null) {
	console.log("null is true");
}

if (undefined) {
	console.log("undefined is true");
}

if (NaN) {
	console.log("NaN is true");
}

if ("0") {
	console.log("string is true");
}

var a = 3;
var result = (a == 1) ? 'значение1' :
		  	 (a == 2) ? 'значение2' :
  		  	 (a > 2) ? 'значение3' : 'значение4';

console.log(result);

var b = 3;
var result = (b == 3) ? "true" : "false";
console.log(result);
