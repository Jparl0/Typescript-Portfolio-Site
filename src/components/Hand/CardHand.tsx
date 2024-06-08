let faceValue: [number, string];

export class Card {

  id: number;
  CardValue: number;
  CardName: string;
  CardColor: boolean;
  CardSuit: string;

  constructor(props:Card) {
      const {id, CardValue, CardName, CardColor, CardSuit} = props
      
      this.id = id;
      this.CardValue = CardValue;
      this.CardName = CardName;
      this.CardColor = CardColor;
      this.CardSuit = CardSuit;
    }
}

export class Hand {
  id: number;
  Cards?: Card[];
  Meld?: boolean;
  hasDiscarded?: boolean;
  hadDrawn?: boolean;

  constructor(props:Hand) {
      const {id, Cards, Meld, hasDiscarded, hadDrawn} = props
      
      this.id = id;
      this.Cards = Cards;
      this.Meld = Meld;
      this.hasDiscarded = hasDiscarded;
      this.hadDrawn = hadDrawn;
    }
}