var numArray = [1, 5, 2, 11, 7];

console.log(numArray[0]); // First Position
console.log(numArray[1]); // Second Position

console.log(numArray[4]);
numArray[4] = 18;
console.log(numArray[4]);

console.log(numArray);


var profile = ['TY Chen', 'NTHU', 40, 180, 72];
console.log(profile[0]);

var x = 2;
console.log(x);

var profile {
	name: 'Elsa Lin',
	affiliation: 'NTHU',
	height: 162,
}

delete profile.gender; //Delete a key

profile = {
	name: 'shu wei lin',
	age: '39',
	affiliation: 'NTHU',
	height: 162,
	weight: 47,
	contact: {
		home: 34423421;
		mobile: [43829829, 492842492, 54597483],
		email: 'elsalin0914@gmail.com'
	}
};

console.log(profile.contact.home);