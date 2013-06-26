/*
Ассоциативный массив — структура данных, в которой можно хранить любые данные в 
формате ключ-значение.

Основные операции с объектами — это:
	1. Присвоение свойства по ключу.
	2. Чтение свойства по ключу.
	3. Удаление свойства по ключу.
	4. Проверка существования свойства с определенным ключом.

Для проверки, существует ли свойство в объекте, лучше использовать "in"

Названия свойств можно перечислять в кавычках или без, если они удовлетворяют 
ограничениям для имён переменных.

Обычные значения: строки, числа, булевы значения, null/undefined копируются
«по значению».

Объекты присваиваются и передаются «по ссылке».

Итог:

	1. Доступ к элементам осуществляется:
		1. Напрямую по ключу obj.prop = 5
		2. Через переменную, в которой хранится ключ:
			var key = "prop";
			obj[key] = 5
	2. Удаление ключей: delete obj.name.
	3. Цикл по ключам: for (key in obj), порядок перебора соответствует порядку 
	объявления для строковых ключей, а для числовых - зависит от браузера.
	4. Существование свойства может проверять оператор in: if ("prop" in obj), 
	как правило, работает и просто сравнение if (obj.prop !== undefined).
	5. Переменная хранит не сам объект, а ссылку на него. Копирование такой 
	переменной и передача её в функцию дублируют ссылку, но объект остается один.
*/

var person = {};

// assignment
person.name = "John";
person.age = 35;

// read
console.log(person.age);
console.log(person.name);

// delete
delete person.name;

// check if property is exists
if(person.surname === undefined) {
	console.log("person.surname === undefined");
}

if("name" in person) {
	console.log(person.name);
}

// access throw square brackets
var person = {
	name: "John",
	age: 35
};

console.log(person["age"]);
console.log(person["name"]);

// properties as string key
var menuSetup = {
	width: 300,
	'height': 200,
	"мама мыла раму": true
};
for (var key in menuSetup) {
	console.log(key + ": " + menuSetup[key]);
}

// object inside object
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

// value type
var value1 = "Some Value";
var value2 = value1;

console.log(value1);
console.log(value2);

value2 = "Another Value";
console.log(value1);
console.log(value2);

// referense type
var user = { name: "John" };
console.log(user.name);

var admin = user;
admin.name = "Peter";

console.log(user.name);



