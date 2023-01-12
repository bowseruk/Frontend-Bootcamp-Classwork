var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
// unshift adds to the start of the array
constellations.unshift("Canis Major");
console.log(constellations);
// Pop removes the last item in an array
planets.pop();
console.log(planets);
// Concat adds to an array
var galaxy = constellations.concat(planets);
console.log(galaxy);
// toUpperCase changes font to uppercase
console.log(star.toUpperCase());