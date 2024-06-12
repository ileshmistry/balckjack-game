let total = 0;
let message = "";

function startGame() {
  let card1 = randomCard();
  let card2 = randomCard();
  let cardsString = card1 + ", " + card2;
  checkForBlackjack(cardsString, card1 + card2);
  document.querySelector("#newCardBtn").classList.remove("hide");
}

function checkForBlackjack(cardString, cardTotal) {
  total = cardTotal;
  if (total === 21) {
    message = "Blackjack! Well done!";
    document.querySelector("#newCardBtn").classList.toggle("hide");
  } else if (total <= 20) {
    message = "Do you want to draw again?";
  } else {
    message = "Oh noo. Bust!";
    document.querySelector("#newCardBtn").classList.toggle("hide");
  }

  renderOutResults(cardString, total, message);
}

function newCard() {
  let card = randomCard();
  let newCards = document.querySelector("#cards").textContent + ", " + card;
  let newTotal = total + card;
  checkForBlackjack(newCards, newTotal);
}

function renderOutResults(cards, resultTotal, resultMessage) {
  updateTextContent("#cards", cards);
  updateTextContent("#sum", resultTotal);
  updateTextContent("#result", resultMessage);
}

function randomCard() {
  let min = 1;
  let max = 11;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateTextContent(id, text) {
  document.querySelector(id).textContent = text;
}
