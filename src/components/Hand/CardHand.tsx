let faceValue: [number, string];

export class Card {

  id: number;
  CardFaceValue: typeof faceValue;
  CardPointValue: number;
  CardName: string;
  CardColor: boolean;
  CardSuit: string;

  constructor(props:Card) {
    const {id, CardFaceValue, CardPointValue, CardName, CardColor, CardSuit} = props
    
    this.id = id;
    this.CardFaceValue = CardFaceValue;
    this.CardPointValue = CardPointValue;
    this.CardName = CardName;
    this.CardColor = CardColor;
    this.CardSuit = CardSuit;

  }
  
  get pointValue(): number {
    return this.CardPointValue;
  }
}

export class Hand {
  id: number;
  Cards: Card[];
  pointTotalToLose: number;
  hasMelded: boolean;
  hasDiscarded?: boolean;
  hadDrawn?: boolean;

  constructor(props:Hand) {
      const {id, Cards, pointTotalToLose, hasMelded, hasDiscarded, hadDrawn} = props
      
      this.id = id;
      this.Cards = Cards;
      this.pointTotalToLose = pointTotalToLose;
      this.hasMelded = hasMelded;
      this.hasDiscarded = hasDiscarded;
      this.hadDrawn = hadDrawn;
    }
}