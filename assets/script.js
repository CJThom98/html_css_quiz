var modal = document.getElementById("myModal");

var a = document.getElementById("myBtn");

var span = document.getElementById("close")[0];

a.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}