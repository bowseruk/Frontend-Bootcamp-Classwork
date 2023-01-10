// Array of Arrays

var cars = [ [ 'Subaru', 'Toyota', 'Buick' ], [ 'Crosstrek', 'Prius', 'Encore' ], [ 2015, 2020, 2012 ] ];

// Object of Objects

var account = {
    user: {
        firstName: 'John',
        lastName: 'Doe',
        password: 'abcdefg',
        address: {
            street: '123 First Ave',
            city: 'Anywhere, USA',
            zip: 12345
        }
    },
    balance: {
        checking: 25000,
        savings: 100000
    }
};

/*

var johnAddress = {
    street: '123 First Ave',
    city: 'Anywhere, USA',
    zip: 12345
};

var accountBalance = {
  checking: 25000,
  savings: 100000
}

var john = {
    firstName: 'John',
    lastName: 'Doe',
    password: 'abcdefg',
    address: johnAddress
}

var account = {
    user: john,
    balance: accountBalance
};

*/

// Array of Objects

var planets = [
    {
        name: 'Earth',
        moons: 1
    },
    {
        name: 'Mars',
        moons: 2
    },
    {
        name: 'Jupiter',
        moons: 79
    },
    {
        name: 'Saturn',
        moons: 82
    }
];

// Object of Arrays

var website = {
    users: [ 'John', 'Mary', 'Tom' ],
    pages: [ 'Home', 'About', 'Contact' ]
};
