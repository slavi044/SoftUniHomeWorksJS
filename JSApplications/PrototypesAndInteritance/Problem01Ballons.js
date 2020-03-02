function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color,
            this.gasWeight = gasWeight
        }
    }

    class PartyBalon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight)
            this.ribbonColor = ribbonColor,
            this.ribbonLength = ribbonLength
            this._ribbon = {
                color: this.ribbonColor,
                length: this.ribbonLength
            }
        }

        get ribbon() {
            return this._ribbon;
        }        
    }

    class BirthdayBalloon extends PartyBalon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength)
            this._text = text
        }

        get text() {
            return this._text;
        }
    }

    return {
        Balloon: Balloon,
        PartyBalon: PartyBalon,
        BirthdayBalloon: BirthdayBalloon
    }
}