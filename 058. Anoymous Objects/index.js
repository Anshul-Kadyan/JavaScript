// anonymous objects = Objects without a name
//                     Not directly referenced
//                     Less syntax. No need for unique names

class Card{
   constructor(value, suit){
      this.value = value
      this.suit = suit
   }
}

/*
let card1 = Card("A","Hearts")
let card2 = Card("A","Spades")
let card3 = Card("A","Diamonds")
let card4 = Card("A","Clubs")
let card5 = Card("2","Hearts")
let card6 = Card("2","Spades")
let card7 = Card("2","Diamonds")
let card8 = Card("2","Clubs")

let cards = [card1, card2, card3, card4, card5, card6, card7, card8]

console.log(card1.value + card1.suit)
console.log(cards[0].value + cards[0].suit)
*/

cards = [
   new Card("A","Hearts"),
   new Card("A","Spades"),
   new Card("A","Diamonds"),
   new Card("A","Clubs"),
   new Card("2","Hearts"),
   new Card("2","Spades"),
   new Card("2","Diamonds"),
   new Card("2","Clubs")
]

cards.forEach(card => console.log(`${card.value} ${card.suit}`))