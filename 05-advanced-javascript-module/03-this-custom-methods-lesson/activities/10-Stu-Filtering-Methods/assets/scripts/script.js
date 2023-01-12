// This creates the account
class Account {
    constructor(firstName, lastName, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
    }
}
// Add an account to the account array - can take any number of accounts
function addAccount(account) {
    let account_all = Array.from(arguments)
    let accounts_local = [];
    account_all.map(account => accounts_local.push(account));
    return accounts_local;
}
// finds the first account in the bank that matches
function findFirstAmountInAccount(balance) {
    console.log(accounts.find(function(i) {
        return i.balance === balance;
    }))
}
// finds any accounts with a balance equal to the value and prints it out.
function findAllAmountInAccount(balance) {
    accounts.map(account => (account.balance === balance) ? console.log(`${account.firstName} ${account.lastName} has ${balance}`) : null)
}
// finds any account with the a last name beginning with the input letter and returns an array of the results
function findLetterInLastName(letter) {
    return accounts.filter(function(i) {
        // Use the 0 element to compare the first letter of each (to ignore incorrect input)
        return i.lastName[0].toLowerCase() === letter[0].toLowerCase()
    })

}

var accounts = addAccount(new Account("Harry", "Potter", 250000), new Account("Ron", "Weasley", 2), new Account("Hermoine", "Granger", 30000), new Account("Draco", "Malfoy", 250000), new Account("Remus", "Lupin", 100000), new Account("Luna", "Lovegood", 50000));
findFirstAmountInAccount(250000);
findAllAmountInAccount(250000);
console.log(findLetterInLastName("L"));

