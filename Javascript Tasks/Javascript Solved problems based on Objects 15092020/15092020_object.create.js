/*
Create a Animal Object ( using Function Constructor) .
Inherit two types of cat from animal (Big cat and small
Cat) . Implement Walk , talk and type methods. Type
will be common to all objects and give the same
output. Walk and talk methods should be specific to the
two inherited objects Big Cat and Small Cat .
*/
// Using Object.Create Method Date 15-09-2020, DAy 43
console.log("Using Object.Create Method Date 15-09-2020, DAy 43");
function Animals(name) {
	this.name = name;
	// this.name_2 = name_2;
}
Animals.prototype.type = function () {
	console.log("The comman Type Method for Inherited objects");
};

// The big cat class instance created
// var Big_Cat = new Animal("Big_Cat");
var Big_Cat = Object.create(Animals, {
	walk: {
		value: function () {
			console.log("The walk function of Big cat");
		},
		talk: {
			value: function () {
				console.log("The talk function of big cat");
			},
		},
	},
});
console.log(Big_Cat.walk());
// // The big cat Walk function
// Big_Cat.walk = function () {
// 	console.log("The walk function of Big cat");
// };

// // The big cat Talk function
// Big_Cat.talk = function () {
// 	console.log("The talk function of big cat");
// };

// The small cat instance created
// var Small_Cat = new Animal("Small_Cat");
var Small_Cat = Object.create(Animals, {
	walk: {
		value: function () {
			console.log("The walk function of Small cat");
		},
	},
	talk: {
		value: function () {
			console.log("The talk function of Small cat");
		},
	},
});
console.log(Small_Cat.talk());
// // The small cat Walk function
// Small_Cat.walk = function () {
// 	console.log("The walk function of Small cat");
// };
// // The small cat talk function
// Small_Cat.talk = function () {
// 	console.log("The talk function of Small cat");
// };
