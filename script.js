let player1Score = 0;
let player2Score = 0;
const totalRounds = 5;


confirm(`
Selamat datang di game tebak angka
kamu diminta untuk menebak angka 1-3
dan kamu akan bermain dalam 5 ronde.
player yang berhasil mengumpulkan tebakan terbanyak akan menang
SELAMAT BERMAIN!
`);
function generateRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

function playRound(round) {
  alert("Ronde ke-" + round);

  let player1Guess = prompt("Player 1, tebak angka (1-3):");
  let player2Guess = prompt("Player 2, tebak angka (1-3):");

  if (player1Guess === null || player2Guess === null) {
    alert("Permainan dibatalkan.");
    return;
  }

  player1Guess = parseInt(player1Guess);
  player2Guess = parseInt(player2Guess);

  if (player1Guess < 1 || player1Guess > 3 || player2Guess < 1 || player2Guess > 3) {
    alert("Angka yang dimasukkan harus antara 1 hingga 3.");
    return;
  }

  let randomNumber = generateRandomNumber();
  alert("Angka yang benar adalah: " + randomNumber);

  if (player1Guess === randomNumber) {
    player1Score++;
    alert("Player 1 tebak dengan benar!");
  } else {
    alert("Player 1 tebak salah.");
  }

  if (player2Guess === randomNumber) {
    player2Score++;
    alert("Player 2 tebak dengan benar!");
  } else {
    alert("Player 2 tebak salah.");
  }
}

function playGame() {
  for (let round = 1; round <= totalRounds; round++) {
    playRound(round);
  }

  alert("Permainan selesai!\nSkor akhir:\nPlayer 1 adalah : " + player1Score + "\nPlayer 2 adalah : " + player2Score);
}

playGame();

