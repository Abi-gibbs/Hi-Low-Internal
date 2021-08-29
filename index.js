console.log('Wlcome to my hi-low game, first there will be a card drawn, you then must guess weather the next card will be higher or lower, the winner is the person who guesses the most correct!')

console.log('--------------------------------------')

//player1 picks how many rounds they want to play 
let round = prompt('Player1 how many rounds do you want to play?');

//player2 picks how many rounds they want to play
let round2 = prompt('Player2 how many rounds do you want to play?');

let roundNum = 0;
let roundNum2 = 0;
let points = 0;
let points2 = 0;

let cardList = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];



let drawCards = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];



do {

  //pick the first card
  let pickedCard = Math.floor(Math.random() * cardList.length);
  let card1 = cardList[pickedCard];

  //tell the user what was drawn and ask for their guess
  console.log('The first card drawn is ' + card1);
  let guess1 = prompt('Player1 guess wether the next card drawn is going to be higher or lower');

  //pick the second card
  let draw = Math.floor(Math.random() * drawCards.length);
  let cardDrawn = drawCards[draw];

  //check if higher or lower
  if (guess1 == "high" ||guess1 == "h" ||guess1 == "higher") {
    points = points + higherGuess(draw, pickedCard, cardDrawn);
    
  } else if (guess1 == "low" ||guess1 == "l" ||guess1 == "lower") {
    points = points + lowerGuess(draw, pickedCard);

  } else {

    console.log('invalid answer please try again')
    let guess1 = prompt('Guess high or low')

  }

  roundNum++
  // higherGuess();
} while (roundNum < round){
console.log ('You have ' + points + ' points');
console.log('Player2s Turn!')
}

function higherGuess(draw, pickedCard, points, cardDrawn) {
  if (draw > pickedCard) {
    console.log('Correct!');
    console.log('The card was ' + cardDrawn);
    return 1;
  }
  else {
    console.log('incorrect!')
    console.log('The card was ' + cardDrawn);
    return 0;
  }
}

 function lowerGuess(draw, pickedCard, points, cardDrawn) {
   if (draw < pickedCard) {
    console.log('Correct!');
    console.log('The card was ' + cardDrawn);
    return 1;
  }
  else {
    console.log('Incorrect!')
    console.log('The card was ' + cardDrawn)
    return 0;

  }
}


do {

  //pick the first card
  let pickedCard = Math.floor(Math.random() * cardList.length);
  let card1 = cardList[pickedCard];

  //tell the user what was drawn and ask for their guess
  console.log('The first card drawn is ' + card1);
  let guess1 = prompt('Player 2 guess wether the next card drawn is going to be higher or lower');

  //pick the second card
  let draw = Math.floor(Math.random() * drawCards.length);
  let cardDrawn = drawCards[draw];

  //check if higher or lower
  if (guess1 == "high" ||guess1 == "h" ||guess1 == "higher") {
    points2 = points2 + higherGuess2(cardDrawn, card1);

  } else if (guess1 == "low" ||guess1 == "l" ||guess1 == "lower") {
    points2 = points2 + lowerGuess2(cardDrawn, card1);

  } else {

    console.log('invalid answer please try again')
    let guess1 = prompt('Guess high or low')

  }

  roundNum2++
  // higherGuess();
} while (roundNum2 < round2){

console.log ('You have ' + points2 + ' points')
console.log('-----------------------------')


if (points2 > points){
  console.log('Player 2 wins!')
}
else if (points > points2){
  console.log('Player 1 wins!') 
}
else{
  console.log('Its a draw!')
}

}


function higherGuess2(cardDrawn, card1, points) {
  if (cardDrawn > card1) {
    console.log('Correct!');
    console.log('The card was ' + cardDrawn);
    return 1;
  }
  else {
    console.log('incorrect!')
    console.log('The card was ' + cardDrawn)
    return 0;
  }
}

 function lowerGuess2(cardDrawn, card1, points) {
   if (cardDrawn < card1) {
    console.log('Correct!');
    console.log('The card was ' + cardDrawn);
    return 1;
  }
  else {
    console.log('Incorrect!')
    console.log('The card was ' + cardDrawn)
    return 0;
  }
}