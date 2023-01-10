// Objects are a collection of properties
var planet = {
  // Properties are made up of key-value pairs
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};

// To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log(planet.name);
	
// Uses bracket notation and logs "Earth"
console.log(planet["name"]);

// Creates an array of the keys of the object
console.log(Object.keys(planet));

// Creates an array of the values of the object
console.log(Object.values(planet));

// Creates an array containing each key-value pair as an array
console.log(Object.entries(planet));
