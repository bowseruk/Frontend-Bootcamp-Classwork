// Functions can take parameters.
// Parameters give a name to the data to be passed into the function
function declareHelloAgain(x,y,z) { 
  console.log("Hello, my parameter's values are " + x + ", " + y + ", and " + z);
  console.log("-----------------------------------");
  return;
}

// Function arguments give parameters their values
// Here the parameter x is given the value 7 when the function is called
declareHelloAgain(7, "Hello", true);


var array = [7, 'Hello', true];

function add(x) {
  if (x < 10) {
    console.log(x + 1);
  } else {
    console.log(x - 1);
  }
  return;
}

function print(word) {
  console.log(word);
  return;
}

function correct(bool) {
  console.log('The Answer is: ', bool)
  return;
}

for (let i = 0; i < array.length; i++) {
  if (array[i] === 7) {
    add(array[i]);
  } else if (array[i] === 'Hello') {
    print(array[i]);
  } else {
    correct(array[i])
  }
}