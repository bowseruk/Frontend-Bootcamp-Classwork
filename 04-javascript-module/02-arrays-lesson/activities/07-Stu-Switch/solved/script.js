var userInput = prompt('Please input a number between 1 and 7, inclusive: ');

var userDay = parseInt(userInput);

if (userDay === 1) {
    alert('You entered the number that equals: Monday');
} else if (userDay === 2) {
    alert('You entered the number that equals: Tuesday');
} else if (userDay === 3) {
    alert('You entered the number that equals: Wednesday');
} else if (userDay === 4) {
    alert('You entered the number that equals: Thursday');
} else if (userDay === 5) {
    alert('You entered the number that equals: Friday');
} else if (userDay === 6) {
    alert('You entered the number that equals: Saturday');
} else if (userDay === 7) {
    alert('You entered the number that equals: Sunday');
} else {
    alert('You entered an incorrect number!!!');
}

/*
switch (userDay) {
  case 1:
    alert("You entered the number that equals: Monday"); 
    break;
  case 2:
    alert("You entered the number that equals: Tuesday");
    break;
  case 3:
    alert("You entered the number that equals: Wednesday"); 
    break;
  case 4:
    alert("You entered the number that equals: Thursday"); 
    break;
  case 5:
    alert("You entered the number that equals: Friday"); 
    break;
  case 6:
    alert("You entered the number that equals: Saturday"); 
    break;
  case 7:
    alert("You entered the number that equals: Sunday"); 
    break;
  default:
    alert("You entered an incorrect number!!!"); 
}

*/
