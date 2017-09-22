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

//-------------------------------------------------------------------------------------------------------------------------------
/* A Function for updating the scoreboard:
    - increment the current score and write it back to the score element
*/
function updateScore() {
    var currentScore = document.getElementById('score').innerHTML;

    currentScore ++;
    document.getElementById('score').innerHTML = currentScore;
}
//-------------------------------------------------------------------------------------------------------------------------------
// A Function that updates the game-result
function updateGameResult(result, color){
  document.getElementById('game-result').innerHTML = result;
  document.getElementById('game-result').style.color = color;
}
//-------------------------------------------------------------------------------------------------------------------------------
// A Function that sets the class of the flipped cards so that the border-color can be updated to red (cardNoMatch) / green (cardWithMatch)
function updateBorderColor(clsName,index){
  document.getElementsByTagName('img')[cardsInPlay[index].position].className = clsName;
}
//-------------------------------------------------------------------------------------------------------------------------------
// A Function that unhides the play again button
function unhidePlayAgainButton(){
  document.querySelector('.hidden').removeAttribute('class');
}
//-------------------------------------------------------------------------------------------------------------------------------
// A Function that re-hides the play again button
function hidePlayAgainButton(){
  document.getElementById('play-again').className = 'hidden';
}
//-------------------------------------------------------------------------------------------------------------------------------
/* A Function that checks both card objects in cardsInPlay[] for a match:
    - check for a match using the rank property of each card object in cardsInPlay[]
    - if a match is found: set the class for the flipped cards to cardWithMatch so that the card border color is updated to green
    - if a match isn't found: set the class for the flipped cards to cardNoMatch so that the card border color is updated to red
    - update the game-result with either 'You found a match!' or 'Better luck next time'
*/
function checkForMatch() {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
      for (var i = 0; i < cardsInPlay.length; i++) {
        updateBorderColor('cardWithMatch',i);
      }

      updateGameResult('You found a match!','green');
      updateScore();

    } else {

      for (var i = 0; i < cardsInPlay.length; i++) {
        updateBorderColor('cardNoMatch',i);
      }

      updateGameResult('Better luck next time','red');
    }
}
//-------------------------------------------------------------------------------------------------------------------------------
/* A function to flip the card that has been clicked:
    - clicked card is only flipped if two cards haven't already been flipped
    - flip the card that has been clicked by setting the src attribute to the card image
    - push the flipped card to cardsInPlay[] if it hasn't already been flipped i.e. doesn't already exist in cardsInPlay[]
    - if two cards have been flipped, call checkForMatch() and unhide the play again button
*/
function flipCard() {
  if (cardsInPlay.length !== 2) {
      var cardId = this.getAttribute('data-id');

      this.setAttribute('src', cards[cardId].cardImage);

      if (cardsInPlay[0] !== cards[cardId] ) {
        cardsInPlay.push(cards[cardId]);
      }

      if (cardsInPlay.length === 2) {
        checkForMatch();
        unhidePlayAgainButton();
      }
  }
}
//-------------------------------------------------------------------------------------------------------------------------------
/* A function to create the board:
      - loop through the cards array
      - create an img element and set attribute src to the image of the back of the card
      - the data-id to the index i
      - set event listener which will call flipCard when a card is clicked
*/
function createBoard() {
    for (var i = 0 ; i < cards.length ; i++) {
      var cardElement = document.createElement('img');

      cardElement.setAttribute('src', 'images/back.png');
      cardElement.setAttribute('data-id',i);
      cardElement.addEventListener('click', flipCard);
      document.getElementById('game-board').appendChild(cardElement);
    }
}
//-------------------------------------------------------------------------------------------------------------------------------
/* A function that allows the user to play again:
    - empty the game-result message
    - remove border shading of cards in play
    - unflip cards in play
    - empty the cardsInPlay array
    - Hide the replay button
*/
function playAgain() {
  updateGameResult('','');
  for (var i = 0; i < cardsInPlay.length; i++) {
    document.getElementsByTagName('img')[cardsInPlay[i].position].className = '';
    document.getElementsByTagName('img')[cardsInPlay[i].position].setAttribute('src', 'images/back.png');
  }
  cardsInPlay = [];
  hidePlayAgainButton();
}
//-------------------------------------------------------------------------------------------------------------------------------

//add a click event listener to the play again button - when clicked, call createBoard function
document.getElementById('play-again').addEventListener('click', playAgain);

createBoard();
