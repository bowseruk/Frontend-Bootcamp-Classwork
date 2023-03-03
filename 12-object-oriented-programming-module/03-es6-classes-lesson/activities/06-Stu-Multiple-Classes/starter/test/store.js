class Store {
  constructor(name, stock) {
    this.name = name;
    this.revenue = 0;
    this.stock = stock;
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }

  processProductSale(name) {
    let toy = this.stock.find(toy=>toy.name === name);
    if (toy.count === 0) {
      console.log("No stock");
      return;
    }
    toy.count--;
    this.revenue += toy.price;
  }

  replenishStock(name, count) {
    this.stock.find(toy=>toy.name === name).count += count;
  }
}

module.exports = Store;
