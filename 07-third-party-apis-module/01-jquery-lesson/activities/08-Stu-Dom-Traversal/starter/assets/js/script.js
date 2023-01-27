/*
Tic Tac Toe Logic
*/
var X = "X";
var O = "O";
var EMPTY = null;
let playerStates = [X, O, EMPTY]

function initial_state() {
    // Returns starting state of the board.
    return [[EMPTY, EMPTY, EMPTY],[EMPTY, EMPTY, EMPTY], [EMPTY, EMPTY, EMPTY]];
}

function player(board) {
    // Returns player who has the next turn on a board.
    let moves = 0;
    // count the number of moves. X is on even numbers, O on odd numbers
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] !== EMPTY) {
                moves += 1;
                };
            };
        };
    console.log(moves)
    if ((moves % 2) === 0){
        return X;
    };
    return O;
}

function actions(board) {
    // Returns set of all possible actions (i, j) available on the board.
    let moves = []
    // Loop through all the possibilities looking for EMPTY spaces
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
            if (board[i][j] === EMPTY){
                moves.push([i, j]);
            };
        };
    };
    return moves;
}

function result(board, action){
    // Returns the board that results from making move (i, j) on the board.
    // Deep copy as the different boards will be used in minimax function
    let new_board = JSON.parse(JSON.stringify(board));
    if (typeof new_board[action[0]][action[1]] !== typeof EMPTY){
        // If a space is not valid, throw an exception
        throw new Error("Not valid space");
    }
    new_board[action[0]][action[1]] = player(board);
    return new_board;
    };

function winner(board) {
    //  Returns the winner of the game, if there is one.
    // Check for the diagonal win
    if (((board[1][1] !== EMPTY) && (board[0][0] == board[1][1]) && (board[0][0] == board[2][2])) || ((board[2][0] == board[1][1]) && (board[2][0] == board[0][2]))) {
        return board[1][1];
    };
    // Check for the horizontal and vertical win
    for (let i = 0; i < 3; i++) {
        if ((board[i][0] != EMPTY) && ((board[i][0] == board[i][1]) && (board[i][0] == board[i][2]))){
            return board[i][0];
        } else if ((board[0][i] != EMPTY) && ((board[0][i] == board[1][i]) && (board[0][i] == board[2][i]))){
            return board[0][i];
        };
    };
    // If there is no winner, return None
    return null;
};

function terminal(board) {
    //Returns True if game is over, False otherwise.
    // Check if there is a winner
    if ((winner(board) === X) || (winner(board) === O)){
        return true;
    }
    // Check if there are any moves left
    else if (actions(board).length === 0) {
        return true;
    }
    // The game has not ended if there are moves left and no winner
    return false;
}

function utility(board){
    // Returns 1 if X has won the game, -1 if O has won, 0 otherwise.
    util = winner(board)
    if (util === X){
        return 1;
    }
    else if (util === O){
        return -1;
    }
    return 0;
}

function minimax(board){
    //Returns the optimal action for the current player on the board.
    // Check there are valid moves
    if (terminal(board)){
        return null
    }
    // Set the variables depending on who the player is
    let best_move = null
    let maximising = false
    let best_score = Number.POSITIVE_INFINITY
    if (player(board) === X){
        best_score = Number.NEGATIVE_INFINITY
        maximising = true
    }
    // Play each of the possibilities in a loop
    actions(board).forEach((move) => {
        let play = result(board, move)
        if (terminal(play)){
            // If the play ends the game, check the utility
            score = utility(play)
        }
        else {
            // If it doesn't end the game, find the min/max score of that branch
            score = minimax_score(play, (! maximising))
        }
        if ((maximising && (score > best_score)) || ((! maximising) && (score < best_score))) {
            best_score = score;
            best_move = move;
        }
    });
    return best_move;
}

function minimax_score(board, maximising) {
    // Helper function to score a path for the minimax function
    // Return the utility if it is the end of the branch
    if (terminal(board)) {
        return utility(board);
    }
    // Create a list to save the scores from each move
    let score = []
    // Find the utility for every move
    actions(board).forEach((move) => {
        let play = result(board, move)
        // Call this function recursively until the end branch is reached
        score.push(minimax_score(play, (! maximising)))
    })
    // Return the maximum score for X moves and minimum for O
    if (maximising) {
        return Math.max(...score)
    }
    else {
        return Math.min(...score)
    }
}

// Display
var aiTurn = false;
var playerTurn = false;
var user = null;
var gameBoard = initial_state();

var rootEl = $('#root')

function prepareBoardView() {
    rootEl.children('ul').each(function (index) {
        $(this).data("index", index)
        $(this).children().each(function(innerIndex) {
            $(this).data("index", innerIndex);
            $(this).data("outerIndex", $(this).parent().data("index"))
            $(this).css("backgroundColor", "white")
            $(this).text(null)
            $(this).attr("id", `${$(this).parent().data("index")}-${innerIndex}`)
            $(this).data("i", `${$(this).parent().data("index")}`);
            $(this).data("j", `${innerIndex}`);
        });
    });
}

function renderBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            $(`#${i}-${j}`).text(gameBoard[i][j]);
            $(`#${i}-${j}`).off()
            if((gameBoard[i][j] === EMPTY) && (playerTurn === true)){
                $(`#${i}-${j}`).on("click", (event) => {
                    gameBoard = result(gameBoard, [$(event.target).data('i'), $(event.target).data('j')])
                    nextTurn();
                })
            }
        }
    }
}

function setBoardVisibile(bool) {
    if (bool) {
        rootEl.children('ul').children().show();
        return;
    }
    rootEl.children('ul').children().hide();
    
}

function selectSymbolView() {
    setBoardVisibile(false)
    let div = $('<div>');
    let h2 = $('<h2>');
    h2.text("Select player symbol:")
    div.attr("id", "playerSelect");
    ul = $('<ul>');
    div.append(h2);
    div.append(ul)
    for (let i = 0; i < playerStates.length; i++) {
        let li = $('<li>');
        li.text(playerStates[i]);
        li.css("backgroundColor", "white")
        li.on("click", (event) => {
            user = event.target.innerText;
            (user == "") ? user = EMPTY : user;
            $('#playerSelect').remove();
            setBoardVisibile(true)
            nextTurn();
        })
        ul.append(li);
    }
    rootEl.append(div)

}

function startGame() {
    aiTurn = false;
    playerTurn = false;
    user = null;
    prepareBoardView()
    selectSymbolView()
    gameBoard = initial_state();
};

function nextTurn() {
    if (terminal(gameBoard)) {
        playerTurn = false;
        aiTurn = false;
        renderBoard()
        return;
    }
    if (player(gameBoard) === user) {
        playerTurn = true;
        aiTurn = false;
    } else {
        playerTurn = false;
        aiTurn = true;
    }
    renderBoard()
    if (aiTurn) {
        gameBoard = result(gameBoard, minimax(gameBoard));
        nextTurn();
    }
};

startGame();
