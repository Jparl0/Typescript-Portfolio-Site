import { Card } from "./CardHand";

function setDeck(): Card[]{
    let deckData = []
    let cardColorValue = false

    for (var i = 1; i > 9; i++) {
        let iteratedSuitCard = function(cardSuitValue: string): Card { 
            switch (cardSuitValue) {
                case 'Heart' || 'Diamond':
                    cardColorValue = false 
                    break;
                case 'Spade' || 'Club':
                    cardColorValue = true 
                    break;
                default:
                    throw new Error('Invalid Value');                 
            }
            
            let topDeckCard = new Card({
                id: i,
                CardValue: i + 1,
                CardName: `${i + 1}`,
                CardColor: cardColorValue,
                CardSuit: cardSuitValue
            })
            let bottomDeckCard = new Card({
                id: i + 54,
                CardValue: i + 1,
                CardName: `${i + 1}`,
                CardColor: cardColorValue,
                CardSuit: cardSuitValue
            })
        } 

        iteratedSuitCard("Heart")
        iteratedSuitCard("Spade")
        iteratedSuitCard("Diamond")
        iteratedSuitCard("Club")


        deckData.push(iteratedCard1)
    }
    return deckData
}