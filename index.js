let round = prompt('How many rounds do you want to play?');

let roundNum = 0;


let cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let drawCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

do {

  //pick the first card
  let pickedCard = Math.floor(Math.random() * cardList.length);
  let card1 = cardList[pickedCard];

  //tell the user what was drawn and ask for their guess
  console.log('The first card drawn is ' + card1);
  let guess1 = prompt('Guess wether the next card drawn is going to be higher or lower');

  //pick the second card
  let draw = Math.floor(Math.random() * drawCards.length);
  let cardDrawn = drawCards[draw];

  //check if higher or lower
  console.log(guess1)
  if (guess1 == 'high' || 'h' || 'higher') {
    higherGuess(cardDrawn, card1);

  } else if (guess1 == 'low' || 'l' || 'lower') {
    lowerGuess(cardDrawn, card1);

  } else {

    console.log('invalid answer please try again')
    let guess1 = prompt('Guess high or low')

  }

  roundNum++
  // higherGuess();
} while (roundNum < round);

function higherGuess(cardDrawn, card1) {
  console.log('higher:');
  if (cardDrawn > card1) {
    console.log('Correct!');
    console.log('The card was ' + cardDrawn)
  }
  else {
    console.log('incorrect!')
    console.log('The card was ' + cardDrawn)
  }
}

 function lowerGuess(cardDrawn, card1) {
   console.log(cardDrawn + ', ' + card1);

  if (cardDrawn < card1) {
    console.log('Correct!')
    console.log('The card was ' + cardDrawn)
  }
  else {
    console.log('Incorrect!')
    console.log('The card was ' + cardDrawn)
  }
}