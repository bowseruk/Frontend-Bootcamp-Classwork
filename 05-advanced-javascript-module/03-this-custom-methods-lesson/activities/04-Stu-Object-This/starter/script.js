// This is calling the global object
console.log(this);

function helloThis() {
  // No object present, it calls the global object
  console.log('Inside this function, this is ' + this);
}

var child = {
  age: 10,
  ageTenYears: function () {
    // This is refering to the age property on this object + 10
    console.log(this.age + 10);
  },
};

var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      // This gets the initial investment property from the inner object
      console.log(this.initialInvestment * 1.15);
    },
  },
};
// Call the function
helloThis();
// Call the function in an object
child.ageTenYears();
// Call the function in an object within another object
investor.investment.investmentGrowth();