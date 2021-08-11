let round = prompt('How many rounds do you want to play?');

let roundNum = 0;

	
let cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let pickedCard = Math.floor(Math.random() * cardList.length);

let card1 = cardList[pickedCard];
console.log(card1)





let drawCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let draw = Math.floor(Math.random() * drawCards.length);

let drawCard1 = drawCards[draw];
console.log(drawCard1)

do {

	let guess1 = prompt('Guess high or low')

	if (guess1 == 'high' || 'h' && drawCard1 < card1){
		console.log('You got it right')

	} else if (guess == 'low' || 'l' && drawCard1 < card1){
    console.log('You got it right')

	} else {
		console.log('You got it wrong!')
	}
  
  roundNum ++ 

} while (roundNum < round);




