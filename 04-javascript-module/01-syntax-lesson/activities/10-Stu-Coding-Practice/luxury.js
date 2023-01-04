function getValues() {
    var player1 = parseInt(document.getElementById("player1").value);
    console.log(player1);
    var player2 = parseInt(document.getElementById("player2").value);
    console.log(player2);
    var player3 = parseInt(document.getElementById("player3").value);
    console.log(player3);
    var playerTotal = calcTotalCost(player1, player2, player3);
    console.log(playerTotal)
    document.getElementById("playerTotal").value = playerTotal;
    var taxFloor = parseInt(document.getElementById("taxFloor").value);
    var taxRate = parseInt(document.getElementById("taxRate").value) / 100;
    var taxCost = calcTaxCost(playerTotal, taxFloor, taxRate);
    document.getElementById("taxCost").value = taxCost;
};

function calcTotalCost(player1, player2, player3) {
    var playerTotal = 0;
    console.log(typeof player1)
    if (typeof player1 == "number" && player1 > 0) {
        playerTotal += player1;
    };
    console.log(playerTotal)
    if (typeof player2 == "number" && player2 > 0) {
        playerTotal += player2;
    };
    console.log(playerTotal)
    if (typeof player3 == "number" && player3  > 0) {
        playerTotal += player3;
    };
    console.log(playerTotal)
    return playerTotal;
};

function calcTaxCost(playerTotal, taxFloor, taxRate) {
    if (typeof playerTotal !== "number" && typeof taxFloor !== "number" && typeof taxRate !== "number") {
        return 0;
    };
    if (taxFloor > playerTotal) {
        return 0;
    };
    return (playerTotal - taxFloor) * taxRate;
};