/* Output a message to the console so we know that index.html is correctly calling main.js
console.log("Up and Running!");*/

// Inialise a new array called cards and store two queen cards and two king cards
var cards = ["queen","queen","king","king"];

// Create a new empty array to hold the cards in play
var cardsInPlay = [];

// checkForMatch function declaration
var checkForMatch = function () {
  // check for a match
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again!");
    }
}

// flipCard function declaration
var flipCard = function (cardId) {
  console.log("User flipped " + cards[cardId]);

  cardsInPlay.push(cards[cardId]);

  // invoke checkForMatch function if two cards have been flipped
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

flipCard(0);
flipCard(1);
