// Write Your Code Below
function compare(parameter1, parameter2) {
    if (parameter1 === parameter2) {
        // Triple equals for equivalence first, as the second case will pass for both cases
        console.log("Equal value and type.");
    } else if (parameter1 == parameter2) {
        // Else if, as the first checks if it exists
        console.log("Equal value not type");
    } else {
        // If they are not the same type of value, they must not be equal
        console.log("Not equal");
    }
}

// Test the function for the three cases
compare(2, (4-2)); // > Equal value and type.
compare(0, -0); // > Equal value and type.
compare((true + true + true) ** (true + true), 9); // > Equal value and type.
compare(1, true); // > Equal value not type.
compare([], ![]); // > Equal value not type.
compare(NaN, NaN); // > Not equal.
compare(42, "The meaning of life, the universe and everything") // > Not equal.
// Function expression to iterate trough an array
var iterate = function(arr) {
    for (i=0; i < arr.length; i++) {
        if (arr[i] < 10) {
            console.log(`Item at index ${i} is less than 10.`);
        } else {
            console.log(`Item at index ${i} is equal to or greater than 10.`);
        }
    }
}

iterate([1,10,7,3,11,9,3,11]);