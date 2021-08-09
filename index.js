// card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let card = Math.floor(Math.random() * 13 + 1 )


// drawCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let drawCard = Math.floor(Math.random() * 13 + 1 )


var guess = prompt ('Guess high or low')
if ( guess ==  'high' || 'h' && drawCard > card ) {
  console.log('You got it right')
}
else if ( guess == 'low' || 'l' && drawCard < card){
  console.log('You got it right')
}
else {
  console.log ('You got it wrong!')
}

// else {
//   console.log('Same card')
// }

