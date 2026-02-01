// =======================
// MODELO DE CARTAS
// =======================
const suits = ["♠", "♥", "♦", "♣"];
const values = [
  { name: "A", value: 11 },
  { name: "2", value: 2 },
  { name: "3", value: 3 },
  { name: "4", value: 4 },
  { name: "5", value: 5 },
  { name: "6", value: 6 },
  { name: "7", value: 7 },
  { name: "8", value: 8 },
  { name: "9", value: 9 },
  { name: "10", value: 10 },
  { name: "J", value: 10 },
  { name: "Q", value: 10 },
  { name: "K", value: 10 }
];

let deck = [];
let playerHand = [];
let dealerHand = [];
let gameOver = false;

// =======================
// CRIAR E EMBARALHAR BARALHO
// =======================
function createDeck() {
  deck = [];
  for (let suit of suits) {
    for (let card of values) {
      deck.push({
        name: card.name + suit,
        value: card.value
      });
    }
  }
}

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function drawCard() {
  return deck.pop();
}

// =======================
// PONTUAÇÃO
// =======================
function calculateScore(hand) {
  let total = 0;
  let aces = 0;

  for (let card of hand) {
    total += card.value;
    if (card.name.startsWith("A")) aces++;
  }

  while (total > 21 && aces > 0) {
    total -= 10;
    aces--;
  }

  return total;
}

// =======================
// ATUALIZAR TELA
// =======================
function updateUI() {
  document.getElementById("suaMao").textContent =
    playerHand.map(c => c.name).join(" ") +
    " (" + calculateScore(playerHand) + ")";

  document.getElementById("seuOponente").textContent =
    dealerHand.map(c => c.name).join(" ") +
    " (" + calculateScore(dealerHand) + ")";
}

// =======================
// INICIAR JOGO
// =======================
function startGame() {
  createDeck();
  shuffleDeck();

  playerHand = [];
  dealerHand = [];
  gameOver = false;

  playerHand.push(drawCard());
  playerHand.push(drawCard());

  dealerHand.push(drawCard());
  dealerHand.push(drawCard());

  updateUI();
}
startGame();

// =======================
// SACAR CARTA
// =======================
function receberCarta() {
  if (gameOver) return;

  playerHand.push(drawCard());
  updateUI();

  const score = calculateScore(playerHand);

  if (score > 21) {
    alert("Você estourou! Dealer venceu.");
    gameOver = true;
  } else if (score === 21) {
    alert("Blackjack! Você venceu!");
    gameOver = true;
  }
}

// =======================
// SEGURAR
// =======================
function segurar() {
  if (gameOver) return;

  while (calculateScore(dealerHand) < 17) {
    dealerHand.push(drawCard());
  }

  const playerScore = calculateScore(playerHand);
  const dealerScore = calculateScore(dealerHand);

  updateUI();

  if (dealerScore > 21) {
    alert("Dealer estourou! Você venceu!");
  } else if (dealerScore > playerScore) {
    alert("Dealer venceu!");
  } else if (dealerScore < playerScore) {
    alert("Você venceu!");
  } else {
    alert("Empate!");
  }

  gameOver = true;
}

// =======================
// AJUDA
// =======================
const confirmAction = () => {
  const response = confirm("Você conhece as regras do Blackjack?");

  if (response) {
    alert("Então vamos jogar!");
  } else {
    alert("O objetivo é chegar o mais perto possível de 21 sem ultrapassar. Cartas J, Q, K valem 10. Ás vale 1 ou 11. O dealer compra até 17.");
  }
};
