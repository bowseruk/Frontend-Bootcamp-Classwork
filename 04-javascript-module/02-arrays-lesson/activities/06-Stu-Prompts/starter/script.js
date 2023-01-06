// Write code here!
var interest = "Sushi";
var interested = confirm("Do you like " + interest + "?");
if (interested) {
    var sub_interest = prompt("What kind of " + interest + " do you like?");
}
if (interested) {
    alert("You like " + interest + ", in particular " + sub_interest + ".");
} else {
    alert("You do not like " + interest + ".")
}