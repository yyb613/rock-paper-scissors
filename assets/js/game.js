// choices
var choices = ['R', 'P', 'S'];

// initialize stats variables
var wins = 0;
var losses = 0;
var ties = 0;

// ask if user wants to play
if (confirm("Do you want to play Rock, Paper, Scissors?")) {
    game();
} else {
    document.getElementById("thanks").innerHTML = "Have a nice day!"
}

// game
function game() {
    // computer's choice
    var compChoice = choices[Math.floor(Math.random() * choices.length)];

    // user chooses R,P,S
    var userChoice = prompt("Please choose R, P, or S").toUpperCase();

    // if invalid input
    if (!choices.includes(userChoice)) {
        alert("You entered an invalid input. \n Please try again.");
        game();
    }

    // calculate winner
    if (userChoice === compChoice) {
        alert("The computer chose " + compChoice + '.' + "\n It's a tie!"); // tie
        ties++;
    } else if (
        (userChoice === 'R' && compChoice === 'P') ||
        (userChoice === 'P' && compChoice === 'S') ||
        (userChoice === 'S' && compChoice === 'R')
      ) {
        alert("The computer chose " + compChoice + '.' + "\n Sorry, you lost!"); // lost
        losses++;
    } else {
        alert("The computer chose " + compChoice + '.' + "\n Yay, you won!"); // won
        wins++;
    }

    // see total wins, losses, and ties after each round
    var stats = "Wins: " + wins + "\n Losses: " + losses + "\n Ties: " + ties;

    // print stats
    alert(stats);

    // ask user if wants to play again
    if (confirm("Do you want to play again?")) {
        game();
    } else {
        document.getElementById("thanks").innerHTML = "Thanks for playing!"
    }
}
