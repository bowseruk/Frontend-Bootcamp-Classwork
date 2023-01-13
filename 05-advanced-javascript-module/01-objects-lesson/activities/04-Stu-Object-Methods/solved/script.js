// Our Menu object
var menu = {
  coffee: 4.50,
  latte: 6.50,
  coldBrew: 6,
  matcha: 7
};

// We assign our menu values to the prices variable
var prices = Object.values(menu);

// Instantiate the total
var total = 0;

// We print the entire menu
console.log('The menu contains the following drinks:', Object.keys(menu));

// We loop through the values and add them to the total
for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}

// We print the total cost
console.log('Total Menu Cost = $' + total);