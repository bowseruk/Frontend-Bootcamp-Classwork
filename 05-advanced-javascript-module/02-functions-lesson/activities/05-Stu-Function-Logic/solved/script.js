// isEqual using function declaration
function isEqual(x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}

// Logs "They are equal in type and value"
isEqual(10, 10);

// Logs "They are equal in value"
isEqual('10', 10);

// Logs "They are not equal"
isEqual(10, true);

var numbers = [1, 3, 5, 7, 9, 11]

// Function expression
var lessThanTen = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      //We used the .toString() method so that we could print cleanly.
      console.log(arr[i].toString() + ' is less than 10')
    } else {
      console.log(arr[i].toString() + ' is NOT less than 10')
    }
  }
}

lessThanTen(numbers);

