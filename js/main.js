/* Output a message to the console so we know that index.html is correctly calling main.js
console.log("Up and Running!");*/

// Inialise a new array of card objects and store two queen cards and two king cards
var cards = [
  {
    position: 0,
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },

  {
    position: 1,
    rank:"queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },

  {
    position: 2,
    rank:"king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },

  {
    position: 3,
    rank:"king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

// Create a new empty array to hold the cards in play
var cardsInPlay = [];

// function for updating the scoreboard
var updateScore = function() {
    // Get the current score
    var currentScore = document.getElementById('score').innerHTML;

    // Increment the current score
    currentScore ++;

    //Write the new score back to the DOM
    document.getElementById('score').innerHTML = currentScore;
}

// Function that checks both card objects in the cardsInPlay array for a match
var checkForMatch = function () {

    // check for a match using the rank property of each card object in the cardsInPlay array
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {

      //select the flipped card objects and set class to cardWithMatch so that the card border color is updated to green
      for (var i = 0; i < cardsInPlay.length; i++) {
        document.getElementsByTagName('img')[cardsInPlay[i].position].className = 'cardWithMatch';
      }

      //set p value for game-result to contain result
      document.getElementById('game-result').innerHTML = 'You found a match!';
      document.getElementById('game-result').style.color = "green";

      updateScore();

    } else {

      //select the flipped card objects and set class to cardNoMatch so that the card border color is updated to red
      for (var i = 0; i < cardsInPlay.length; i++) {
        document.getElementsByTagName('img')[cardsInPlay[i].position].className = 'cardNoMatch';
      }

      //set p value for game-result to contain result
      document.getElementById('game-result').innerHTML = 'Better luck next time';
      document.getElementById('game-result').style.color = "red";
    }
}

// A function to flip the card that has been clicked
var flipCard = function () {
  //discover which card was flipped by User
  var cardId = this.getAttribute('data-id');

  // display the front of the card that has been flipped
  this.setAttribute('src', cards[cardId].cardImage);

  // push the flipped card to the cardsInPlay array
  cardsInPlay.push(cards[cardId]);

  // if two cards have been flipped, call checkForMatch()
  if (cardsInPlay.length === 2) {
    checkForMatch();
    // show the hidden 'Play Again button'
    document.querySelector('.hidden').removeAttribute('class');
  }
}

// A function to create the board
var createBoard = function () {

    //loop through the cards array
    for (var i = 0 ; i < cards.length ; i++) {
      //create an img element and store in a new variable
      var cardElement = document.createElement('img');
      //set src attribute for the new cardElement
      cardElement.setAttribute('src', 'images/back.png');
      //set data-id attribute for the new cardElement
      cardElement.setAttribute('data-id',i);
      //add a click event listener to the cardElement - when clicked, call flipCard function
      cardElement.addEventListener('click', flipCard);
      //append new cardElement i.e. img with src / data-id attributes to the game-board DOM node
      document.getElementById('game-board').appendChild(cardElement);
    }
}

var playAgain = function () {
  //empty the game-result message
  document.getElementById('game-result').innerHTML = '';

  for (var i = 0; i < cardsInPlay.length; i++) {
    //remove border shading of cards in play
    document.getElementsByTagName('img')[cardsInPlay[i].position].className = '';

    //unflip cards in play
    document.getElementsByTagName('img')[cardsInPlay[i].position].setAttribute('src', 'images/back.png');
  }

	//empty the cardsInPlay array
  cardsInPlay = [];

	//hide the replay button
  document.getElementById('play-again').className = 'hidden';
}

//-----------------------------------------------------

//add a click event listener to the play again button - when clicked, call createBoard function
document.getElementById('play-again').addEventListener('click', playAgain);

createBoard();
