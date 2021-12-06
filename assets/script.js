// Get the button that opens the modal
var btn = document.querySelectorAll("h3.modal-button");
// Get the modal
var modals = document.querySelectorAll('.modal');
// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");
var correctBtn = document.querySelectorAll("p.display-answer");
var correctAnswer = document.querySelectorAll(".correct");


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
