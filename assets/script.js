class TriviaGameShow {
    constructor(element, options={}) {

        this.categories = [];
        this.clues = {};

        this.currentClue = null;
        this.score = 0; 

        this.boardElement = element.querySelector(".board");
        this.scoreCountElement = element.querySelector(".score-count");
        this.formElement = element.querySelector("form");
        this.inputElement = element.querySelector("input[name=user-answer]");
        this.modalElement = element.querySelector(".card-modal");
        this.clueTextElement = element.querySelector(".clue-text");
        this.answerElement = element.querySelector(".answer");
        this.answerTextElement = element.querySelector(".answer_correct-answer-text");
        this.successTextElement = element.querySelector(".result_answer");
        this.failTextElement = element.querySelector(".result_fail");
    }

    
}