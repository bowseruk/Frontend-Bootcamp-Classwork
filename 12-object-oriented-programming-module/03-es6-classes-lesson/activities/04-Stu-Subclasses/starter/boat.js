const Vehicle = require("./vehicle");

class Boat extends Vehicle {
    constructor(id, sound, crew) {
        super(id, 1, sound);
        this.crew = crew;
    }


}

