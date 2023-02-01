var customer = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
  address: {
    streetAddress: "21 2nd Street",
    city: "New York",
    state: "NY",
    postalCode: "10021"
  },
  phoneNumber: [{
    type: "home",
    number: "212 555-1234"
  }, {
    type: "fax",
    number: "646 555-4567"
  }]
};

// Step 1: Log the First Name below using console.log
console.log(customer.firstName);
// Step 2: Log the Last Name below using console.log
console.log(customer.lastName);
// Step 3: Log the State of the Address below using console.log
console.log(customer.address.state);
// Step 4: Log the Home Phone Number below using console.log
console.log(customer.phoneNumber.find(item => item.type === "home").number);
// Step 5: Log the Fax Number below using console.log
console.log(customer.phoneNumber.find(item => item.type === "fax").number);
