// for in
var menu = {
    width:  300,
    height: 200,
    title: "Menu"
};

for (var key in menu) {
    console.log("Key: " + key + "; value: " + menu[key]);
}


var user1 = { name: "Вася" };
var user2 = { name: "Петя" };
var user3 = { name: "Ваня" };

var users = [user1, user2, user3];

for (var user in users) {
	console.log("User: " + user.name);
}		//wrong

for (var key in users) {
	console.log("User: " + users[key].name);
}		//correct