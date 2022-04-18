function Peroson (fist,last,age,gender,interests){
	this.name = {
		'first':first,
		'last':last
	};
	this.age = age;
	this.gender = gender;
	this.interests = interests;
	this.bio = function(){
		alert(this.first + '' + this.last + '' + this.age + ' years old. ' + ' He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
	};
	this.greeting = function(){
		alert('Hi, I\'m ' + this.first + '.');
	};
};

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

function doSomething(){}
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prop:           " + doSomething.prop);
console.log("doSomething.foo:            " + doSomething.foo);
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);
