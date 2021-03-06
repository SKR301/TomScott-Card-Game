class Board{
    cards = [];
    currCard = '';
    beads = 0;

    constructor(){
        this.cards = Array(35 - 3 + 1).fill().map((item, index) => 3 + index);
        this.currCard = 0;
        this.beads = 0;
    }

    // display board status
    displayStatus(){
        console.log("\tBoard"+"["+this.beads+"|"+this.currCard+"]: "+this.cards);
    }

    // pick a random card from board deck
    drawCard(){
        var index = Math.floor(Math.random() * this.cards.length);
        this.currCard = (this.cards[index] != undefined)? this.cards[index]: 0;

        this.cards = this.cards.filter( (ele) => { return (ele != this.currCard) });
    }
}

export default Board;