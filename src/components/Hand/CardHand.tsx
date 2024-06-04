export class Card {

    id: number;
    CardValue: number;
    CardName: string;
    CardColor: boolean;

    constructor(props:Card) {
        const {id, CardValue, CardName, CardColor} = props
        
        this.id = id;
        this.CardValue = CardValue;
        this.CardName = CardName;
        this.CardColor = CardColor;
      }
}
export class Hand {
    id: number;
    Cards?: Card[];
    Meld?: boolean;
    hasDiscarded?: boolean;

    constructor(props:Hand) {
        const {id, Cards, Meld, hasDiscarded} = props
        
        this.id = id;
        this.Cards = Cards;
        this.Meld = Meld;
        this.hasDiscarded = hasDiscarded;
      }
}