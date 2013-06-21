/*
substring - from, to
substr - from, how much
slice - from, to

Различие между substring и slice — в том, как они работают с отрицательными и 
выходящими за границу строки аргументами

substring:
	1. Отрицательные аргументы интерпретируются как равные нулю. Слишком большие 
	   значения усекаются до длины строки.
	2. Кроме того, если start > end, то аргументы меняются местами, т.е. 
	   возвращается участок строки между start и end

slice:
	1. Отрицательные значения отсчитываются от конца строки.

Функция isFinite(n) возвращает true только тогда, когда n — обычное число

Math.floor
	Округляет вниз
Math.ceil
	Округляет вверх
Math.round
	Округляет до ближайшего целого
*/

			//012345678910
var string = "Some String";
console.log(string.length);
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.charAt(2));
console.log(string[2]);
console.log(string.charCodeAt(2));
console.log(string.indexOf("Some"));
console.log(string.indexOf("m"));
console.log(string.indexOf("string"));
console.log(string.indexOf("World"));
console.log(string.substring(1, 8));
console.log(string.substring(5));
console.log(string.substr(1, 5));
console.log(string.slice(1, 8));

//compare substring and slice
console.log(string.substring(-2));
console.log(string.substring(-2, -2));
console.log(string.substring(2, -2));
console.log(string.substring(8, 1));
console.log(string.slice(-2));
console.log(string.slice(-2, -2));
console.log(string.slice(2, -2));
console.log(string.slice(8, 1));

//String
console.log(String.fromCharCode(1072));

console.log("Some String".length);
console.log("Some String".toLowerCase());
console.log("Some String".toUpperCase());

var number = 10.4563;
console.log(number);
console.log(number.toFixed(2));
console.log(number.toFixed(0));
console.log(number.toFixed(5));

//NaN
console.log(isNaN(NaN));
console.log(isNaN(number));

//isFinite
console.log(isFinite(1));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));

//parseInt, parseFloat
console.log(+false);
console.log(+true);
console.log(+null);
console.log(+undefined);

console.log(parseInt("12px", 10));
console.log(parseInt("22px22", 10));
console.log(parseFloat("32px22"));
console.log(parseFloat("22.2.2"));

//toString
console.log(number.toString(2));
console.log(number.toString(4));
console.log(number.toString(10));
console.log(number.toString(16));
console.log(number.toString(36));

//Math
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

console.log(12.toFixed(5));
console.log(12.35.toFixed(3));
console.log(12..toFixed(3));