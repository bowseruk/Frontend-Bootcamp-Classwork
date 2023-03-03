class Character {
    constructor(name, profession) {
        this.name = name;
        this.profession = profession;
        this.age = 18;
        this.hitPoints = 5 * this.age;
        this.strength = 5 * this.age;
    }
    printStats() {
        console.log(`${this.name} is a ${this.age} year old ${this.profession}.\nHit Points - ${this.hitPoints}\nStength - ${this.strength}\n`)
    }
    isAlive() {
      if (this.hitPoints > 0) {
        return true;
      }
      return false;
    }
    attack(character) {
        character.hitPoints -= this.strength;
    }
    levelUp() {
        this.age++;
        this.strength += 5;
        this.hitPoints += 5;
    }
}

adam = new Character("adam", "code-warrior");
adam.printStats();
adam.levelUp();
adam.printStats();
coder = new Character("the debugger", "debugging");
coder.attack(adam);
adam.printStats();
adam.attack(coder);
console.log(coder.isAlive())