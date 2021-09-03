console.log('Welcome to my hi-low game, first there will be a card drawn, you then must guess weather the next card will be higher or lower, the winner is the person who guesses the most correct!')

console.log('--------------------------------------')

//defining the round numbers and points 
let roundNum = 0;
let ply1points = 0;
let ply2points = 0;

let player1Name = prompt ('Player1 please enter your name');

let player2Name = prompt ('Player2 please enter your name');


//player1 picks how many rounds they want to play
let roundCount = 0; 
while(true){
  roundCount = prompt('How many rounds do you want to play (1-9)?');
  if (roundCount >0 && roundCount <10){
    console.log(player1Name + ' your ' + roundCount + ' round(s) will start now')
     break;
  }else{
    console.log('I don\'t understand, please enter a number between (1-9)')
  }
}
// //player2 picks how many rounds they want to play
// let round2 = prompt('Player2 how many rounds do you want to play?');

//this is the first card list, this is the list the computer picks from
let cardList = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];


//this is the second card list, this is the list the platers pick from
//let drawCards = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];


do {

  //pick the first card from the first card list 
  let pickedCard = Math.floor(Math.random() * cardList.length);
  let card1 = cardList[pickedCard];

  //pick the second card from the second card list 
  let draw = Math.floor(Math.random() * cardList.length);
  let cardDrawn = cardList[draw];

  //tell the user what was drawn and ask for their guess
  console.log('The first card drawn is ' + card1);

  while (true)
  {  
    let guess1 = prompt (player1Name + ', will the next card drawn be higher or lower (h or l)?');

    if (guess1 == "high" || guess1 == "h" || guess1 == "higher") {
        ply1points = ply1points + higherGuess(draw, pickedCard, cardDrawn);
        break;
      } else if (guess1 == "low" || guess1 == "l" || guess1 == "lower") {
        ply1points = ply1points + lowerGuess(draw, pickedCard, cardDrawn);
        break;
      } else {
        console.log('I don\'t understand please try again.')
      }
  }  
  //adding another number to the rounds
  roundNum++


  //the end of the do loop and start of player2 also printing points for Player1
} while (roundNum < roundCount) {
  console.log('--------------------------------------')
  console.log(player1Name +' you have ' + ply1points + ' point(s)');
  console.log('--------------------------------------')
  console.log(player2Name +'\'s Turn!');
}

//This function controls what happens when the player inputs a higher option, 
function higherGuess(draw, pickedCard, cardDrawn, card1) {
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

function lowerGuess(draw, pickedCard, cardDrawn, card1) {
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

roundNum = 0;
do {
  //pick the first card
  let pickedCard = Math.floor(Math.random() * cardList.length);
  let card1 = cardList[pickedCard];

  //pick the second card
  let draw = Math.floor(Math.random() * cardList.length);
  let cardDrawn = cardList[draw];

  //tell the user what was drawn and ask for their guess
  console.log('The first card drawn is ' + card1);


  

  while (true)
  {  
    let guess1 = prompt(player2Name + ' will the next card drawn be higher or lower (h or l)?');
    
    if (guess1 == "high" || guess1 == "h" || guess1 == "higher") {
      ply2points = ply2points + higherGuess(draw, pickedCard, cardDrawn, card1);
      break;
    }else if (guess1 == "low" || guess1 == "l" || guess1 == "lower") {
      ply2points = ply2points + lowerGuess(draw, pickedCard, cardDrawn, card1);
      break; 
    } else {
      console.log('I don\'t understand please try again')
    }
  }

  roundNum++
  // higherGuess();
} while (roundNum < roundCount) {
  console.log('--------------------------------------')
  console.log(player2Name + ' you have ' + ply2points + ' points')
  console.log('--------------------------------------')
  console.log('')  
  console.log('**************************************') 
  if (ply2points > ply1points) {
    console.log(' ' + player2Name+ ' wins!')
  }
  else if (ply1points > ply2points) {
    console.log(' ' + player1Name +' wins!')
  }
  else {

    console.log('  Its a draw!')
  }
  console.log('**************************************') 

}

/*
function higherGuess2(draw, pickedCard, cardDrawn, card1) {
  if (draw > pickedCard) {
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

function lowerGuess2(draw, pickedCard, cardDrawn, card1) {
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
*/


