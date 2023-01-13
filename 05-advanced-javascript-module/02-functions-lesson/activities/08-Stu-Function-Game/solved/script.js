var game = {
    player: 0,
    dealer: 0,
    goal: 21,
    isPlayerTurn: false
};

function blackjack() {
    // Should give player a number between 4 and 21
    game.player = randomNum(4, 21);
    game.dealer = randomNum(2, 11);
    console.log('player', game.player);

    if (game.player === game.goal) {
        game.wins++;
        alert('Blackjack!');
    } else {
        do {
            gamePlay(game.player, game.dealer);
        } while (game.isPlayerTurn === true);
    }
}

// Function to hold the actual gameplay. Keeps the blackjack function clean
function gamePlay(playerTotal, dealerTotal) {
    // Should show the Dealer's number between 2 and 11
    // Player can Hit or Stay
    var hit = confirm(
        'Your hand is ' + playerTotal.toString() + '.\nThe Dealer shows ' + game.dealer.toString() + '. Hit or Stand?'
    );
    if (hit) {
        game.isPlayerTurn = true;

        // If Hit add a number between 2 and 11
        game.player = game.player + randomNum(2, 11);
        console.log('player', game.player);
        // If >21 Player loses
        if (game.player > game.goal) {
            gameEnd();
            alert('Player Bust with ' + game.player.toString());
        } else if (game.player === game.goal) {
            alert('You have 21!');
            dealerTurn();
        }
    } else {
        dealerTurn();
    }
}

// Function to Hold Dealer Turn. Keeps the gameplay function clean
function dealerTurn() {
    do {
        game.dealer = game.dealer + randomNum(2, 11);
        console.log('game.dealer', game.dealer);
        // If Stay show dealer number
        alert('Stand at ' + game.player.toString() + '.\nDealer shows ' + game.dealer);
        // if < 17 add number between 2 and 11, repeat if less than 17
    } while (game.dealer < 17);

    // if > 21 Dealer lose
    if (game.dealer > game.goal) {
        alert('Dealer Busts!');
        gameEnd();
    } else {
        // if neither lose, compare both numbers to 21. Whoever is closer wins.
        var dealerDistance = game.goal - game.dealer;
        var playerDistance = game.goal - game.player;

        if (playerDistance > dealerDistance) {
            alert('Dealer had ' + game.dealer.toString() + '.\nYou had ' + game.player.toString() + '.\nYou Lose :(');
            gameEnd();
        } else if (playerDistance < dealerDistance) {
            alert('Dealer had ' + game.dealer.toString() + '.\nYou had ' + game.player.toString() + '.\nYou Win :)');
            gameEnd();
        } else {
            alert('Dealer had ' + game.dealer.toString() + '.\nYou had ' + game.player.toString() + '.\n You Push.');
            gameEnd();
        }
    }
}

// Utility Function
function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gameEnd() {
    game.isPlayerTurn = false;
}

var start = confirm('Would you like to play blackjack?');

if (start) {
    blackjack();
} else {
    alert('Come again!');
}
