var accounts = [
  {
    firstName: 'John',
    lastName: 'Doe',
    balance: 25000
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    balance: 100000
  },
  {
    firstName: 'Bill',
    lastName: 'Smith',
    balance: 65000
  },
  {
    firstName: 'Lily',
    lastName: 'Potter',
    balance: 250000
  },
  {
    firstName: 'Killian',
    lastName: 'Trystvale',
    balance: 500
  }
]

console.log('Account with $250,000 belongs to: ', accounts.find(function(i) {
  if (i.balance === 250000) {
    return (i.firstName.toString() + i.lastName.toString())
  }
}))

console.log('All acounts with last names that begin with D: ', accounts.filter(function(i) {
  return i.lastName.charAt(0) === 'D'
}))

