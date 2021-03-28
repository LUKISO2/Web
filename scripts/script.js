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


window.onload=function(){
  const btn = document.querySelector(".btn-toggle");
  var darkStr = 'Světlý režim'
  var lightStr = 'Tmavý režim'

  btn.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
    if(this.textContent == lightStr) this.textContent = darkStr;
    else this.textContent = lightStr;
  });
}
