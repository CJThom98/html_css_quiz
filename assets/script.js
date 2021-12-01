class TriviaGameShow {
    constructor(element, options={}) {

        this.categories = [];
        this.clues = {};

        this.currentClue = null;
        this.score = 0; 

        this.boardElement = element.querySelector(".board");
        this.scoreCountElement = element.querySelector(".score-count");
        
    }
}