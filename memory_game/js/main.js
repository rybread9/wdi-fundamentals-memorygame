
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
    alert("You found a match!");
  } else {
    console.log("Sorry, try again.");
    alert("Sorry, try again.");
  }
}

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
// console.log("User flipped " + cardThree);
// console.log("User flipped " + cardFour);
