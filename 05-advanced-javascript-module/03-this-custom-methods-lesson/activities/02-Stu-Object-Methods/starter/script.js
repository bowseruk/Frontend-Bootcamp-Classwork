var input = ["Mackie", "Bernice", "Cookie Monster", "Spot", "Astrid", "Lulu", "Fluffy", "Mouser", "Java"]
var chosenPet = input[Math.floor(Math.random()*input.length)];

var shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
  }
};

//Debug the code below 
function dogMessage() {
  // The name comes from chosenPet
  console.log("Congrats! " + chosenPet + ", a great dog, is available for adoption!");
  shelter.apptMessage();
}

function catMessage() {
  // The name comes from chosenPet
  console.log("Congrats! " + chosenPet + ", an awesome cat, is available for adoption!");
  shelter.apptMessage();
}

if (shelter.dogs.includes(chosenPet)) {
  // this checks in the dogs array and calls the funtion if it is found
  dogMessage();
} else if (shelter.cats.includes(chosenPet)) {
  // this checks in the cats array and calls the funtion if it is found
  catMessage();
} else {
  console.log("It looks like the pet is not available.");
  console.log("Check out our featured dog, " + shelter.dogs[Math.floor(Math.random()* shelter.dogs.length)] + ". or our featured cat, " + shelter.cats[Math.floor(Math.random()* shelter.cats.length)]);
}
  
