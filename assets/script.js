// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// Get the modal
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

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

// questions
const questions = [
  {
    question: "A staple of British Christmas, this small sausage snack can be wrapped in bacon or puff pasty.",
    answer: "What are pigs in blankets?"
  },

  {
    question: "22 million of these are cooked every year at Christmas time.",
    answer: "What are turkeys?"
  },

  {
  question: "This Scandinavian cookie when translated to English means 'poor man's cookie.'",
  answer: "What is Fattignmann Bakkels?"
  },

  {
    question: "This hot brevage is so popular that you might hear people come a-caroling to get it.",
    answer: "What is wassail?"
  },

  {
    question: "While the jolly man is a symbol of Christmas, he's also an icon for this bubbly drink company.",
    answer: "What is Coca-Cola?"
  },

  {
    question: "These Western Europeans leave a tall candle on their front window to symbolize warmth and shelter during the holidays.",
    answer: "Who are the Irish?"
  },

  {
    question: "Krampus is the anti-Santa Clause of this central European country.",
    answer: "What is Austria?"
  },

  {
    question: "Families of this African nation celebrate by having a cookout called a 'braaing.'",
    answer: "What is South Africa?"
  },

  {
    question: "The shortcake emoji is actually a Christmas cake, a traditional dessert for this Asian nation.",
    answer: "What is Japan?"
  },

  {
    question: "Día de las Velitas is when this South American nation decorates their streets and houses with candles, lanterns, and lights.",
    answer: "What is Colombia?"
  },

  {
    question: "While this Middle Eastern country doesn't celebrate Christmas, they do celebrate the winter solstice known as Yalda Night.",
    answer: "What is Iran?"
  },

  {
    question: "A golden ticket, hot chocolate, and a magic sleigh bell.",
    answer: "What is the Polar Express?"
  },

  {
    question: "The Candy Cane forest, the swirly twirly gumdrops, and the Lincoln Tunnel.",
    answer: "What is Elf?"
  },

  {
    question: "A toy cowboy gun, a suggestive lamp, and a pink bunny suit.",
    answer: "What is A Christmas Story?"
  },
  
  {
    question: "Three ghosts, a grumpy old man, and a frog.",
    answer: "What is a Muppet Christmas Carol?"
  },

  {
    question: "Paint cans, stairs covered in tar, and a scorching hot door knob.",
    answer: "What is Home Alone?"
  },
]

// If user answers correctly, award points based on category


// If user answers incorrectly, show correct answer, don't award points

// Ten second timer for each question

// When user clicks on score, should be able to see theirs and others scores