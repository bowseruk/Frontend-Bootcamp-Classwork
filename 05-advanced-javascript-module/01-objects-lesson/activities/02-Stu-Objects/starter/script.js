//WRITE YOUR CODE BELOW
// Declare a class
class customerOrder {
    // Create a constructor for an order
    constructor(name, number_of_sugars) {
        // Map function to class properties
        this.name = name;
        this.number_of_sugars = number_of_sugars;
        this.ready = false;
        // Add class function
        this.ready_message = function () {
            if (this.ready) {
                return "Ready for pick-up";
            } else {
                return "Still in order queue";
            }
        };
    };
};

order = new customerOrder("Latte", 2);
console.log(order.ready_message());
order.ready = true;
console.log(order.ready_message());