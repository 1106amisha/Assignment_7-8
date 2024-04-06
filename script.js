document.getElementById('roll-btn').addEventListener('click', rollDice);

let player1Score = 0;
let player2Score = 0;
const winningScore = 30;

function rollDice() {
    const dice1Value = Math.floor(Math.random() * 6) + 1;
    const dice2Value = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice1').src = `dice${dice1Value}.png`;
    document.getElementById('dice2').src = `dice${dice2Value}.png`;

    player1Score += dice1Value;
    player2Score += dice2Value;

    document.getElementById('player1-score').innerText = player1Score;
    document.getElementById('player2-score').innerText = player2Score;

    checkWinner();
}

function checkWinner() {
    if (player1Score >= winningScore && player2Score >= winningScore) {
        document.getElementById('winner').innerText = 'It\'s a Tie!';
        document.getElementById('roll-btn').disabled = true;
    } else if (player1Score >= winningScore) {
        document.getElementById('winner').innerText = 'Player 1 Wins!';
        document.getElementById('roll-btn').disabled = true;
    } else if (player2Score >= winningScore) {
        document.getElementById('winner').innerText = 'Player 2 Wins!';
        document.getElementById('roll-btn').disabled = true;
    }
}
