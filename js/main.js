/* Output a message to the console so we know that index.html is correctly calling main.js
console.log("Up and Running!");*/

// Inialise a new array called cards and store two queen cards and two king cards
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },

  {
    rank:"queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },

  {
    rank:"king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },

  {
    rank:"king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

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
var flipCard = function () {
  //discover which card was flipped by User
  var cardId = this.getAttribute('data-id');

  cardsInPlay.push(cards[cardId].rank);

  // display the front of the card that has been flipped
  this.setAttribute('src', cards[cardId].cardImage);

  // invoke checkForMatch function if two cards have been flipped
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

// createBoard function declaration
var createBoard = function () {
  //loop through the cards array
  for (var i = 0 ; i < cards.length ; i++) {
    //create an img element and store in a new variable
    var cardElement = document.createElement('img');
    //set src attribute for the new cardElement
    cardElement.setAttribute('src', 'images/back.png');
    //set data-id attribute for the new cardElement
    cardElement.setAttribute('data-id',i);
    //add a click event listener to the cardElement
    cardElement.addEventListener('click', flipCard);
    //append cardElement to the game board
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();
