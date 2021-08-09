// console.log('Welcome to my card game!')
// player1Name = prompt ('what is player ones name?')
// player2Name = prompt ('What is player twos name?')



cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let card = Math.floor(Math.random() * cardList.length )

card1=cardList[card]

drawCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let draw = Math.floor(Math.random() * drawCards.length )

drawCard1 = drawCards[draw]


var guess = prompt ('Guess high or low')
if ( guess ==  'high' || 'h'  && drawCard1 > card1 ) {
  console.log('You got it right')
}
else if ( guess == 'low' || 'l' && drawCard1 < card1){
  console.log('You got it right')
}
else {
  console.log ('You got it wrong!')
}



