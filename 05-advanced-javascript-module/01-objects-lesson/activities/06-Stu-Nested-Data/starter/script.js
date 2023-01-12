//WRITE YOUR CODE BELOW
// Declare a class
class MilkOption {
    // Create a constructor for an order
    constructor(name, price, dairy) {
        // Map function to class properties
        this.name = name;
        this.price = price;
        this.dairy = dairy;
    };
};

// Declare a class
class SizeOption {
    // Create a constructor for an order
    constructor(name, price) {
        // Map function to class properties
        this.name = name;
        this.price = price;
    };
};

// Declare a class
class DrinkOption {
    // Create a constructor for an order
    constructor(name, price, iced, sugar, milk, size) {
        // Map function to class properties
        this.name = name;
        this.price = price;
        this.iced = iced;
        this.sugar = sugar;
        this.milk = milk;
        this.size = size;
    }
    get milk_options() {
        let milk_list = ""
        for (let i = 0; i < this.milk.length; i++) {
            milk_list += ` ${this.milk[i].name},`
        }
        return milk_list;
    }
    get size_options() {
        let size_list = ""
        for (let i = 0; i < this.size.length; i++) {
            size_list += ` ${this.size[i].name},`;
        }
        return size_list;
    }
};

const menu = {
    // Empty Arrays to add food to
    drinks: [],
    food: [],
    size: ["Demi", "Short", "Tall", "Grande", "Venti", "Trenta"],
    // Function to add drinks to the menu
    add_drink: function (drink) {
        for (let i = 0; i < arguments.length; i++) {
            this.drinks.push(arguments[i])
        }
    },
    // This function gets the price of any number of comma seperated drinks. It returns 0 if there is no match.
    get_price_drink: function (drink) {
        price = 0;
        for (let i = 0; i < arguments.length; i++) {
            for (let j = 0; j < this.drinks.length; j++) {
                if (this.drinks[j].name === arguments[i]) {
                    price += this.drinks[j].price
                };
            }
        }
        return price;
    },
    get_size_options: function (drink) {
        for (let i = 0; i < this.drinks.length; i++) {
            if (this.drinks[i].name === drink) {
                return this.drinks[i].size
            };
        }
    },
    get_milk_options: function (drink) {
        for (let i = 0; i < this.drinks.length; i++) {
            if (this.drinks[i].name === drink) {
                if (typeof this.drinks[i].milk_options != "null") {
                    return this.drinks[i].milk_options;
                };
            };
        }
    },
};
// Standard Milk List
milk = [new MilkOption("Almond Milk", 0.5, false),
new MilkOption("Coconut", 0.5, false), 
new MilkOption("Cream", 0.2, true), 
new MilkOption("Full Fat", 0, true),
new MilkOption("Semi-Skimmed", 0, true),
new MilkOption("Skimmed", 0, true),
new MilkOption("Oat Milk", 0.5, false),
new MilkOption("Soya Milk", 0.5, false),]

// Add the drinks to the menu
menu.add_drink(new DrinkOption("Americano", 2.90, true, true, milk),
    new DrinkOption("Cappuccino", 3.50, true, true, milk),
    new DrinkOption("Latte", 2.50, true, true, milk),
    new DrinkOption("Macchiatto", 2.90, true, true, milk));

console.log(`The price of an Americano is £${menu.get_price_drink("Americano").toFixed(2)}`);
console.log(`The price of an Americano and Cappuccino is £${menu.get_price_drink("Americano", "Cappuccino").toFixed(2)}`);
console.log(`The milk options are for an Americano is ${menu.get_milk_options("Americano")}.`);
console.log(...menu.size);


