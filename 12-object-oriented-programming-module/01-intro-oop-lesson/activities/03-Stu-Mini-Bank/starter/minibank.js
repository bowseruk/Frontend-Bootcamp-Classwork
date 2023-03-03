function MiniBank(balance) {
  this.balance = balance;
  this.getBalance = () => {
    return this.balance;
  };
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
  this.statement = [balance];
  this.setBalance = (value) => {this.balance = value;};
  this.updateStatement = (value) => {this.statement.push(value);};
  this.getStatement = () => this.statement;
  this.printStatement = () => this.statement.forEach(line => console.log(line));
  this.deposit = (value) => {
    this.updateStatement(this.getBalance() + value);
    this.setBalance(this.getBalance() + value);
  }
  this.withdraw = (value) =>  {
    this.updateStatement(this.getBalance() - value);
    this.setBalance(this.getBalance() - value);
  }

}