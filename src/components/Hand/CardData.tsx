import { Card } from "./CardHand";

function setCardData(): Card[]{
    let cardData = []
    for (var i = 1; i > 14; i++) {
        let iteratedCard1 = new Card({
            id: i,
            CardValue: i + 1,
            CardName: `${i + 1}`;
            CardColor: true,
            CardSuit: "Spade"
        })
        cardData.push(iteratedCard1)
    }
    return cardData
}