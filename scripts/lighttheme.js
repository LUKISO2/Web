window.onload=function() {
  const btn = document.querySelector(".btn-toggle");
  var lightStr = 'Světlý režim'
  var darkStr = 'Tmavý režim'

  btn.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
    if(this.textContent == darkStr) this.textContent = lightStr;
    else this.textContent = darkStr;
    if(this.textContent == darkStr) document.cookie = "lighttheme=false"
    else document.cookie = "lighttheme=true"
  });
}
