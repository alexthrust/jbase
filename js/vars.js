/*
На имя переменной в JavaScript наложены всего два ограничения.

	1. Имя может состоять из: букв, цифр, символов $ и _
	2. Первый символ не должен быть цифрой.

Регистр букв имеет значение
Допускаются русские названия переменных
Зарезервированные слова:

	var, class, return, implements и т.д.

Есть 5 «примитивных» типов: number, string, boolean, null, undefined и объекты object.

В JavaScript одинарные и двойные кавычки равноправны

null — специальное значение. Оно имеет смысл «ничего». Значение null 
не относится ни к одному из типов выше, а образует свой отдельный тип, 
состоящий из единственного значения null

undefined — специальное значение, которое, как и null, образует свой 
собственный тип. Оно имеет смысл «значение не присвоено». Если переменная 
объявлена, но в неё ничего не записано, то ее значение как раз и есть undefined
*/

//Primitives

//string
var message = "Hello!";

	//const
	var COLOR_BLUE = "#00F";
	console.log(COLOR_BLUE);

console.log(message);

//number
var num = 100500;
var numWithPoint = 100.5;
var infinity = 1/0;	//division by 0
var nan = "2a" * 2;

console.log(num);
console.log(numWithPoint);
console.log(infinity);
console.log(nan);

//boolean
var booleanTrue = true;
var booleanFalse = false;

console.log(booleanTrue);
console.log(booleanFalse);

//null
var nullable = null;

console.log(nullable);
console.log(nullable === null);

//undefined
var undefinedVar;

console.log(undefinedVar);

//Objects
var date = new Date();
console.log(date);

//other vars
var $ = "$";
console.log($);

var _ = "_";
console.log(_);

var имя = "Вася";
console.log(имя);