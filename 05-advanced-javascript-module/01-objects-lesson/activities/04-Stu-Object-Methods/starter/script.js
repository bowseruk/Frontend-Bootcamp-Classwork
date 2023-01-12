//WRITE YOUR CODE BELOW
const menu = {
    americano: 1.90,
    latte: 1.8,
    espresso: 1.5,
    cappuccino: 2.1,
};

// Print an array of the drink names
console.log(Object.keys(menu));
// Print the total price of the menu
console.log(Object.values(menu).reduce((a, b) => a + b, 0));