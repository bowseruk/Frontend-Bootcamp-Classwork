// Write Your Code Below
// Function that adds 1 and 2 using Function Declaration
function addOneAndTwo() {
    return 1+2;
};
// One function that subtracts 10 from 20 using Function Expression
var tenFromTwenty = function() {
    return 20 - 10;
};
// One function that Calculates the area of a square using an outside variable.
function areaOfSquare(length) {
    return length ** 2;
}
// Calling the functions
console.log(addOneAndTwo());
console.log(tenFromTwenty());
console.log(areaOfSquare(3));