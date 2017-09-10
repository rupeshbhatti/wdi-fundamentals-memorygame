/* Output a message to the console so we know that index.html is correctly calling main.js
console.log("Up and Running!");*/

// Inialise a new array called cards and store two queen cards and two king cards
var cards = ["queen","queen","king","king"];

// Create a new empty array to hold the cards in play
var cardsInPlay = [];

// Create a new variable to store the first card flipped
var cardOne = cards[2];

// Add the first flipped card to cardsInPlay
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

// Create a new variable to store the second card flipped
var cardTwo = cards[3];

// Add the second flipped card to cardsInPlay
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

// Check to see if two cards have been played
if (cardsInPlay.length === 2) {
  // check for a match
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again!");
  }
}
