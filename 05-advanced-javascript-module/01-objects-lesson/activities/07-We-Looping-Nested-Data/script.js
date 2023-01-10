// We must declare these objects first in order for our Menu object to render properly.
var sizes = [ 'small', 'medium', 'large' ];

var milks = [ '2%', 'Whole', 'Oat', 'Coconut', 'Soy' ];

var coffee = {
    name: 'Coffee',
    price: 4.5,
    sizes: sizes,
    isIced: false,
    withSugar: false
};

// Notice we added new properties to this object
var latte = {
    name: 'Latte',
    price: 6.5,
    sizes: sizes,
    isIced: true,
    withSugar: true,
    milks: milks
};

// This object only has a few properties based on what it needs
var coldBrew = {
    name: 'Cold Brew',
    price: 6,
    sizes: sizes,
    withSugar: false
};

var matcha = {
    name: 'Matcha Latte',
    price: 7,
    sizes: sizes,
    isIced: true,
    withSugar: false,
    milks: milks
};

var drinks = [ coffee, latte, coldBrew, matcha ];

// Our Menu object
var menu = {
    drinks: drinks,
    // Here we declared the array within the object since we were not using this array elsewhere.
    food: [ 'Bagel', 'Danish', 'Muffin' ],
    // We included the milk options and size options in this object as well. We are thinking ahead to a point where we might need to simply print the options (such as to a webpage), rather than choose an option within a drink when it is ordered.
    milks: milks,
    sizes: sizes
};

console.log('You can choose from the following drink options: ');
for (var i = 0; i < menu.drinks.length; i++) {
    console.log(drinks[i].name);
}

for (var i = 0; i < menu.drinks.length; i++) {
    if (drinks[i].name === 'Matcha Latte') {
        console.log('The price of a Matcha Latte is: $' + drinks[i].price);
        for (var j = 0; j < drinks[i].milks.length; j++) {
            if (milks[j] === 'Oat') {
                var oatPrice = drinks[i].price + 1;
                console.log('The price of a Matcha Latte with Oat Milk is: $' + oatPrice);
            }
        }
    }
}

console.log('The price of a coldBrew is: $' + menu.drinks[2].price);
console.log('The price of a latte and a coffee is: $' + (menu.drinks[1].price + menu.drinks[0].price));
console.log('You can choose from the following milk options: ' + menu.milks);
console.log('You can choose from the following size options: ' + menu.sizes);
