<<<<<<< HEAD
var hideStr = 'X',
  hideClass = 'hide';
var buttons = document.querySelectorAll('video + button.close');
for (var b = 0; b < buttons.length; b++) {
  var button = buttons[b];
  button.addEventListener('click', function() {
    var video = this.parentNode.childNodes[1];
    video.muted = !video.muted;
    video.classList.toggle(hideClass);
    button.classList.toggle(hideClass);
  });
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
=======
var hideStr = 'X',
  hideClass = 'hide';
var buttons = document.querySelectorAll('video + button.close');
for (var b = 0; b < buttons.length; b++) {
  var button = buttons[b];
  button.addEventListener('click', function() {
    var video = this.parentNode.childNodes[1];
    video.muted = !video.muted;
    video.classList.toggle(hideClass);
    button.classList.toggle(hideClass);
  });
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
>>>>>>> 8d01a1e946d30b4fa0424d78bed97cc62d208bfe
