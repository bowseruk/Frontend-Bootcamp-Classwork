var numbers = [2, 4, 6, 8, 10, 12];

var planets = [
  {
      name: 'Earth',
      moons: 1
  },
  {
      name: 'Mars',
      moons: 2
  },
  {
      name: 'Jupiter',
      moons: 79
  },
  {
      name: 'Saturn',
      moons: 82
  }
];

// Filtering Methods

// Find
console.log(numbers.find(function(i) {
  return i > 10
}))

console.log(planets.find(function(i) {
  return i.moons > 10
}))

// Filter
console.log(numbers.filter(function(i) {
  return i >= 10
}))

console.log(planets.filter(function(i) {
  return i.moons > 10
}))


