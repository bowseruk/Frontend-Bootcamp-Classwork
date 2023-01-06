function getValues() {
    // Array is filled with player salaries
    var players = [];
    // Number of players to expect from the site, can be any positive numeric value
    var numberOfPlayers = 3;
    // loops through all the elements and fills reads it into the array
    for (let i = 0; i < numberOfPlayers; i++) {
        players[i] = parseInt(document.getElementById(("player" + (i + 1))).value);
    }
    // Puts the array into a cost function
    var playerTotal = calcTotalCost(players);
    document.getElementById("playerTotal").value = playerTotal;
    var taxFloor = parseInt(document.getElementById("taxFloor").value);
    var taxRate = parseInt(document.getElementById("taxRate").value) / 100;
    var taxCost = calcTaxCost(playerTotal, taxFloor, taxRate);
    document.getElementById("taxCost").value = taxCost;
};
// Calculates the cost of all the players
function calcTotalCost(players) {
    // Starts with a 0 valued variable
    var playerTotal = 0;
    // For loop over all the players
    for (let i = 0; i < players.length; i++) {
        // Check the array element is a number above 0, else does not count it 
        if (typeof players[i] == "number" && players[i] > 0) {
            // If it is valid, add it to the running total
            playerTotal += players[i];
        };
    };
    // return the running total
    return playerTotal;
};

function calcTaxCost(playerTotal, taxFloor, taxRate) {
    // Check the values are all numbers
    if (typeof playerTotal !== "number" && typeof taxFloor !== "number" && typeof taxRate !== "number") {
        // Return 0 if they are not all numbers
        return 0;
    };
    // Check the tax is above the floor
    if (taxFloor > playerTotal) {
        // Return 0 if the value is below the tax
        return 0;
    };
    // Return the value - the floor multiplied by the tax rate
    return (playerTotal - taxFloor) * taxRate;
};