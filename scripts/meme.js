var button, buttons, b, x, y, templeate1, templeate2, memesCodes

hideClass = 'hideMeme';
buttons = document.querySelectorAll('iframe.memeVideo + button.close');
for (b = 0; b < buttons.length; b++) {
  button = buttons[b];
  button.addEventListener('click', function() {
    document.body.classList.toggle(hideClass);
    document.getElementById("memeVideo").src = "";
  });
}

templeate1 = "https://streamable.com/e/"
templeate2 = "?autoplay=1&nocontrols=1"
memesCodes = ["2wv56i", "2ru1wv", "939c73", "gfnf8p"]
y = memesCodes.length;
x = getRndInteger(0, y)

function getLink() {
  return templeate1.concat(memesCodes[x], templeate2);
}

function randomMeme() {
  document.getElementById("memeVideo").src = getLink();
}

function getRndInteger(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

document.getElementById("next").addEventListener("click", function() {
  x += 1;
  if(x == y) x = 0;
  document.getElementById("memeVideo").src = getLink();
})