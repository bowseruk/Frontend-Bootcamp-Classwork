// # Rock-Paper-Scissors Pseudocode

// 1. Initialize `choices` array: r, p, s. representing rock, paper, or scissors.
var choices = ["r", "p", "s"];



// 4. We determine if the user wins or not.

//    * Initialize `wins`, `losses`, `ties` variables to 0
let wins = 0;
let losses = 0;
let ties = 0;

for (var i = 0; i < 2; i++){

    // 2. Prompt user to enter "r," "p," or "s".
    let userChoice = prompt("Please enter r, p or s");


    // 3. Computer chooses a **random** value in a list of "r," "p," or "s."
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];


    //    * If user picks rock and if computer picks scissors, then user wins.
    if  (
        userChoice === "r" && computerChoice === "s"||
        userChoice === "s" && computerChoice === "p" ||
        userChoice === "p" && computerChoice === "r"
        ){
            wins++
            alert("You've won " + wins + " time(s)!");
        } else if (
            userChoice === computerChoice
        ) {
            ties++
            alert("You've tied " + ties + " time(s)!");
        } else {
            losses++
            alert("You've lost " + losses + " time(s)!");
        }
    
}

alert(`You have won ${wins} time(s), you have tied ${ties} times, you have lost ${losses} time(s)`);

//    * If user picks rock and if computer picks paper, then user loses.

//    * If user picks scissors and if computer picks rock, then user loses.

//    * If user picks scissors and if computer picks paper, then user wins.

//    * If user picks paper and if computer picks rock, then user wins.

//    * If user picks paper and if computer picks scissors, then user loses.

//    * If user picks the same as computer, then they tie.

// 5. We then add to their score.

//    * If user wins, then we add one to their wins.
    
//    * If user loses, then we add one to their losses.
    
//    * If user ties, then we add one to their ties.

// 6. Prompt user to play again.
