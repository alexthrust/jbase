/*
Goto?
В некоторых языках программирования есть оператор goto, который может передавать 
управление на любой участок программы.
Операторы break/continue более ограниченны. Они работают только внутри циклов, 
и метка должна быть не где угодно, а выше по уровню вложенности.
В JavaScript нет goto.
 */

//Outer

for (var i = 0; i < 3; i++) {
	for (var j = 0; j < 3; j++) {
		if (i == 1) break;

		console.log("i = " + i + "; j = " + j);
	}
}
console.log("end");


outer: for (var i = 0; i < 3; i++) {
	for (var j = 0; j < 3; j++) {
		if (i == 1) break outer;

		console.log("i = " + i + "; j = " + j);
	}
}
console.log("end");


my: {
	for (;;) {
		for (i = 0; i < 10; i++) {
			if (i > 4) break my;

			console.log("i = " + i);
		}
	}

	console.log("some code");
}
console.log("end");