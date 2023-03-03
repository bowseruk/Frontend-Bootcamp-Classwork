const Vehicle = require("./vehicle");

class Boat extends Vehicle {
    constructor(id, sound, crew) {
        super(id, 5, sound);
        this.crew = crew;
    }


}