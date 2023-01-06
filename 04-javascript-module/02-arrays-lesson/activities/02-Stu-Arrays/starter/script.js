// WRITE YOUR CODE HERE
// Array of names
var student = "Tom"
var students = [student, "Dick", "Harry"]
// Length of array
console.log(students.length)
// For loop to go through each item in array
for (let i = 0; i < students.length; i++) {
    console.log("Welcome to the class " + students[i]);
}
// console.log("Welcome to the class " + students[0]);
// console.log("Welcome to the class " + students[1]);
// console.log("Welcome to the class " + students[2]);
// Rename the first name
students[0] = "Freddie"
// Check the first name has changed
if (students[0] !== student) {
    console.log(students[0] + " is in class")
}