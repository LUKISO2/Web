var button, buttons, b, memes, x

hideClass = 'hideMeme';
buttons = document.querySelectorAll('iframe.memeVideo + button.close');
for (b = 0; b < buttons.length; b++) {
  button = buttons[b];
  button.addEventListener('click', function() {
    document.body.classList.toggle(hideClass);
    document.getElementById("memeVideo").src = "";
  });
}

memes = ["https://streamable.com/e/y2sqg5?autoplay=1&nocontrols=1", "https://streamable.com/e/5qwu13?autoplay=1&nocontrols=1", "https://streamable.com/e/mptpx5?autoplay=1&nocontrols=1"]
x = getRndInteger(0, 3)
function randomMeme() {
  document.getElementById("memeVideo").src = memes[x];
}

document.getElementById("next").addEventListener("click", function() {
  x = x + 1
  if(x == 3) x = 0
  document.getElementById("memeVideo").src = memes[x];
})

function getRndInteger(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}
