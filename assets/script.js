// Get the button that opens the modal
var btn = document.querySelectorAll("h3.modal-button");
// Get the modal
var modals = document.querySelectorAll('.modal');
// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");
var correctBtn = document.querySelectorAll("button.correct-btn");
var incorrectBtn = document.querySelectorAll("button.incorrect-btn");
var correctAnswer = document.querySelectorAll(".correct");
var incorrectAnswer = document.querySelectorAll(".incorrect");

// When the user clicks on the button, open the modal
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
    }
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
    }
  }  
}

for (var i = 0; i < correctBtn.length; i++) {
  correctBtn[i].onclick = function(e) {
    e.preventDefault();
    correct = document.querySelector(e.target.getAttribute("href"));
    correct.style.display = "block";
  }
}

for (var i = 0; i < incorrectBtn.length; i++) {
  incorrectBtn[i].onclick = function(e) {
    e.preventDefault();
    incorrect = document.querySelector(e.target.getAttribute("href"));
    incorrect.style.display = "block"; 
  }
}

function timer() {
  var sec = 15;
  var timer = setInterval(function() {
    document.getElementById("timerDisplay").innerHTML='00:'+sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}