/*
 Блоки if/else, switch, for, while, do..while 
 не влияют на область видимости переменных.

 Параметры копируются в локальные переменные функции.

 Если параметр не передан при вызове — он считается равным undefined.
 */

function showMessage() {
	var message = "Hello, world!";

	console.log(message);
}
showMessage();
console.log(message);


function count() {
	for (var i = 0; i < 3; i++) {
		var j = i * 2;
	}


	console.log("i = " + i);
	console.log("j = " + j);
}
count();


var userName = "Вася";
function showMessage() {
	var message = "Hello, " + userName + "!";

	console.log(message);
}
showMessage();


function showMessage() {
	message = "Привет";
}
showMessage();
console.log(message);


var message = "Hello!";
function showMessage(paramMessage) {
	paramMessage = "Привет";
	console.log(paramMessage);
}
showMessage(message);
console.log(message);


function showMessage(from, text) {
	if (text === undefined) {
		text = "текст не передан";
	}
	console.log(from + ": " + text);
}
showMessage("Маша", "Привет!");
showMessage("Маша");


function showMessage(from, text) {
	text = text || "текст не передан";
	console.log(from + ": " + text);
}
showMessage("Маша", "Привет!");
showMessage("Маша", undefined);
showMessage("Маша", null);
showMessage("Маша", false);
showMessage("Маша", NaN);
showMessage("Маша");


function showMessage() { }
var resultOfShowMessage = showMessage();
console.log(resultOfShowMessage);


function showMessage() {
	return;
}
var resultOfShowMessage = showMessage();
console.log(resultOfShowMessage);