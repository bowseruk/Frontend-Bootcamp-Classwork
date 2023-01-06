// Luxury Tax

var player1 = 20235406;
var player2 = 15000000;
var player3 = 25000000;
var tax;

var total = player1 + player2 + player3;

console.log('The total for all three players is: $' + total);

if (total > 40000000) {
  tax = (total - 40000000) * 0.18;
  console.log('Your team owes a luxury tax in the amount of: $' + tax);
} else {
  console.log('Your team owes no luxury tax');
}