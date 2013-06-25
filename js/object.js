/*
Ассоциативный массив — структура данных, в которой можно хранить любые данные в 
формате ключ-значение.

Основные операции с объектами — это:
	1. Присвоение свойства по ключу.
	2. Чтение свойства по ключу.
	3. Удаление свойства по ключу.
	4. Проверка существования свойства с определенным ключом.

Обычные значения: строки, числа, булевы значения, null/undefined копируются
«по значению».

*/

var person = {};

person.name = "John";
person.age = 35;

console.log(person.age);
console.log(person.name);

delete person.name;

if("name" in person) {
	console.log(person.name);
}

var person = {
	name: "John",
	age: 35
};

console.log(person["age"]);
console.log(person["name"]);

var user = {
	name: "Таня",
	age: 25,

	skill: {
		csharp: 7,
		java: 8,
		javascript: 9
	}
};

console.log(user.skill.csharp);

var value1 = "Some Value";
var value2 = value1;

console.log(value1);
console.log(value2);

value2 = "Another Value";
console.log(value1);
console.log(value2);


var user = { name: "Вася" };
var admin = user;
admin.name = "Петя";

console.log(user.name);



