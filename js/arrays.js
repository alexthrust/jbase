/*
В массиве может храниться любое число элементов любого типа

pop
Удаляет последний элемент из массива и возвращает его

push
Добавляет элемент в конец массива

shift
Удаляет из массива первый элемент и возвращает его

unshift
Добавляет элемент в начало массива
*/

// create array throw []
var array = ['element1', 'element2', 'element3'];
console.log(array);
console.log(array[1]);
console.log(array.length);

// for in array
for (var key in array) {
	console.log(key + ": " + array[key]);
}

// add, change elements in array
array[1] = "New Value";
showArray(array);

array[3] = "New Value";
showArray(array);

array[6] = "New Value";
showArray(array);
console.log(array);

// array with elements of different types
var array = [1, "String", { property: "Some Property" }, true];
console.log(array[2].property);
showArray(array);

// pop, push, shift, unshift
var array = [1, 2, 3, 4];
showArray(array);
console.log(array.pop());
showArray(array);
array.push(5, 6, 7);
showArray(array);
console.log(array.shift());
showArray(array);
array.unshift(-1, 0);
showArray(array);

// array as object
var array = [];
array[100] = 5;
console.log(array);
array.value = "some value";
showArray(array);

// length
var array = [1, 2, 3, 4, 5];
array.length = 2;
showArray(array);
array.length = 5;
console.log(array);

// new Array()
var array = new Array(1, 2, 3, 4);
showArray(array);
var array = new Array(4);
console.log(array);

// matrix
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix);
console.log(matrix[1][1]);



// helper
function showArray(array) {
	for (var key in array) {
		console.log(key + ": " + array[key]);
	}
}