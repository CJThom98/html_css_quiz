var quizStatus = true;
var questionNumber = 0;
var answerNumber = 0;
var score = 0;
var highscore = 50;
var finalAnswerCheck = 0;
var checkTimes = 1;
var viewHighScoresBtnEl = document.getElementById('view-high-scores');
var startQuizBtnEl = document.getElementById('start-quiz');
var answer1BtnEl = document.getElementById('answer1');
var answer2BtnEl = document.getElementById('answer2');
var answer3BtnEl = document.getElementById('answer3');
var answer4BtnEl = document.getElementById('answer4');
var submitScoreEl = document.getElementById('submitScore');
var questionsEl = document.getElementById('questions');
var mainDivEl = document.getElementById('mainDiv');
var htmlTimeLeft = document.getElementById('timeLeft');
var answerCorrectWrong = document.getElementById('answerCorrectWrong');
var questionDisplayEl = document.getElementById('questionDisplay');
var finalScoreDisplayEl = document.getElementById('finalScoreDisplay');
var enterNameEl = document.getElementById('enterName');
var enterNameTextAreaEl = document.getElementById('enterNameTextArea');
var button1234 = document.createElement("button");
var timeLeft = 60;

answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';
answerCorrectWrong.style.display = 'none';
enterNameTextAreaEl.style.display = 'none';

var questionsObject = {
    correct: {
        0: "Requiem of the Rose King follows Prince Richard during which tumultuous period of English history?",
        1: "The Dragon Ball franchise is one anime's oldest and longest running franchises, but it gets inspiration from which ancient Chinese tale? ",
        2: "Spy X Family is set in the backdrop of rising tensions between the two fictional countries Westalias and Ostania, which both take inspiration from which two countries during the Cold War?",
        3: "In Attack on Titan, one of the characters is based on General Akiyama Yoshifuru, a controversial figure because of his actions from which conflict?",
        4: "The Wind Rises follows the life of which airplane designer, best known for his designs of the A6M 'Zero' carrier-fighter?"
    }
};

var answersObject = {
    answers: {
        0: { // Correct answer: 2
            0: "The English Civil War",
            1: "The Viking Age",
            2: "The Wars of the Roses",
            3: "The Anglo-Scottish Wars"
        },
        1: { // Correct answer: 0
            0: "Journey to the West",
            1: "Romance of the Three Kingdoms",
            2: "The Dream of the Red Chamber",
            3: "The Ballad of Mulan"
        },
        2: { // Correct answer: 1
            0: "North and South Korea",
            1: "West and East Germany",
            2: "North and South Vietnam",
            3: "USA and USSR"
        },
        3: { // Correct answer: 3
            0: "The First World War",
            1: "The Russo-Japanese War",
            2: "The Boshin War",
            3: "The First Sino-Japanese War"
        },
        4: { // Correct answer: 1
            0: "Takeo Doi",
            1: "Jiro Horikoshi",
            2: "Yuji Akasaka",
            3: "Shinichi Inoue"
        },
    }
};

htmlTimeLeft.textContent = timeLeft;

viewHighScoresBtnEl.addEventListener("click", function() { // view high scores
    var quizUsers = "";
    var substringTest = "";
    var highScores = "";

    for (var i = 0; i < localStorage.length; i++) {
        var checkUserValue = [];

        quizUsers = localStorage.getItem(localStorage.key(i));
        substringTest = quizUsers.substring(0,4)
        if (substringTest == "quiz") {
            checkUserValue = quizUsers.split(",");
            var userName = checkUserValue[0];
            highScores += "User " + userName.substring(4) + " high score is: " + checkUserValue[1] + "\n";
        }
    }
    window.alert(highScores);
});

answer1BtnEl.addEventListener("mouseover", function() {
    answerCorrectWrong.style.display = 'none';
});

answer2BtnEl.addEventListener("mouseover", function() {
    answerCorrectWrong.style.display = 'none';
});

answer3BtnEl.addEventListener("mouseover", function() {
    answerCorrectWrong.style.display = 'none';
});

answer4BtnEl.addEventListener("mouseover", function() {
    answerCorrectWrong.style.display = 'none';
});

startQuizBtnEl.addEventListener("click", function() {

    startQuizBtnEl.style.display = 'none';
    questionDisplayEl.style.display = 'none';
    finalScoreDisplayEl.style.display = 'none';
    enterNameEl.style.display = 'none';
    score = 0;
    timeLeft = 60;
    htmlTimeLeft.textContent = timeLeft;
    finalAnswerCheck = 0;
    checkTimes = 1;

    
});