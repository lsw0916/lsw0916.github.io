function printMag() {
	console.log('This is a message in the console.')
}
printMag(); // print the message on the console

var varFunction = function() {
	console.log('This is a function stored in a variable.')
};

varFunction();

// call this later //This line causes an error

var callThislater = function() {
	console.log('you can only call this function after it is built.')
}

callThislater();
